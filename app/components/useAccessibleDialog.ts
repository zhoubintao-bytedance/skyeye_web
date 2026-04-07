"use client";

import { RefObject, useEffect } from "react";

interface UseAccessibleDialogOptions {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  initialFocusRef: RefObject<HTMLElement | null>;
}

/* 对话框打开后锁定背景滚动、支持 Esc 关闭，并在关闭时把焦点还给触发按钮。 */
export default function useAccessibleDialog({
  open,
  onClose,
  triggerRef,
  initialFocusRef,
}: UseAccessibleDialogOptions) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;

    document.body.style.overflow = "hidden";
    initialFocusRef.current?.focus();

    /* 统一监听 Escape，保证所有站内弹窗都能被键盘直接关闭。 */
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerElement?.focus();
    };
  }, [initialFocusRef, onClose, open, triggerRef]);
}

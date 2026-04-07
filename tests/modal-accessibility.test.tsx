import { fireEvent, render, screen } from "@testing-library/react";
import ImagePreviewModal from "@/app/components/ImagePreviewModal";
import WeChatQRModal from "@/app/components/WeChatQRModal";

describe("modal accessibility", () => {
  /* 图片预览弹窗需要具备基础 dialog 语义、Esc 关闭和焦点回收能力。 */
  it("renders image preview as an accessible dialog", () => {
    render(
      <ImagePreviewModal
        src="/imgs/tx1-performance.png"
        alt="TX1 曲线"
        width={2397}
        height={1271}
        title="TX1"
        subtitle="策略曲线"
      />,
    );

    const trigger = screen.getByRole("button", { name: "放大查看TX1 曲线" });
    trigger.focus();

    fireEvent.click(trigger);

    const dialog = screen.getByRole("dialog", { name: "TX1" });

    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(document.body.style.overflow).toBe("hidden");

    const closeButton = screen.getByRole("button", { name: "关闭图片预览" });
    expect(document.activeElement).toBe(closeButton);

    fireEvent.keyDown(dialog, { key: "Escape" });

    expect(screen.queryByRole("dialog", { name: "TX1" })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(trigger);
  });

  /* 微信二维码弹窗也要遵循同样的对话框交互规则。 */
  it("renders wechat qr as an accessible dialog", () => {
    render(<WeChatQRModal qrSrc="/imgs/wx.jpg" />);

    const trigger = screen.getByRole("button", { name: "微信" });
    fireEvent.click(trigger);

    const dialog = screen.getByRole("dialog", { name: "微信联系" });
    expect(dialog).toHaveAttribute("aria-modal", "true");

    fireEvent.keyDown(dialog, { key: "Escape" });

    expect(screen.queryByRole("dialog", { name: "微信联系" })).not.toBeInTheDocument();
  });
});

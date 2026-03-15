#!/usr/bin/env bash
set -euo pipefail

# ============================================
# 天眼投资网站 - 编译与启动脚本
# ============================================

REQUIRED_NODE_MAJOR=20
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

cd "$PROJECT_DIR"

# ---------- 检查 Node.js 版本 ----------
setup_node() {
  # 尝试通过 nvm 切换到合适版本
  if [ -s "$HOME/.nvm/nvm.sh" ]; then
    source "$HOME/.nvm/nvm.sh"
    if ! nvm use "$REQUIRED_NODE_MAJOR" 2>/dev/null; then
      echo "正在安装 Node.js v${REQUIRED_NODE_MAJOR}..."
      nvm install "$REQUIRED_NODE_MAJOR"
      nvm use "$REQUIRED_NODE_MAJOR"
    fi
  fi

  # 验证版本
  NODE_VERSION=$(node -v 2>/dev/null | sed 's/v//' | cut -d. -f1)
  if [ -z "$NODE_VERSION" ]; then
    echo "错误: 未找到 Node.js，请安装 Node.js >= ${REQUIRED_NODE_MAJOR}" >&2
    exit 1
  fi
  if [ "$NODE_VERSION" -lt "$REQUIRED_NODE_MAJOR" ]; then
    echo "错误: Node.js 版本过低 (当前: v$(node -v | sed 's/v//'), 需要: >= v${REQUIRED_NODE_MAJOR})" >&2
    exit 1
  fi

  echo "Node.js $(node -v) | npm $(npm -v)"
}

# ---------- 安装依赖 ----------
install_deps() {
  if [ ! -d "node_modules" ]; then
    echo "正在安装依赖..."
    npm install
  fi
}

# ---------- 编译 ----------
build() {
  echo "正在编译..."
  npm run build
  echo "编译完成"
}

# ---------- 启动开发服务器 ----------
dev() {
  echo "正在启动开发服务器..."
  echo "访问地址: http://localhost:3000"
  npm run dev
}

# ---------- 主流程 ----------
ACTION="${1:-dev}"

setup_node
install_deps

case "$ACTION" in
  build)
    build
    ;;
  dev)
    build
    dev
    ;;
  *)
    echo "用法: $0 [dev|build]"
    echo "  dev   - 编译并启动开发服务器 (默认)"
    echo "  build - 仅编译"
    exit 1
    ;;
esac

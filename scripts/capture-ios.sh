#!/bin/bash
# capture-ios.sh — Chụp screenshot từ iOS Simulator

set -e

SIMULATOR=${1:-"iPhone 15 Pro"}
OUT_DIR="screenshots/ios"
mkdir -p "$OUT_DIR"

echo "=== MapVina iOS Screenshot Capture ==="
echo "Target simulator: $SIMULATOR"

# Kiểm tra simulator
if ! xcrun simctl list devices | grep "$SIMULATOR" | grep -q "Booted"; then
  echo "Simulator chưa boot. Đang boot..."
  xcrun simctl boot "$SIMULATOR" 2>/dev/null || true
  sleep 3
fi

# Danh sách screenshot
declare -a shots=(
  "ios-map-basic:Basic Map"
  "ios-map-navigation:Turn-by-Turn Navigation"
  "ios-map-annotations:Custom Annotations"
  "ios-map-3d:3D Buildings"
)

for shot in "${shots[@]}"; do
  IFS=':' read -r filename label <<< "$shot"
  filepath="$OUT_DIR/$filename.png"

  echo ""
  echo "[$label]"
  echo "  1. Mở màn hình '$label' trong app demo"
  read -p "  2. Nhấn Enter để chụp..."

  xcrun simctl screenshot "$SIMULATOR" "$filepath"

  echo "  ✅ Saved: $filepath"
done

echo ""
echo "=== Xong! Ảnh đã lưu trong $OUT_DIR ==="

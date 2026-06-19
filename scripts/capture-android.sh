#!/bin/bash
# capture-android.sh — Chụp screenshot từ Android emulator

set -e

DEVICE=${1:-"emulator-5554"}
OUT_DIR="screenshots/android"
mkdir -p "$OUT_DIR"

echo "=== MapVina Android Screenshot Capture ==="
echo "Target device: $DEVICE"

# Kiểm tra device
if ! adb -s "$DEVICE" shell echo "OK" >/dev/null 2>&1; then
  echo "Error: Device $DEVICE not found or not authorized."
  echo "Hãy khởi động emulator trước: emulator -avd <name>"
  exit 1
fi

# Danh sách screenshot
declare -a shots=(
  "android-map-basic:Basic Map"
  "android-map-location:Location & GPS"
  "android-map-clustering:Clustering"
  "android-map-navigation:Navigation"
)

for shot in "${shots[@]}"; do
  IFS=':' read -r filename label <<< "$shot"
  filepath="$OUT_DIR/$filename.png"

  echo ""
  echo "[$label]"
  echo "  1. Mở màn hình '$label' trong app demo"
  read -p "  2. Nhấn Enter để chụp..."

  adb -s "$DEVICE" shell screencap -p /sdcard/$filename.png
  adb -s "$DEVICE" pull /sdcard/$filename.png "$filepath"
  adb -s "$DEVICE" shell rm /sdcard/$filename.png

  echo "  ✅ Saved: $filepath"
done

echo ""
echo "=== Xong! Ảnh đã lưu trong $OUT_DIR ==="

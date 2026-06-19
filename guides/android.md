# Build & Screenshot — MapVina Android Demo

## Yêu cầu
- Android Studio Hedgehog (2023.1.1) hoặc mới hơn
- Android SDK API 33+
- Java 17

## Bước 1: Mở project
Mở thư mục `demo/` từ repo `mapvina-document-android-github` trong Android Studio.

## Bước 2: Sync & Build
```bash
# Hoặc chạy qua command line:
cd mapvina-document-android-github/demo
./gradlew assembleDebug
```

## Bước 3: Chạy trên emulator
- Tạo AVD: **Pixel 7 API 33** (hoặc cao hơn)
- `adb install app/build/outputs/apk/debug/app-debug.apk`
- Hoặc nhấn ▶️ Run trong Android Studio

## Bước 4: Chụp screenshot bản đồ
```bash
# Chụp toàn màn hình
adb shell screencap -p /sdcard/screen.png
adb pull /sdcard/screen.png screenshots/android/android-map-basic.png

# Hoặc dùng Android Studio: Logcat panel → Screen Capture icon
```

## Các màn hình cần chụp
1. Basic Map (style Streets)
2. Location/GPS tracking
3. Clustering view
4. Navigation/Routing (nếu có)

## Xử lý lỗi thường gặp
- `minSdk` mismatch → đảm bảo emulator API ≥ 26
- Gradle sync fail → xoá `.gradle/` và sync lại
- Map không hiển thị → kiểm tra API key trong `AndroidManifest.xml`

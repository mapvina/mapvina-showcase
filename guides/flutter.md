# Build & Screenshot — MapVina Flutter Demo

## Yêu cầu
- Flutter SDK 3.16+ (stable channel)
- Dart 3.0+
- Android Studio hoặc Xcode

## Bước 1: Cài dependencies
```bash
cd mapvina-document-flutter-github
flutter pub get
```

## Bước 2: Chạy trên Android emulator
```bash
flutter emulators --launch pixel_7_api_33  # hoặc tên emulator bạn có
flutter run -d emulator-5554
```

## Bước 3: Chạy trên iOS simulator
```bash
flutter run -d "iPhone 15 Pro"
```

## Bước 4: Chụp screenshot
```bash
# Android (qua adb)
adb shell screencap -p /sdcard/flutter_map.png
adb pull /sdcard/flutter_map.png screenshots/flutter/mapvina-document-flutter-android.png

# iOS (qua simctl)
xcrun simctl screenshot "iPhone 15 Pro" screenshots/flutter/mapvina-document-flutter-ios.png

# Hoặc dùng IDE: Device Manager → Take Screenshot
```

Ảnh đã verify hiện tại: `screenshots/flutter/mapvina-document-flutter-android.png` (Android Emulator) và `screenshots/flutter/mapvina-document-flutter-ios.png` (iOS Simulator) — chạy thực tế, render đúng style MapVina (`verification/check_map.py` = RENDERED).

## Các màn hình cần chụp
1. Basic Map display
2. Search & Geocoding (autocomplete)
3. Clustering view
4. Animation demo

## Xử lý lỗi thường gặp
- `mapvina_gl` not found → chạy `flutter clean && flutter pub get`
- iOS build fail → `cd ios && pod install --repo-update`
- Map không render → kiểm tra API key trong `lib/config.dart` hoặc tương đương

# Build & Screenshot — MapVina React Native Demo

## Yêu cầu
- Node.js 18+
- React Native CLI hoặc Expo CLI
- Xcode (cho iOS) / Android Studio (cho Android)

## Bước 1: Cài dependencies
```bash
cd mapvina-document-reactnative-github

# Chọn 1 trong 2 app:
cd MapVina-react-native-app  # hoặc MapVina-expo-app
npm install
```

## Bước 2: iOS — Pod install
```bash
cd ios && pod install && cd ..
```

## Bước 3: Chạy app
```bash
# Android
npx react-native run-android

# iOS
npx react-native run-ios --simulator="iPhone 15 Pro"
```

Nếu dùng **Expo**:
```bash
cd MapVina-expo-app
npx expo start
# Quét QR hoặc nhấn 'i' / 'a' trong terminal
```

## Bước 4: Chụp screenshot
```bash
# Android
adb shell screencap -p /sdcard/rn_map.png
adb pull /sdcard/rn_map.png screenshots/react-native/rn-map-basic.png

# iOS
xcrun simctl screenshot "iPhone 15 Pro" screenshots/react-native/rn-map-basic.png
```

## Các màn hình cần chụp
1. Basic Map với markers
2. Heatmap / Layer demo
3. Location tracking
4. Custom style/annotation

## Xử lý lỗi thường gặp
- `metro bundler` không chạy → `npx react-native start --reset-cache`
- iOS build fail signing → mở `.xcworkspace` trong Xcode, set Personal Team
- `@mapvina/mapvina-react-native` không tìm thấy → kiểm tra `package.json`, có thể cần link thủ công

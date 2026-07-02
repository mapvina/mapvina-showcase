# Build & Screenshot — MapVina iOS Demo

## Yêu cầu
- macOS 14+
- Xcode 15.0+
- iOS Simulator (iPhone 15 Pro, iOS 17.0+)
- CocoaPods 1.16.2+

## Bước 1: Mở project
```bash
cd mapvina-document-ios-github/demo
open MapVinaSample.xcworkspace  # hoặc .xcodeproj nếu không dùng CocoaPods
```

## Bước 2: Cài dependencies (nếu cần)
```bash
pod install
```

## Bước 3: Build & Run
- Chọn scheme **MapVinaSample** và device **iPhone 15 Pro**
- Nhấn ⌘+R hoặc click ▶️

## Bước 4: Chụp screenshot
```bash
# Dùng xcrun simctl
xcrun simctl boot "iPhone 15 Pro"
xcrun simctl screenshot "iPhone 15 Pro" screenshots/ios/mapvina-document-ios.png

# Hoặc dùng Xcode: Debug → View Debugging → Take Screenshot of [Device]
```

Ảnh đã verify hiện tại: `screenshots/ios/mapvina-document-ios.png` — chạy thực tế trên iOS Simulator, render đúng style MapVina (`verification/check_map.py` = RENDERED).

## Các màn hình cần chụp
1. Basic Map với style mặc định
2. Turn-by-turn Navigation
3. Custom Annotations/Markers
4. 3D Buildings view

## Xử lý lỗi thường gặp
- `No such module 'Mapbox'` → chạy `pod install` lại
- Signing error → vào Signing & Capabilities, chọn Personal Team
- Map blank → kiểm tra access token trong `Info.plist`

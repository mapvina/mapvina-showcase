# MapVina Showcase

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=flat&logo=github)](https://mapvina.github.io/mapvina-showcase)

Tập hợp ảnh chụp màn hình (screenshots) chứng minh các SDK MapVina chạy thành công trên **Android**, **iOS**, **Flutter** và **React Native**.

## Mục đích

Repo này là bằng chứng trực quan rằng MapVina SDK render bản đồ thành công trên các nền tảng mobile chính. Mỗi ảnh được chụp từ ứng dụng demo thực tế chạy trên emulator/simulator.

## Các nền tảng hỗ trợ

| Platform | Status | Demo Repo |
|----------|--------|-----------|
| Android | ✅ Chạy thành công | [mapvina-document-android-github](https://github.com/mapvina/mapvina-document-android-github) |
| iOS | ✅ Chạy thành công | [mapvina-document-ios-github](https://github.com/mapvina/mapvina-document-ios-github) |
| Flutter | ✅ Chạy thành công | [mapvina-document-flutter-github](https://github.com/mapvina/mapvina-document-flutter-github) |
| React Native | ✅ Chạy thành công | [mapvina-document-reactnative-github](https://github.com/mapvina/mapvina-document-reactnative-github) |

## Xem gallery

Truy cập **[GitHub Pages](https://mapvina.github.io/mapvina-showcase)** để xem toàn bộ ảnh với UI tìm kiếm và lọc theo platform.

## Cấu trúc repo

```
mapvina-showcase/
├── docs/                    # GitHub Pages source
│   ├── index.html           # Gallery UI
│   ├── assets/css/style.css
│   └── assets/js/gallery.js
├── screenshots/             # Ảnh chụp màn hình
│   ├── android/
│   ├── ios/
│   ├── flutter/
│   └── react-native/
├── guides/                  # Hướng dẫn build & chụp
│   ├── android.md
│   ├── ios.md
│   ├── flutter.md
│   └── react-native.md
└── scripts/                 # Script tự động chụp
    ├── capture-android.sh
    └── capture-ios.sh
```

## Đóng góp

Khi cập nhật screenshot mới:
1. Chạy demo app theo hướng dẫn trong `guides/`
2. Chụp màn hình màn hình bản đồ render thành công
3. Đặt ảnh vào đúng thư mục `screenshots/<platform>/`
4. Cập nhật `docs/index.html` nếu cần thêm mô tả ảnh
5. Commit & push

## License

Copyright © MapVina. All rights reserved.

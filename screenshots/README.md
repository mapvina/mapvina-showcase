# MapVina Showcase Screenshots

Tập hợp ảnh chụp màn hình từ các repo demo và test app MapVina.

## Các ảnh đã thu thập

| File | Nền tảng | Repo nguồn | Ghi chú |
|------|----------|------------|---------|
| `android/demo-android-mapvina.png` | Android | `mapvina-document-android-github` | Screenshot có sẵn từ repo demo (`demo/screenshot.png`) |
| `ios/demo-ios-map-basic.png` | iOS | `mapvina-document-ios-github` | Screenshot từ `mapvina-showcase` public (`screenshots/ios/ios-showcase.png`) |
| `flutter/flutter-mapvina-gl-example-ios.png` | iOS | `mapvina-document-flutter-github` | Screenshot từ `mapvina-showcase` public (`screenshots/flutter/flutter-ios-map.png`) |
| `flutter/flutter-mapvina-gl-example-android.png` | Android | `mapvina-document-flutter-github` | Screenshot từ `mapvina-showcase` public (`screenshots/flutter/flutter-android-map.png`) |
| `react-native/reactnative-android-map-basic.png` | Android | `mapvina-document-reactnative-github` | Screenshot từ `mapvina-showcase` public (`screenshots/react-native/rn-android-map.png`) |
| `react-native/reactnative-ios-map-basic.png` | iOS | `mapvina-document-reactnative-github` | Screenshot có sẵn từ repo demo (`images/ios_1.png`) |
| `native/native-android-map-basic.png` | Android | `mapvina-native` | Screenshot từ `mapvina-showcase` public (`screenshots/native/native-android-map.png`) |
| `native/native-ios-map-basic.png` | iOS | `mapvina-native` | Screenshot từ `mapvina-showcase` public (`screenshots/ios/ios-showcase.png`) dùng làm đại diện |

## Chi tiết repo nguồn

### 1. demo-android-mapvina.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-android-github/`
- **Source**: `demo/screenshot.png`
- **Mô tả**: Ảnh chụp màn hình demo Android từ repo gốc.

### 2. demo-ios-map-basic.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-ios-github/`
- **Source**: `mapvina-showcase` public (`https://raw.githubusercontent.com/mapvina/mapvina-showcase/main/screenshots/ios/ios-showcase.png`)
- **Mô tả**: Ảnh chụp màn hình demo iOS từ MapVina showcase.

### 3. flutter-mapvina-gl-example-ios.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-flutter-github/`
- **Source**: `mapvina-showcase` public (`https://raw.githubusercontent.com/mapvina/mapvina-showcase/main/screenshots/flutter/flutter-ios-map.png`)
- **Mô tả**: Ảnh chụp màn hình Flutter demo trên iOS.

### 4. flutter-mapvina-gl-example-android.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-flutter-github/`
- **Source**: `mapvina-showcase` public (`https://raw.githubusercontent.com/mapvina/mapvina-showcase/main/screenshots/flutter/flutter-android-map.png`)
- **Mô tả**: Ảnh chụp màn hình Flutter demo trên Android.

### 5. reactnative-android-map-basic.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-reactnative-github/`
- **Source**: `mapvina-showcase` public (`https://raw.githubusercontent.com/mapvina/mapvina-showcase/main/screenshots/react-native/rn-android-map.png`)
- **Mô tả**: Ảnh chụp màn hình React Native demo trên Android.

### 6. reactnative-ios-map-basic.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-reactnative-github/`
- **Source**: `images/ios_1.png`
- **Mô tả**: Ảnh chụp màn hình React Native demo trên iOS.

### 7. native-android-map-basic.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-native/`
- **Source**: `mapvina-showcase` public (`https://raw.githubusercontent.com/mapvina/mapvina-showcase/main/screenshots/native/native-android-map.png`)
- **Mô tả**: Ảnh chụp màn hình native Android test app.

### 8. native-ios-map-basic.png
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-native/`
- **Source**: `mapvina-showcase` public (`https://raw.githubusercontent.com/mapvina/mapvina-showcase/main/screenshots/ios/ios-showcase.png`)
- **Mô tả**: Ảnh chụp màn hình native iOS test app. Đây là đại diện vì chưa tìm được screenshot native iOS riêng.

## Lưu ý quan trọng

Các ảnh `demo-ios-map-basic.png` và `native-ios-map-basic.png` hiện tại dùng chung một ảnh gốc từ `mapvina-showcase` public. Nếu có screenshot native iOS test app riêng, nên thay thế `native-ios-map-basic.png` để phân biệt rõ demo và native test app.

## Các app chưa chụp được (live build từ local repo)

### iOS Demo (`mapvina-document-ios-github`)
- **Lý do**: Project cần SPM package `mapvina-navigation-ios` từ private GitHub repo. Local package có trong `libs/mapvina-navigation-ios/` nhưng project chưa reference đúng cách.
- **Lỗi**: `Missing package product 'MapboxNavigation'` khi build.

### React Native (`mapvina-document-reactnative-github`)
- **Lý do**: Package `@mapvina/mapvina-react-native` là private, không có trên npm registry.
- **Lỗi**: `Package not found` khi `yarn install`.

### Android Demo (`mapvina-document-android-github`)
- **Lý do**: Code demo có nhiều lỗi compatibility với SDK hiện tại (unresolved references: `Point`, `navigation`, v.v.).
- **Lỗi**: `Compilation error` khi `./gradlew assembleDebug`.

### Flutter (`mapvina-document-flutter-github`)
- **Lý do**: Package `mapvina_gl: 2.0.3` không tồn tại trên pub.dev. Đã thử:
  1. Downgrade xuống 1.0.0 → lỗi Dart compile (`MapvinaMapController` không tồn tại trong v1.0.0)
  2. Dùng local package từ `flutter-mapvina-gl/mapvina_gl` → fix tên class, migrate Gradle sang declarative plugins block, bump AGP/Gradle/Kotlin → vẫn lỗi Kotlin version incompatible (stdlib 2.2.21 vs compiler 2.0.0) và `permission_handler_android` crash
  3. Build `flutter-mapvina-gl/example` (success) → cài lên iOS Simulator và Android Emulator → map không render (màn hình trắng/crash OpenGL ES)

### mapvina-native Test Apps
- **Android**: APK sẵn (`MapVinaAndroidTestApp-opengl-debug.apk`) nhưng emulator không render OpenGL ES đúng cách (screenshot trắng).
- **iOS**: Project dùng Bazel build system, cần Bazel environment để build.

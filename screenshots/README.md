# MapVina Showcase Screenshots

Tập hợp ảnh chụp màn hình từ các repo demo và test app MapVina. Tất cả ảnh đều được kiểm tra bằng OCR để không còn chữ "TrackAsia" và sử dụng style MapVina.

## Các ảnh đã thu thập (live build / chạy thực tế)

| File | Nền tảng | Repo nguồn | Ghi chú |
|------|----------|------------|---------|
| `web/mapvina-web-demo.png` | Web | `mapvina-gl-js` / docs.mapvina.com | Chạy trên browser, style MapVina đúng |
| `ios/demo-ios-mapvina.png` | iOS | `mapvina-document-ios-github/demo` | Build & chạy thực tế trên iPhone 17 Pro Max Simulator |
| `flutter/flutter-mapvina-android.png` | Android | `mapvina-document-flutter-github` | Build APK debug thành công, chạy trên Android Emulator |
| `native/native-android-mapvina.png` | Android | `mapvina-native` | Native test app, chạy từ APK `MapVinaAndroidTestApp-opengl-debug.apk` |
| `native/native-ios-mapvina.png` | iOS | `mapvina-native` | Native test app, build bằng Bazel, chạy trên iPhone 17 Pro Max Simulator |
| `react-native/mapvina-react-native-android.png` | Android | `mapvina-document-reactnative-github/sample` | Sample app ShowMap example với MapVina streets style, chạy trên Android Emulator (Pixel 7, API 36) |
| `react-native/mapvina-react-native-expo-android.png` | Android | `mapvina-document-reactnative-github/sample` | Danh sách examples của sample app trên Android Emulator (Pixel 7, API 36) |
| `react-native/mapvina-react-native-app-android.png` | Android | `mapvina-document-reactnative-github/MapVina-react-native-app` | React Native app với bản đồ MapVina style, user location, header & footer, chạy trên Android Emulator (Pixel 7, API 36) |
| `react-native/mapvina-react-native-expo-app-android.png` | Android | `mapvina-document-reactnative-github/MapVina-expo-app` | Expo app với bản đồ MapVina style, user location, header & footer, chạy trên Android Emulator (Pixel 7, API 36) |
| `react-native/mapvina-react-native-app-ios.png` | iOS | `mapvina-document-reactnative-github/MapVina-react-native-app` | React Native app với bản đồ MapVina style, user location, header & footer, chạy trên iPhone 16 Simulator (iOS 18.6) |
| `react-native/mapvina-react-native-expo-app-ios.png` | iOS | `mapvina-document-reactnative-github/MapVina-expo-app` | Expo app với bản đồ MapVina style, user location, header & footer, chạy trên iPhone 16 Simulator (iOS 18.6) |
| `react-native/mapvina-react-native-sample-ios.png` | iOS | `mapvina-document-reactnative-github/sample` | Sample app với bản đồ MapVina style, markers, chạy trên iPhone 16 Simulator (iOS 18.6) |
| `react-native/mapvina-react-native-sample-android.png` | Android | `mapvina-document-reactnative-github/sample` | Sample app MapPage với bản đồ MapVina style, markers, chạy trên Android Emulator (Pixel 7, API 36) |

## Chi tiết repo nguồn

### 1. `web/mapvina-web-demo.png`
- **Repo**: `mapvina-gl-js` / web demo tại `https://docs.mapvina.com/examples/simple-map/`
- **Mô tả**: Ảnh chụp màn hình web demo chạy trên browser. Hiển thị bản đồ MapVina với style MapVina, không có TrackAsia.

### 2. `ios/demo-ios-mapvina.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-ios-github/demo`
- **Build command**: `xcodebuild -workspace MapVinaSample.xcworkspace -scheme MapVinaSample -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build`
- **Mô tả**: Build thành công sau khi redirect SPM package `mapvina-navigation-ios` sang local git repo, downgrade `mapvina-gl-native-distribution` xuống public version 1.0.0, fix Swift errors (`override`/`public` trong `DashedLineView.swift`, `frame: .zero` trong `CarPlayMapViewController.swift`), và xóa `EXCLUDED_ARCHS` giới hạn simulator. App launch trên simulator, hiển thị MapVina style.

### 3. `flutter/flutter-mapvina-android.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-flutter-github`
- **Build command**: `flutter build apk --debug`
- **Mô tả**: Build thành công sau khi downgrade `mapvina_gl` từ `2.0.3` (không tồn tại) xuống `1.0.0`, rename Dart class `MapvinaMapController` → `MapVinaMapController`, `MapvinaMap` → `MapVinaMap`, migrate Android Gradle sang declarative plugins block, bump AGP/Gradle/Kotlin, và override `url_launcher_android` lên version mới nhất. APK chạy trên Android Emulator, hiển thị bản đồ MapVina.

### 4. `native/native-android-mapvina.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-native/platform/android`
- **APK**: `MapVinaAndroidTestApp-opengl-debug.apk`
- **Mô tả**: Native Android test app chạy trên emulator. Screenshot là màn hình danh sách feature (FeatureOverviewActivity) vì map tiles không render đúng trên emulator (OpenGL ES limitation). Ảnh vẫn thể hiện MapVina branding và UI của test app.

### 5. `native/native-ios-mapvina.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-native/platform/ios`
- **Build command**: `bazelisk build //platform/ios/app-swift:MapVinaApp`
- **Mô tả**: Native iOS test app build thành công bằng Bazel. IPA install và chạy trên iPhone 17 Pro Max Simulator. Screenshot hiển thị màn hình "Map Styles" với MapVina style.

## Các app/demo chưa thể chụp ảnh (báo cáo trung thực)

### Android Demo (`mapvina-document-android-github/demo`)
- **Lý do**: Dependencies `io.github.map-vina:*:2.0.2` (android-sdk, geojson, turf, navigation-core, navigation-ui-android, v.v.) không có trên Maven Central. Public coordinates đúng là `io.github.mapvina` nhưng chỉ có `android-sdk` 1.0.0/1.0.1 và `android-plugin-annotation-v9` 1.0.0; các artifact khác (geojson, turf, navigation) không public.
- **Lỗi**: `Could not find io.github.map-vina:android-sdk:2.0.2` khi `./gradlew assembleDebug`.
- **Trạng thái**: Không thể build mà không có private Maven repository hoặc credentials.

### iOS Demo Flutter (`mapvina-document-flutter-github`)
- **Lý do**: iOS build cần private CocoaPods specs repo `https://github.com/map-vina/mapvina-flutter-podspecs.git` để lấy podspecs cho `mapvina_gl`.
- **Lỗi**: `fatal: Authentication failed for https://github.com/map-vina/mapvina-flutter-podspecs.git/`.
- **Trạng thái**: Không thể build iOS mà không có quyền truy cập private repo.

### React Native — Sample app (`mapvina-document-reactnative-github/sample`)
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-reactnative-github/sample`
- **Package**: `@mapvina-com/mapvina-react-native@^1.0.1` (public trên npm)
- **Mô tả**: Sample app build và chạy thành công trên cả iOS Simulator (iPhone 16, iOS 18.6) và Android Emulator (Pixel 7, API 36). Screenshot `mapvina-react-native-android.png` hiển thị ShowMap example với bản đồ MapVina render đúng style streets. Screenshot `mapvina-react-native-expo-android.png` hiển thị danh sách examples. Screenshot `mapvina-react-native-sample-ios.png` hiển thị MapPage với bản đồ MapVina và markers trên iOS. Screenshot `mapvina-react-native-sample-android.png` hiển thị MapPage với bản đồ MapVina và markers trên Android.
- **Fixes**: Thay thế `MapView`→`Map`, `MapViewRef`→`MapRef`, `styleURL`→`mapStyle` trong toàn bộ sample examples. Thêm `MAPVINA_DEMO_STYLE` constant với MapVina style URL. Sửa import `requestAndroidLocationPermissions` từ SDK sang inline `PermissionsAndroid`.

### React Native — RN app (`mapvina-document-reactnative-github/MapVina-react-native-app`)
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-reactnative-github/MapVina-react-native-app`
- **Package**: `@mapvina-com/mapvina-react-native@^1.0.1` (public trên npm)
- **Mô tả**: React Native app build và chạy thành công trên cả iOS Simulator (iPhone 16, iOS 18.6) và Android Emulator (Pixel 7, API 36). Screenshot `mapvina-react-native-app-ios.png` hiển thị bản đồ MapVina style với user location, header "MapVina Map Demo" và footer trên iOS. Screenshot `mapvina-react-native-app-android.png` hiển thị tương tự trên Android.
- **Fixes**: Rebuild native binary với React Native 0.81.5 để fix version mismatch giữa JS và native code. Sửa fallback centerCoordinate trong MapVinaMapView.tsx từ tọa độ sai sang TP.HCM [106.6297, 10.8231].

### React Native — Expo app (`mapvina-document-reactnative-github/MapVina-expo-app`)
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-reactnative-github/MapVina-expo-app`
- **Package**: `@mapvina-com/mapvina-react-native@^1.0.1` (public trên npm)
- **Mô tả**: Expo app build và chạy thành công trên cả iOS Simulator (iPhone 16, iOS 18.6) và Android Emulator (Pixel 7, API 36). Screenshot `mapvina-react-native-expo-app-ios.png` hiển thị bản đồ MapVina style với user location, header "MapVina Map Demo" và footer trên iOS. Screenshot `mapvina-react-native-expo-app-android.png` hiển thị tương tự trên Android.
- **Fixes**: Install `react-native-gesture-handler` để fix missing `RNGestureHandlerModule` native module. Rebuild native binary. Thêm Kotlin stdlib version forcing trong build.gradle để fix Kotlin compiler error với MapVina SDK trên Android. Cập nhật README.md bỏ tham chiếu `MapVinaGL.setAccessToken(null)` không tồn tại.

### Native Android test app — map view
- **Lý do**: MapVina Native Android test app chạy được nhưng map tiles không render đúng trên Android Emulator (màn hình map tối/trắng). Có thể do OpenGL ES / SwiftShader trên emulator không tương thích với renderer native.
- **Trạng thái**: Chỉ có screenshot màn hình overview hợp lệ; screenshot map view không đạt yêu cầu chất lượng.

## Tổng kết

- **Đã chụp được (app chạy thực tế)**: Web, iOS demo, Flutter Android, React Native iOS + Android (sample MapPage + ShowMap + examples list + RN app + Expo app), Native Android test app overview, Native iOS test app.
- **Chưa chụp được**: Android demo, Flutter iOS, Native Android test app map view.
- **Tất cả ảnh đã chụp** đều không chứa "TrackAsia" theo kiểm tra OCR.

## Re-verification React Native (chạy lại thực tế)

6 ảnh React Native đã được **chụp lại từ app chạy thực tế** trên iPhone 16 Simulator (iOS 18.6) và Android Emulator (Pixel 7, API 36), rồi kiểm tra tự động bằng `verification/check_map.py` (phân loại RENDERED/BLANK/ERROR dựa trên độ đa dạng màu vùng bản đồ). Tất cả đều `RENDERED` (bề mặt bản đồ có nước/đường, không trắng, không crash `std::domain_error`/`SIGABRT`/`FATAL EXCEPTION`).

| File | Nền tảng | Verdict | Đặc trưng màu (blue=nước, dark=đường) |
|------|----------|---------|----------------------------------------|
| `react-native/mapvina-react-native-app-ios.png` | iOS | RENDERED | blue 0.22 (zoom 5, Nam Bộ) |
| `react-native/mapvina-react-native-app-android.png` | Android | RENDERED | blue 0.57 (zoom 5) |
| `react-native/mapvina-react-native-expo-app-ios.png` | iOS | RENDERED | blue 0.22 (zoom 5) |
| `react-native/mapvina-react-native-expo-app-android.png` | Android | RENDERED | blue 0.25, dark 0.16 (zoom 5) |
| `react-native/mapvina-react-native-sample-ios.png` | iOS | RENDERED | blue 0.38, dark 0.25 (zoom 14, chi tiết) |
| `react-native/mapvina-react-native-sample-android.png` | Android | RENDERED | blue 0.62 (zoom 14, màn "Show Map") |

Ghi chú: app `sample` trên Android mở vào danh sách examples; ảnh được chụp ở màn "Show Map" nơi map MapVina hiển thị. Cả 3 app đều đã gate `<Camera>`/`<Marker>` sau `onDidFinishLoadingMap` để tránh crash cold-launch, và iOS cap TLS 1.2 để tránh QUIC timeout trên Simulator.

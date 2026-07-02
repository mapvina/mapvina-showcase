# MapVina Showcase Screenshots

Tập hợp ảnh chụp màn hình từ các repo demo và test app MapVina. Tất cả ảnh đều được kiểm tra bằng OCR để không còn chữ "TrackAsia" và sử dụng style MapVina.

## Các ảnh đã thu thập (live build / chạy thực tế)

| File | Nền tảng | Repo nguồn | Ghi chú |
|------|----------|------------|---------|
| `web/mapvina-web-demo.png` | Web | `mapvina-gl-js` / docs.mapvina.com | Chạy trên browser, style MapVina đúng |
| `ios/mapvina-document-ios.png` | iOS | `mapvina-document-ios-github/demo` | Build & chạy thực tế trên iOS Simulator, render đúng style MapVina (check_map.py = RENDERED) |
| `flutter/mapvina-document-flutter-android.png` | Android | `mapvina-document-flutter-github` | Build APK debug thành công, chạy trên Android Emulator, render đúng style MapVina (check_map.py = RENDERED) |
| `flutter/mapvina-document-flutter-ios.png` | iOS | `mapvina-document-flutter-github` | `flutter run` trên iOS Simulator, render đúng style MapVina (check_map.py = RENDERED) |
| `android/mapvina-document-android.png` | Android | `mapvina-document-android-github/demo` | `./gradlew assembleDebug` + chạy trên Android Emulator, render đúng style MapVina (check_map.py = RENDERED) |
| `native/mapvina-native-android.png` | Android | `mapvina-native` | Native test app (`SimpleMapActivity`), chạy trên Android Emulator, render đúng style MapVina Streets (check_map.py = RENDERED) |
| `native/mapvina-native-ios.png` | iOS | `mapvina-native` | Native test app (`SimpleMap`), build bằng Bazel, chạy trên iPhone 16 Simulator (iOS 18.6), render đúng style MapVina Streets (check_map.py = RENDERED) |
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

### 2. `ios/mapvina-document-ios.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-ios-github/demo`
- **Build command**: `xcodebuild -workspace MapVinaSample.xcworkspace -scheme MapVinaSample -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build`
- **Mô tả**: Build thành công sau khi redirect SPM package `mapvina-navigation-ios` sang local git repo, downgrade `mapvina-gl-native-distribution` xuống public version 1.0.0, fix Swift errors (`override`/`public` trong `DashedLineView.swift`, `frame: .zero` trong `CarPlayMapViewController.swift`), và xóa `EXCLUDED_ARCHS` giới hạn simulator. App launch trên simulator, hiển thị MapVina style. Ảnh chụp thực tế được phân loại `RENDERED` bằng `verification/check_map.py`.

### 3. `flutter/mapvina-document-flutter-android.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-flutter-github`
- **Build command**: `flutter build apk --debug`
- **Mô tả**: Build thành công sau khi downgrade `mapvina_gl` từ `2.0.3` (không tồn tại) xuống `1.0.0`, rename Dart class `MapvinaMapController` → `MapVinaMapController`, `MapvinaMap` → `MapVinaMap`, migrate Android Gradle sang declarative plugins block, bump AGP/Gradle/Kotlin, và override `url_launcher_android` lên version mới nhất. APK chạy trên Android Emulator, hiển thị bản đồ MapVina. Ảnh chụp thực tế được phân loại `RENDERED` bằng `verification/check_map.py`.

### 3b. `flutter/mapvina-document-flutter-ios.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-document-flutter-github`
- **Build command**: `flutter run -d <simulator>` (kèm `pod install`)
- **Mô tả**: Chạy thành công trên iOS Simulator sau khi xóa `EXCLUDED_ARCHS` trong `ios/Podfile` (giới hạn simulator arch). Native framework đến qua public Swift Package Manager `github.com/mapvina/mapvina-gl-native-distribution` `1.0.0`, không cần private CocoaPods specs repo. App hiển thị bản đồ MapVina. Ảnh chụp thực tế được phân loại `RENDERED` bằng `verification/check_map.py`.

### 4. `native/mapvina-native-android.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-native/platform/android`
- **Activity**: `SimpleMapActivity` (io.github.mapvina.android.testapp)
- **Mô tả**: Native Android test app chạy trên Android Emulator (emulator-5554, API 36). Screenshot là **màn hình bản đồ** (`SimpleMapActivity`) hiển thị đúng style MapVina Streets từ `https://maps.mapvina.com/styles/v2/streets.json?key=public_key` (tile server `WellKnownTileServer.MapVina`, API key `public_key`). Ảnh chụp thực tế được phân loại `RENDERED` bằng `verification/check_map.py` (blue 0.6 = biển, dom=(136,208,248) styling nước MapVina), không có branding TrackAsia.
- **Đính chính**: Ghi chú cũ cho rằng map view không render được do "giới hạn OpenGL ES của emulator" là **SAI**. Cùng emulator này render đúng cho Android demo app; nguyên nhân trước đó chỉ là ảnh chụp nhầm màn (FeatureOverview/màn tối) chứ không phải lỗi renderer. Khi mở đúng `SimpleMapActivity`, bản đồ MapVina hiển thị bình thường (log: `Style 'MapVina Streets Style' has 138 layers`, không SIGABRT, không lỗi GL). Không cần thay đổi mã nguồn `mapvina-native`.

### 5. `native/mapvina-native-ios.png`
- **Repo**: `/Volumes/DATA/MapVina/mapvina-migration-workspace/upstream-maplibre/mapvina-native/platform/ios`
- **Build command**: `bazelisk build //platform/ios/app-swift:MapVinaApp --ios_multi_cpus=sim_arm64`
- **Mô tả**: Native iOS test app build thành công bằng Bazel và chạy trên iPhone 16 Simulator (iOS 18.6). Screenshot là **màn hình bản đồ** (ví dụ `SimpleMap`, `MLNMapView`) hiển thị đúng style MapVina Streets từ `https://maps.mapvina.com/styles/v2/streets.json?key=public_key`. Ảnh chụp thực tế được phân loại `RENDERED` bằng `verification/check_map.py` (blue 0.20 = nước, dark 0.29 = đường), không có branding TrackAsia.
- **Fix đã áp dụng**: File `platform/ios/app-swift/Sources/MapVinaNavigationView.swift` bị commit ở trạng thái hỏng (lỗi biên dịch Swift) khiến app không build được — đã dựng lại từ bản upstream sạch, chỉ áp rename MapVina. Sau fix, Bazel build thành công và bản đồ MapVina render bình thường.

## Báo cáo trung thực — trạng thái verification matrix

**Cập nhật:** Toàn bộ 4 mục trong verification matrix hiện đã **build, chạy và render đúng style MapVina**. Không còn mục nào bị chặn thật sự (`cannotBuildOrRun`). Các ghi chú "không thể build" trước đây (Android Demo cần private Maven repo, Flutter iOS cần private CocoaPods specs repo) đã được kiểm chứng lại và là **SAI/lỗi thời** — xem đính chính bên dưới.

| # | App | Target | Trạng thái |
|---|-----|--------|-----------|
| iOS | `mapvina-document-ios-github/demo` | iOS Simulator | ✅ Build + chạy + render MapVina |
| Flutter/Android | `mapvina-document-flutter-github` | Android Emulator | ✅ Build + chạy + render MapVina |
| Flutter/iOS | `mapvina-document-flutter-github` | iOS Simulator | ✅ Build + chạy + render MapVina |
| Android | `mapvina-document-android-github/demo` | Android Emulator | ✅ Build + chạy + render MapVina |

### Android Demo (`mapvina-document-android-github/demo`) — ĐÃ KHẮC PHỤC
- **Đính chính**: Ghi chú cũ nói cần private Maven repo cho `io.github.map-vina:*:2.0.2` là **không đúng**. Public coordinates thực tế là `io.github.mapvina:android-sdk:1.0.1` và **resolve thành công** trên Maven Central.
- **Fix đã áp dụng**: Sửa crash do thiếu API key (missing-API-key crash) và sửa chuỗi branding "Map-Vina" còn sót lại.
- **Trạng thái**: `./gradlew assembleDebug` build thành công; `adb install` + launch trên Android Emulator; app render đúng style MapVina, không có branding TrackAsia.

### Flutter iOS (`mapvina-document-flutter-github`, iOS Simulator) — ĐÃ KHẮC PHỤC
- **Đính chính**: Ghi chú cũ nói iOS build cần private CocoaPods specs repo `https://github.com/map-vina/mapvina-flutter-podspecs.git` là **SAI/lỗi thời**. Native framework thực tế đến qua **public Swift Package Manager**: `github.com/mapvina/mapvina-gl-native-distribution` phiên bản `1.0.0`. Không cần private podspecs repo hay credentials.
- **Fix đã áp dụng**: Chỉ cần xóa `EXCLUDED_ARCHS` trong `ios/Podfile` (giới hạn simulator arch).
- **Trạng thái**: `flutter run -d <simulator>` (kèm `pod install`) chạy thành công trên iOS Simulator; app render đúng style MapVina, không có branding TrackAsia.

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

### Native Android test app — map view — ĐÃ KHẮC PHỤC
- **Đính chính**: Ghi chú cũ cho rằng map view của Native Android test app không render được trên emulator (giới hạn OpenGL ES/SwiftShader) là **SAI/lỗi thời**. Nguyên nhân thật chỉ là ảnh chụp trước đó chụp nhầm màn (overview/màn tối), không phải lỗi renderer — cùng emulator render đúng cho Android demo app.
- **Trạng thái**: Mở đúng `SimpleMapActivity` trên emulator-5554, app render đúng style MapVina Streets (`https://maps.mapvina.com/styles/v2/streets.json?key=public_key`). Ảnh `native/mapvina-native-android.png` được phân loại `RENDERED` (blue 0.6). Không cần thay đổi mã nguồn `mapvina-native`.

## Tổng kết

- **Verification matrix (4/4)**: iOS demo (iOS Sim), Flutter Android, Flutter iOS, và Android demo — **tất cả đều build, chạy và render đúng style MapVina**. Không còn mục nào bị chặn thật sự.
- **Đã chạy thực tế (ngoài matrix)**: Web, React Native iOS + Android (sample MapPage + ShowMap + examples list + RN app + Expo app), Native Android test app (map view — `SimpleMapActivity`), Native iOS test app.
- **Không còn mục nào bị chặn thật sự**: Native Android test app map view đã render đúng style MapVina (RENDERED) sau khi chụp đúng màn `SimpleMapActivity`. Toàn bộ ảnh iOS/Android trong showcase hiển thị đúng bản đồ MapVina.
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

## Re-verification verification matrix (chụp lại từ app chạy thực tế)

4 ảnh của verification matrix đã được **chụp lại từ app chạy thực tế** trên iOS Simulator và Android Emulator, rồi kiểm tra tự động bằng `verification/check_map.py` (phân loại RENDERED/BLANK/ERROR dựa trên độ đa dạng màu vùng bản đồ). Tất cả đều `RENDERED` (bề mặt bản đồ MapVina có nước/đường, không trắng/tối, không crash), không có branding TrackAsia.

| File | Nền tảng | Repo nguồn | Verdict | Đặc trưng màu (blue=nước) |
|------|----------|------------|---------|----------------------------|
| `ios/mapvina-document-ios.png` | iOS (Sim) | `mapvina-document-ios-github/demo` | RENDERED | size 1206×2622, blue 0.02, dark 0.03 |
| `flutter/mapvina-document-flutter-android.png` | Android (Emu) | `mapvina-document-flutter-github` | RENDERED | size 1080×2400, blue 0.07, white 0.20 |
| `flutter/mapvina-document-flutter-ios.png` | iOS (Sim) | `mapvina-document-flutter-github` | RENDERED | size 1179×2556, blue 0.07, white 0.20 |
| `android/mapvina-document-android.png` | Android (Emu) | `mapvina-document-android-github/demo` | RENDERED | size 1080×2400, blue 0.12 |

Ghi chú: cả 4 ảnh là ảnh chụp thực tế (fresh capture) từ màn hình bản đồ của app sau khi áp dụng fix; không có ảnh nào bị thay bằng ảnh gây hiểu nhầm. Các mục preserved ngoài matrix (`web/`, `react-native/`, `native/`) không bị thay đổi.

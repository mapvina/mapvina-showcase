// MapVina Showcase — Gallery Logic

const screenshots = [
  // Android
  {
    file: 'screenshots/android/android-map-basic.png',
    platform: 'android',
    title: 'MapVina Android — Basic Map',
    desc: 'Hiển thị bản đồ cơ bản với style Streets trên Android emulator (Pixel API 33).',
    repo: 'https://github.com/mapvina/mapvina-document-android-github'
  },
  {
    file: 'screenshots/android/android-map-full.png',
    platform: 'android',
    title: 'MapVina Android — Full Map View',
    desc: 'Toàn cảnh bản đồ MapVina trên Android với nhiều layer và dữ liệu địa phương.',
    repo: 'https://github.com/mapvina/mapvina-document-android-github'
  },
  {
    file: 'screenshots/android/android-map-branded.png',
    platform: 'android',
    title: 'MapVina Android — Branded Map',
    desc: 'Bản đồ tùy chỉnh với logo MapVina và branding trên Android.',
    repo: 'https://github.com/mapvina/mapvina-document-android-github'
  },
  // iOS
  {
    file: 'screenshots/ios/ios-map-basic.png',
    platform: 'ios',
    title: 'MapVina iOS — Basic Map',
    desc: 'Render bản đồ vector mượt mà trên iOS Simulator (iPhone 15 Pro, iOS 17).',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  {
    file: 'screenshots/ios/ios-map-location.png',
    platform: 'ios',
    title: 'MapVina iOS — Location & GPS',
    desc: 'Theo dõi vị trí real-time với GPS marker trên iOS Simulator.',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  {
    file: 'screenshots/ios/ios-map-annotations.png',
    platform: 'ios',
    title: 'MapVina iOS — Custom Annotations',
    desc: 'Hiển thị custom annotations và markers trên bản đồ iOS.',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  {
    file: 'screenshots/ios/ios-map-navigation.png',
    platform: 'ios',
    title: 'MapVina iOS — Turn-by-Turn Navigation',
    desc: 'Điều hướng turn-by-turn với route polyline và instruction panel.',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  {
    file: 'screenshots/ios/ios-map-full.png',
    platform: 'ios',
    title: 'MapVina iOS — Full Map View',
    desc: 'Toàn cảnh bản đồ MapVina render hoàn chỉnh với nhiều layer.',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  {
    file: 'screenshots/ios/ios-map-fixed.png',
    platform: 'ios',
    title: 'MapVina iOS — Fixed Map Region',
    desc: 'Bản đồ với region đã cố định, hiển thị địa danh rõ ràng.',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  // React Native (Android emulator — real screenshots)
  {
    file: 'screenshots/react-native/rn-android-map-basic.png',
    platform: 'react-native',
    title: 'MapVina React Native — Basic Map',
    desc: 'Bản đồ tương tác trong React Native chạy trên Android emulator (Pixel 9 Pro XL, API 35).',
    repo: 'https://github.com/mapvina/mapvina-document-reactnative-github'
  },
  {
    file: 'screenshots/react-native/rn-android-map-texture.png',
    platform: 'react-native',
    title: 'MapVina React Native — Texture View',
    desc: 'MapView với androidView="texture" mode hiển thị bản đồ mượt mà trên Android.',
    repo: 'https://github.com/mapvina/mapvina-document-reactnative-github'
  },
  {
    file: 'screenshots/react-native/rn-android-map-camera.png',
    platform: 'react-native',
    title: 'MapVina React Native — Camera FlyTo',
    desc: 'Camera controls với flyTo animation, zoom và bearing trên bản đồ React Native.',
    repo: 'https://github.com/mapvina/mapvina-document-reactnative-github'
  },
  {
    file: 'screenshots/react-native/rn-android-map-location.png',
    platform: 'react-native',
    title: 'MapVina React Native — User Location',
    desc: 'Theo dõi vị trí người dùng real-time với location indicator trên Android.',
    repo: 'https://github.com/mapvina/mapvina-document-reactnative-github'
  },
  {
    file: 'screenshots/react-native/rn-android-map-hillshade.png',
    platform: 'react-native',
    title: 'MapVina React Native — Hillshade Layer',
    desc: 'Hillshade terrain layer (Mapterhorn) hiển thị địa hình 3D trên bản đồ React Native.',
    repo: 'https://github.com/mapvina/mapvina-document-reactnative-github'
  },
  // Flutter — placeholder
  {
    file: 'screenshots/flutter/flutter-map-coming-soon.png',
    platform: 'flutter',
    title: 'MapVina Flutter — Coming Soon',
    desc: 'Ảnh chụp màn hình Flutter đang được chuẩn bị. Hãy build app theo hướng dẫn trong guides/flutter.md.',
    repo: 'https://github.com/mapvina/mapvina-document-flutter-github'
  }
];

const platformLabels = {
  android: { label: 'Android', class: 'badge-android' },
  ios: { label: 'iOS', class: 'badge-ios' },
  flutter: { label: 'Flutter', class: 'badge-flutter' },
  'react-native': { label: 'React Native', class: 'badge-react-native' }
};

function renderGallery(filter = 'all') {
  const gallery = document.getElementById('gallery');
  const filtered = filter === 'all'
    ? screenshots
    : screenshots.filter(s => s.platform === filter);

  if (filtered.length === 0) {
    gallery.innerHTML = `<div class="empty-state">No screenshots found for this filter.</div>`;
    return;
  }

  gallery.innerHTML = filtered.map(s => {
    const badge = platformLabels[s.platform];
    const isPlaceholder = s.file.includes('coming-soon');
    const statusClass = isPlaceholder ? 'status-pending' : 'status';
    const statusText = isPlaceholder ? 'Đang chuẩn bị' : 'Chạy thành công';
    return `
      <div class="card" data-platform="${s.platform}">
        <img src="${s.file}" alt="${s.title}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
        <div class="placeholder-fallback" style="display:${isPlaceholder ? 'flex' : 'none'};">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          <span>Screenshot coming soon</span>
        </div>
        <div class="card-body">
          <div class="platform-badge ${badge.class}">${badge.label}</div>
          <div class="card-title">${s.title}</div>
          <div class="card-desc">${s.desc}</div>
          <div class="${statusClass}">${statusText}</div>
          <a class="card-link" href="${s.repo}" target="_blank" rel="noopener">View demo repo →</a>
        </div>
      </div>
    `;
  }).join('');
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');
  initFilters();
});

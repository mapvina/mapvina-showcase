// MapVina Showcase — Gallery Logic

const screenshots = [
  // Native SDK
  {
    file: 'screenshots/native/native-android-map.png',
    platform: 'android',
    title: 'MapVina Native SDK — Android',
    desc: 'Bản đồ vector từ MapVina Native SDK chạy trên Android emulator (Pixel 9 Pro XL, API 35).',
    repo: 'https://github.com/mapvina/mapvina-native'
  },
  {
    file: 'screenshots/native/native-ios-map.png',
    platform: 'ios',
    title: 'MapVina Native SDK — iOS',
    desc: 'Bản đồ vector từ MapVina Native SDK chạy trên iOS Simulator (iPhone 17).',
    repo: 'https://github.com/mapvina/mapvina-native'
  },
  // Android Document
  {
    file: 'screenshots/android/android-doc-map.png',
    platform: 'android',
    title: 'MapVina Android — Document Demo',
    desc: 'Demo app Android với bản đồ MapVina style trên emulator.',
    repo: 'https://github.com/mapvina/mapvina-document-android-github'
  },
  {
    file: 'screenshots/android/android-web-map.png',
    platform: 'android',
    title: 'MapVina Android — Web Map',
    desc: 'Bản đồ MapVina hiển thị qua WebView trên Android emulator.',
    repo: 'https://github.com/mapvina/mapvina-document-android-github'
  },
  // iOS Document
  {
    file: 'screenshots/ios/ios-doc-map.png',
    platform: 'ios',
    title: 'MapVina iOS — Document Demo',
    desc: 'Demo app iOS với bản đồ MapVina style trên Simulator (iPhone 17).',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  {
    file: 'screenshots/ios/ios-map-native.png',
    platform: 'ios',
    title: 'MapVina iOS — Native MapKit',
    desc: 'Bản đồ hiển thị qua MapKit trên iOS Simulator (iPhone 17).',
    repo: 'https://github.com/mapvina/mapvina-document-ios-github'
  },
  // Flutter
  {
    file: 'screenshots/flutter/flutter-android-map.png',
    platform: 'android',
    title: 'MapVina Flutter — Android',
    desc: 'Bản đồ từ Flutter MapVina GL plugin chạy trên Android emulator.',
    repo: 'https://github.com/mapvina/mapvina-document-flutter-github'
  },
  {
    file: 'screenshots/flutter/flutter-ios-map.png',
    platform: 'ios',
    title: 'MapVina Flutter — iOS',
    desc: 'Bản đồ từ Flutter MapVina GL plugin chạy trên iOS Simulator.',
    repo: 'https://github.com/mapvina/mapvina-document-flutter-github'
  },
  // React Native
  {
    file: 'screenshots/react-native/rn-android-map-basic.png',
    platform: 'react-native',
    title: 'MapVina React Native — Android',
    desc: 'Bản đồ tương tác trong React Native chạy trên Android emulator (Pixel 9 Pro XL, API 35).',
    repo: 'https://github.com/mapvina/mapvina-react-native'
  },
  {
    file: 'screenshots/react-native/rn-ios-map-basic.png',
    platform: 'react-native',
    title: 'MapVina React Native — iOS',
    desc: 'Bản đồ tương tác trong React Native chạy trên iOS Simulator (iPhone 17).',
    repo: 'https://github.com/mapvina/mapvina-react-native'
  },
  // React Native Document
  {
    file: 'screenshots/react-native/rn-ios-doc-map.png',
    platform: 'react-native',
    title: 'MapVina React Native Demo — iOS',
    desc: 'Demo app React Native với bản đồ MapVina trên iOS Simulator.',
    repo: 'https://github.com/mapvina/mapvina-document-reactnative-github'
  }
];

const platformLabels = {
  android: { label: 'Android', class: 'badge-android' },
  ios: { label: 'iOS', class: 'badge-ios' },
  flutter: { label: 'Flutter', class: 'badge-flutter' },
  'react-native': { label: 'React Native', class: 'badge-react-native' },
  native: { label: 'Native SDK', class: 'badge-native' }
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

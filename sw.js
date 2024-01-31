self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(['./index.html', './assets/css/style.css','assets/js/script.js','./assets/images/android.jpeg','./assets/iamges/bgmipos.jpg','./assets.images/chess.jpeg','./assets.images/codm.jpg','./assets.images/hero-banner.png','./assets.images/ludo.jpg','./assets/images/pes.jpeg','./assets/images/scribble.jpeg','./assets/images/unom.jpg','./assets/images/bgmi.jpeg','./assets/images/bgmiposter.jpg','./assets/images/chesspos.jpg','./assets/images/ffpos.jpg','./assets/images/hero-banner-bg.png','./assets/images/meme.jpeg','./assets/images/photo.jpeg','./assets/images/Thumbs.db','./assets/images/winfest.jpg','./assets/images/BGMI2.jpeg','./assets/images/body-bg.jpg','./assets/images/coc.jpeg','./assets/images/freefire.png','./assets/images/logolevel.png','./assets/images/ongoing-poster.jpg','./assets/images/reel.jpeg','./assets/images/UNO.jpeg']);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

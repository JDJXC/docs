/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7cab3a880a69076d24398d92729ee730"
  },
  {
    "url": "about.html",
    "revision": "b14400339a16bb02f18eb10cab1bdfd7"
  },
  {
    "url": "about1.html",
    "revision": "1082c9111c41e58ba750ca65c0efa0c3"
  },
  {
    "url": "about2.html",
    "revision": "5d112197fc0d9fbadb244572faed42e9"
  },
  {
    "url": "assets/css/0.styles.3d7fd5d9.css",
    "revision": "59b681c58c8806288ceecbc0461a06b5"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/logo1.gif",
    "revision": "f01f27e800228694e0661bc4bbb7ac5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0db9610b.js",
    "revision": "8c3e7b0ccfb5f83fe208e03902704cf2"
  },
  {
    "url": "assets/js/11.1e69ff3f.js",
    "revision": "29cdaeb1cfe1e16ec2cc4e21e7a2cf4c"
  },
  {
    "url": "assets/js/12.da28ac1c.js",
    "revision": "deccd9456b7058a38a9a65e884426008"
  },
  {
    "url": "assets/js/13.df51f2bd.js",
    "revision": "0f7b53413ac16fd7f354dc09fe051347"
  },
  {
    "url": "assets/js/14.2222bba6.js",
    "revision": "275c440e6d6223a39666980e5eb7266f"
  },
  {
    "url": "assets/js/15.117e0f77.js",
    "revision": "2247493bfa07e66dfbd2c790ef9a30f2"
  },
  {
    "url": "assets/js/2.1fb48a90.js",
    "revision": "7d6623a10c3486b9e741401d261476a5"
  },
  {
    "url": "assets/js/3.e3db47dd.js",
    "revision": "1a0dee3838fd2c331553b0c56829cccd"
  },
  {
    "url": "assets/js/4.cf9e8cdd.js",
    "revision": "487e59d9ef855b6a453e6f329d057f9e"
  },
  {
    "url": "assets/js/5.6e5b7e88.js",
    "revision": "289ce9d073e002a13594c6589ea9dac7"
  },
  {
    "url": "assets/js/6.1e2f3550.js",
    "revision": "1042560f5e277a4222d4cd9f2bfb07a5"
  },
  {
    "url": "assets/js/7.973cdc14.js",
    "revision": "d6515da3c9038bc183461619d1b50ea8"
  },
  {
    "url": "assets/js/8.4426fabf.js",
    "revision": "e0b0c428fd1a5bd92d21e44f8d439137"
  },
  {
    "url": "assets/js/9.7333ae1d.js",
    "revision": "6d705513bb9459e3121e6d28a5091c97"
  },
  {
    "url": "assets/js/app.b6841ecd.js",
    "revision": "292486590b55b1e789f4e2bf492d8917"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "3c9dcfa949b2afec537ceb3ec627c467"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "f330debc3f31e53f5f49df82d71f0896"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "3ba65298b57a76d0da34ee35b31900d7"
  },
  {
    "url": "css/index.html",
    "revision": "17e6ad88a2eb7b9ab4cf05557218d684"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "home.png",
    "revision": "eb23a25c8ae91755a71e3a91626d5197"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "31bd10e0b185c49910002a4c1533e12c"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "7e9fb14460c7597afee1da8d105a4413"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "e9502caa359847357323492ae971290b"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d0576df56f6333b850b338d2fc5546de"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "fddc28904194404b0d46ed3e82f02ee6"
  },
  {
    "url": "index.html",
    "revision": "f2aa8a30000771ee407bd5132d4921d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

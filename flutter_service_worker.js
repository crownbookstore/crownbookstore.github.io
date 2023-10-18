'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "faeb2c0362b53229afce12c53babf8e6",
"index.html": "c6e0351e82ffa044c995dd9cd0203157",
"/": "c6e0351e82ffa044c995dd9cd0203157",
"main.dart.js": "aa647ed01d503ba2a4a79e0f01181708",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "24af585aa0f65c137875fbcd751acec0",
"icons/Icon-192.png": "989c011c355a370771307ffd4a632da1",
"icons/Icon-maskable-192.png": "989c011c355a370771307ffd4a632da1",
"icons/Icon-maskable-512.png": "c5b77a25112c6719462b2b1d2cd26369",
"icons/Icon-512.png": "c5b77a25112c6719462b2b1d2cd26369",
"manifest.json": "5a0a3a43ccf1eca0969164e434db4dcb",
".git/config": "a3d812dc4a2c186ec06f18663726b436",
".git/objects/92/b452a8543678e1a3efcecb0503ca423f57bc60": "dceecb3916e0739cca80d0dadb0bf159",
".git/objects/66/c62d7243dbd43e5855e94f9bd392815aa6783a": "96dd5b8763fe6a38bed97feac9951731",
".git/objects/50/c798a7c300f98613ff0790432d2fe36ddae9e1": "8705feddf53601c08d1c67b0719c4972",
".git/objects/50/2a0d494f6755b53010b0115e9da046cabf963a": "4e349692cb08c0bc1dd64c8e73c05aa9",
".git/objects/3b/cbdc153890d166cfbdc74bfde20ee542e1243b": "d80e5b189845ccc1c25f51bfb15c0c41",
".git/objects/6f/7c1a98a024908aca64c87665fc6e131ca80f92": "ff02d5d4815f808fa98d3b74fea3f7ff",
".git/objects/03/e22318457441670be4cb102ac3bf6285efeadd": "aeaeaa76a946cd16f6736eef0b8d43fb",
".git/objects/6a/602a48f86b1176f9d01394fd03fe42f9d6f800": "4e42d69c0642c405366c138581aabcf1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/34/d627696b373956abb99f9930aef63da2a800f5": "39340cf29e1c1555e4c922716c528ed0",
".git/objects/33/8a1b3c8ce49d7d3b354d4b1670ce66bfd07765": "2318c82113dd30aa033c1334a4a6178c",
".git/objects/9c/963a3098b60ab94d24c5cf4ee5df19b7a40dab": "cf7e981c2a1b98dcbd047bc648234b54",
".git/objects/a4/026bea1743aa422907afd5f76ec29734e1c4e4": "6676b3474992b5f45cf3ec62ee1962e7",
".git/objects/b2/d8b6a6c65c2d017a7247570c66a39c686b7204": "c3be30af6312a3b2e80431e5b5c5f64a",
".git/objects/b2/5fee1e49c290bd9931925b4a8aaf3a100d6b4d": "9d5f6a7fda35ab80e8bf708af2a6195f",
".git/objects/bb/88569537b89c9e21a9cf0db75bf95e1abaa9bc": "0fae6bc6c35061f955089dd887dbde37",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/b3/45121a1776985293ecd3828828d38562273e0c": "95a4bd7f8b1a999011ff403199eb6228",
".git/objects/b3/755ac08f4a7429634af5ae572be446bc33db5f": "22b279a1c839707e43ad8020c32992ad",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/da/3cb5ad09ab087cefbcd857a33ded23123fb78b": "710e26cc6e85e2869d2019c8ebe3a1b8",
".git/objects/b4/141293a791162bf12a2c589f43a77c50f91f75": "de9cecbdf94f0663aaf2fdbbeb32ed26",
".git/objects/a2/288e71f0872e23e4647510b237fa58cfd0374a": "f855ca6314428cec58b907de6a8a8f83",
".git/objects/d1/969b8a0712f96a51ef76352f7a29771d90efb6": "f9c60842abc44fd13039d84daffdea31",
".git/objects/d8/7a1a91b3c8598105c1983fdfeedc99f9ecfe26": "c8d73d248c7023ef46b930181e531d3f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/b6511c66f2d6a72627776424d18a6b556bc715": "19604504d20adf0bdcda33b66c1bd769",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/f2/d5b868020288f9d49937ff50de77e442642bee": "ed77f6aa360a06190347ea670110f522",
".git/objects/c8/e9317937675db4764d89693cdf3eacc119c3cb": "586d0afd29e7a1ee58a8462a7d20ab67",
".git/objects/c6/11ee4ebc94a9537fce8dae8ba26bddcd43b8d3": "314fa88a8b0f0de794fb51534108b1f7",
".git/objects/4e/2b7ce31c8b8635cf271e6dad7e1a143e6849d5": "1c983ec1459c8587cf6c89a0ea6f1257",
".git/objects/27/8c25f5ed093338ab3b9eeb3d0a3c62c25b1ce2": "cbd4bbf2b25fc582691840a7989b30a8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/bc6c3ba5656dcb6e4fe54e302fac9bdb29be4a": "38190c21fb31655805b42ed028ed9cf2",
".git/objects/42/4c2572e31fe86246ee53b0c1811b6ce0ee8a7e": "9806e948c34357b6409761af31bfd849",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/122190851a86f7dbfa3f00bb3c949d68c848ee": "a102f7fe99095e9af7cd83387c5e6430",
".git/objects/28/612d825f1c5d7495af87dc3ab28f139f344fb4": "b774c0c475d3266711d3779a00fb94d4",
".git/objects/7b/137024a6ba780f4fd62c19de68d637bc09015b": "b35a12e2ee721f24187764fda51dab5f",
".git/objects/7e/2b8a4ed596adebf53887a934688306a2df3b4b": "3abfcf2f49c027cd07f303d9685fce8a",
".git/objects/81/f931a6faeb76f340a2985c41dba0b0971c4b36": "b2ced7c930b0ac149d5a3c47d84a49db",
".git/objects/2a/ee5bf52e4a6d8f961004701632e0729971a135": "ef329b62f65c8cf8af200bd4f08c3263",
".git/objects/09/452cdf214e52e86537929f8461320abd090b7e": "6a552b85462d397c1c20cbe8b1de63a6",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/62/cfdfae2937ecd09e1f643418a1ea7e1cc1c43e": "794590be88d0e402a43e5934a952e4b1",
".git/objects/98/f58b7ea46cff7e423daf3b7402742e6dccb532": "b3157436554131afb325e77e84b1f070",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/01/fdaf4940a0ede714558386c43f6557c5df8523": "c76635241a21d5f7aa920949ef97195f",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/06/8dd932f7a86e1d53eb5a38056785e466dcf90f": "88ac0958865769486d8718fda3caf18b",
".git/objects/06/f407ce5083f0e0e3283c75b845c1dd65a6fde4": "e1b46133285415e0a87c03c606bbf74a",
".git/objects/99/e65ecab2b1ef53215be0bab52ef235e2eab843": "27f9baf7ae61089a9179db90cc195da3",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0a/d66898bd5123761faebdf733fd891e153ce73a": "d571e2fcfc03f4ba5d0a3f46a31aa1e5",
".git/objects/bf/74841e4d3d29fc5a28081da8061351a4ed656f": "6c65d6db940e0364c4103dc3b0622569",
".git/objects/d3/0cb3069d9fcfd9a66edf5fd1017e9547af6459": "19c9f41310970e2209f043c805879216",
".git/objects/d3/c2f8d6ae2b55d9823698dac9f0acbb3e112c35": "4a1ec8581d675fd2790b20c87b3c68b5",
".git/objects/a0/4608f23f35e3301356922533d963f3ebebe189": "e34acb043f43cedeba82ce27cd3367b8",
".git/objects/b1/d2ca84175051849e49f27e4ba91f5dd714ac93": "ab84d4825e70f1144188fdfb003b0dab",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/01de4abb33bfb7f874c31bcab7ca978e41cfb2": "ce1b3c34986b55fe2a186471194b00e0",
".git/objects/ef/2b445970c90038ef323fe412dcc0e284d1f7db": "838732d476fd0b65199f9e2fde79fe82",
".git/objects/f7/a05922f00bce2b3d6a15d1183fba6033757184": "70e69dbe7951ff7cc835ea87d5fd67dd",
".git/objects/c2/ad9094ae35453edbcc2619ccb47c071a413f5e": "9a69c5d24b705f54e2e2e83dd13384b0",
".git/objects/cb/96f198034092200511411b23b72d7bab609a9f": "bd6155e8bcb4c992815950c3b0da1c81",
".git/objects/f8/00cf34c393fbb026aeb73cab383d51484c9f51": "07cc2bb3acecea8fef5fe4a704a520e6",
".git/objects/e0/7560b588e59043c839c52fe3be89658fc89336": "6b13adfb287844b385006a57319876cf",
".git/objects/46/d627aee5f0c1d7acd3caae3894ad172925a258": "fff4cbc6949d72d8de54939d5826b5ff",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/f02b49ab8e615f42af96f0f32e78ffd940dc92": "791a4147991a4d61f549a9274cc3c87e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/087fe08ede404a56ada18aad33a5ddb7466fb5": "826cad6e98b378a2b0b1744db4221226",
".git/objects/77/60eb3407c9071bec92e167e81e2f5ff0dcc1b2": "a4537767d3e04dcb610af240eab33fd6",
".git/objects/48/a73ee0ce430bfbd321e10c2850a114835bf3d5": "4a4e695588fe3e83548d669724740e61",
".git/objects/70/30437c884674177fed0f2c58977a169584e15b": "862c55224702ca269e3bd149f4ef1dfe",
".git/objects/70/6e0ace8325e7beb44ac6a8cb3eb57b6b0fd756": "1f611db42f4e3321d5b125a156ea86c5",
".git/objects/70/f802d2de4ba0190a72324ee6aab05e1773e04c": "1a5e6c55ac5aee5ffbe815807be0cb6e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/12/6711ab70fd196229ed52b9c0a8df2de38a5d3c": "a132eec86cb42eacb28e1fffae99f3da",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1c/4fd3004cd3b6df26deba177861029b0d875af2": "d967b72e6b70bcc0ea67323e5ff4f335",
".git/objects/47/c39929897c653a568c8ab2a3305ec4eefcb13d": "1da6f0c6dc774b1c9520b409f37f0aa5",
".git/objects/47/805e799e31a84d013954485ef09a8f2d235018": "4dd6e1e8bfe22933afa149e8a31840a9",
".git/objects/78/29d66b25983acd14bf5345524781773c5a5dc3": "db9c5d4e97015969e0054f28b1f79fb3",
".git/objects/13/00d1819880bad793d98d21d50577bb39c012f6": "644a647b994e7d0c13b565d332350433",
".git/objects/13/a972129043d81b04086bfb24a2f0049fa1ebb3": "4426fe577f58f717ec67297c860fe0e0",
".git/objects/7f/7b268eb2ce5eaa63d76e4d757611a4377425db": "afcec5a74612fc01ba1254cecf34d781",
".git/objects/14/50aeba9c9375ffa26377e331b1af327d97db50": "36ac6e4ab8ed882268a60f8ac10f599a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d4a2201939476fa51b741ac63c6377a",
".git/logs/refs/heads/main": "8d4a2201939476fa51b741ac63c6377a",
".git/logs/refs/remotes/origin/main": "2a84dd2a8d9c9baa769ca167de4a1bae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a24b3098475d62d948807280cf2a9d2c",
".git/refs/remotes/origin/main": "a24b3098475d62d948807280cf2a9d2c",
".git/index": "275024b61a69e0d34e675c7971b5123c",
".git/COMMIT_EDITMSG": "9a71bdde02c7d90fc45ed816ee1fcf54",
"assets/AssetManifest.json": "89f2b2927f652f7174861feb550ed2af",
"assets/NOTICES": "4d7e965992b6e1701b1006015a9ae5a2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/bookstore.png": "104fbb1aa54f20717110c62c9e10e8e0",
"assets/assets/images/logo.png": "b46ab52dfc8499592ecf6263c0f7bf43",
"assets/assets/images/profile.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/bookstore_2.png": "99c34ca449fe01a5d098d311333ef6ff",
"assets/assets/icons/off-button.png": "a44ecb6e52f39364e493a5b64f9b0b3c",
"assets/assets/icons/map.svg": "4152a0125e12ee011ec930c451c46601",
"assets/assets/icons/link.svg": "3893f6d005def5e2441c037f6bc0005b",
"assets/assets/icons/fact.png": "672e73790584b266ff4337c5e80b19e2",
"assets/assets/icons/writer.svg": "1356a9025405255b67998442851e2f5b",
"assets/assets/icons/note.svg": "8db4d17796d56ac74752fb39db48ff50",
"assets/assets/icons/book.svg": "68436d52d324f76c3b0785018d7d07b9",
"assets/assets/icons/access-denied.png": "87837bfa79d5018b766f3c3fbddc69fd",
"assets/assets/icons/price-tag.svg": "8c1fc97905b849df459f734676cf0628",
"assets/assets/icons/category.svg": "77ab5936c596d59955dee6918e73a5a2",
"assets/assets/icons/image.svg": "190a4997aed13c812d80ab43f5456e74",
"assets/assets/icons/rocket.png": "1b6d9ac769c3864e384ff58cf4a86f65",
"assets/assets/icons/delete.svg": "c9bd3d073c5952964558cf548123da13",
"assets/assets/icons/sort.svg": "b88cd385feb76a18e98835485599b6a0",
"assets/assets/icons/power-off.svg": "e238d765408a2f5cda0b2e516abce651",
"assets/assets/icons/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/icons/justify.svg": "8fbfabe40488cc97828a565d682ed15f",
"assets/assets/icons/id.svg": "82f30d010e74fe8a531f18b74e9fedc4",
"assets/assets/data/BOOK.json": "05dc8e55053d1bc447bb04b32085880d",
"assets/assets/data/AUTHOR.json": "1bcb83ad8b3f8efa399a97f0ac58e3d5",
"assets/assets/data/CATEGORY.json": "36f039913f3bb0b25470a080fc0ea48f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PORT = process.env.PORT || 3500;
const API_KEY = "5949675|V9MHzw3p1eegHlQ5DdLAF5kOF4aQGtHeHcGAxHwk0f93ec25";
const FALLBACK_PRODUCTS = [
  {
    "id": 651348,
    "name": "Krush Arc Cheat",
    "description": "",
    "currency": "USD",
    "path": "arc-raiders-elite",
    "aliases": [
      "arc-raiders",
      "arc",
      "arc-raiders-elite"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944493.webp",
      "https://api.sellauth.com/storage/images/815724.webp",
      "https://api.sellauth.com/storage/images/815739.webp"
    ],
    "variants": [
      {
        "id": 1026616,
        "name": "1 Day",
        "price": 7.95,
        "stock": -1
      },
      {
        "id": 1026632,
        "name": "7 Days",
        "price": 29.95,
        "stock": -1
      },
      {
        "id": 1026633,
        "name": "30 Days",
        "price": 54.95,
        "stock": -1
      }
    ]
  },
  {
    "id": 651363,
    "name": "Krush Apex Cheat",
    "description": "",
    "currency": "USD",
    "path": "apex-pro",
    "aliases": [
      "apex-legends",
      "apex",
      "apex-pro"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944495.webp",
      "https://api.sellauth.com/storage/images/815760.webp",
      "https://api.sellauth.com/storage/images/815757.webp"
    ],
    "variants": [
      {
        "id": 1026646,
        "name": "3 Day",
        "price": 14.95,
        "stock": -1
      },
      {
        "id": 1026647,
        "name": "7 Days",
        "price": 29.95,
        "stock": -1
      },
      {
        "id": 1026648,
        "name": "30 Days",
        "price": 54.95,
        "stock": -1
      },
      {
        "id": 1026674,
        "name": "Lifetime",
        "price": 199.95,
        "stock": -1
      }
    ]
  },
  {
    "id": 651369,
    "name": "Crusader R6 Cheat",
    "description": "",
    "currency": "USD",
    "path": "r6-private",
    "aliases": [
      "rainbow-six-siege",
      "r6",
      "r6-private"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944492.webp",
      "https://api.sellauth.com/storage/images/955790.webp"
    ],
    "variants": [
      {
        "id": 1026675,
        "name": "3 Day",
        "price": 9.99,
        "stock": -1
      },
      {
        "id": 1026676,
        "name": "7 Days",
        "price": 19.99,
        "stock": -1
      },
      {
        "id": 1026677,
        "name": "30 Days",
        "price": 39.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740821,
    "name": "Disconnect Fortnite Cheat",
    "description": "",
    "currency": "USD",
    "path": "fortnite-private",
    "aliases": [
      "fortnite-private",
      "fortnite"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944503.webp"
    ],
    "variants": [
      {
        "id": 1210784,
        "name": "1 Day",
        "price": 4.99,
        "stock": -1
      },
      {
        "id": 1210785,
        "name": "7 Days",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1210786,
        "name": "30 Days",
        "price": 54.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740827,
    "name": "Ancient Delta Cheat",
    "description": "",
    "currency": "USD",
    "path": "delta-force-private",
    "aliases": [
      "delta-force",
      "delta-force-private",
      "delta"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944525.webp"
    ],
    "variants": [
      {
        "id": 1210803,
        "name": "1 Day",
        "price": 4.99,
        "stock": -1
      },
      {
        "id": 1210804,
        "name": "7 Days",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1210805,
        "name": "30 Days",
        "price": 54.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740833,
    "name": "Krush Rust Cheat",
    "description": "",
    "currency": "USD",
    "path": "rust-private",
    "aliases": [
      "rust",
      "rust-private"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944529.webp"
    ],
    "variants": [
      {
        "id": 1210815,
        "name": "1 Day",
        "price": 4.99,
        "stock": -1
      },
      {
        "id": 1210816,
        "name": "7 Days",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1210817,
        "name": "30 Days",
        "price": 54.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740845,
    "name": "Verse HWID Spoofer",
    "description": "",
    "currency": "USD",
    "path": "hwid-spoofer",
    "aliases": [
      "hwid-spoofer",
      "spoofer",
      "woofer"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944536.webp"
    ],
    "variants": [
      {
        "id": 1210839,
        "name": "1 Time",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1210842,
        "name": "Lifetime",
        "price": 99.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 746570,
    "name": "Valorant Private",
    "description": "",
    "currency": "USD",
    "path": "valorant-private",
    "aliases": [
      "valorant-private",
      "valorant"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/952749.webp"
    ],
    "variants": [
      {
        "id": 1224111,
        "name": "1 Day",
        "price": 9.99,
        "stock": -1
      },
      {
        "id": 1224112,
        "name": "7 Days",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1224113,
        "name": "30 Days",
        "price": 54.99,
        "stock": -1
      },
      {
        "id": 1224114,
        "name": "Lifetime",
        "price": 99.99,
        "stock": -1
      }
    ]
  }
];

const SHOP_ID = "223549";

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

// Map URL path slugs to SellAuth product path strings
const SLUG_TO_PATH = {
  'rust': 'rust-private',
  'rust-private': 'rust-private',
  'r6': 'r6-private',
  'rainbow-six-siege': 'r6-private',
  'r6-private': 'r6-private',
  'apex': 'apex-pro',
  'apex-legends': 'apex-pro',
  'apex-pro': 'apex-pro',
  'arc': 'arc-raiders-elite',
  'arc-raiders': 'arc-raiders-elite',
  'arc-raiders-elite': 'arc-raiders-elite',
  'fortnite': 'fortnite-private',
  'fortnite-private': 'fortnite-private',
  'delta': 'delta-force-private',
  'delta-force': 'delta-force-private',
  'delta-force-private': 'delta-force-private',
  'woofer': 'hwid-spoofer',
  'spoofer': 'hwid-spoofer',
  'hwid-spoofer': 'hwid-spoofer',
  'valorant': 'valorant-private',
  'valorant-private': 'valorant-private'
};

// Mapping of slugs to our local box art images and local custom description
const PRODUCT_ASSETS = {
  'rust': {
    image: '/storage/images/rust.jpg',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">External Streamproof Solution</span></p><br/><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">FEATURES:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Silent Aim &amp; Prediction</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Player ESP (Skeleton, Box, Health)</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• World ESP (Ores, Traps, Collectibles)</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Recoil &amp; Spread Compensations</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Always Sprint &amp; Flyhack</span></p>'
  },
  'arc': {
    image: '/storage/images/arc.png',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Extreme Performance</span></p><br/><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">FEATURES:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Vector Aimbot with Smooth Control</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Raider ESP &amp; Machine ESP</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Out-of-FOV Warning system</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Recoil control &amp; Speed Adjustment</span></p>'
  },
  'r6': {
    image: '/storage/images/r6.jpg',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Undetected Solution</span></p><br/><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">FEATURES:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Silent Aim &amp; Hitbox Override</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Operator ESP, Health &amp; Armor info</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Gadget &amp; Camera Visuals</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Caveira Glow &amp; Chams</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Recoil &amp; Spread modifier</span></p>'
  },
  'apex': {
    image: '/storage/images/apex.png',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Clean Streamproof Glow</span></p><br/><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">FEATURES:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Custom Aimbot &amp; Recoil Control</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Player ESP &amp; Glow effects</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Loot Filter &amp; Weapon ESP</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Spectator Warnings</span></p>'
  },
  'fortnite': {
    image: '/storage/images/fortnite.png',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Optimized For Tournament Play</span></p><br/><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">FEATURES:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Silent Aim &amp; Instant Reload</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Player ESP (Skeletons, 3D Boxes)</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Chest, Supply Drop, &amp; Vehicle ESP</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Safe streamproof rendering</span></p>'
  },
  'delta': {
    image: '/storage/images/delta.png',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Premium Delta Force Solution</span></p><br/><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">FEATURES:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Highly Accurate Silent Aim</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Skeleton ESP &amp; Health ESP</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Extraction point helper</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Weapon Calibration Recoil bypass</span></p>'
  },
  'woofer': {
    image: '/storage/images/woofer.png',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Supports Windows 10 &amp; 11</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Bypasses EAC, BE, Vanguard, and more</span></p><br/><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">FEATURES:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Ring0 Kernel Driver</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Automated MAC, Motherboard &amp; Disk spoofing</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">• Safe registry cleaning</span></p>'
  }
};

// Cache SellAuth products list to minimize latency
let cachedProducts = null;
let lastFetchTime = 0;

function getProducts(callback) {
  fetchProductsFromSellAuth((err, products) => {
    if (!err && products && Array.isArray(products) && products.length > 0) {
      return callback(null, products);
    }
    console.warn("SellAuth live API failed or rate-limited, returning bundled FALLBACK_PRODUCTS");
    try {
      if (typeof FALLBACK_PRODUCTS !== 'undefined' && Array.isArray(FALLBACK_PRODUCTS) && FALLBACK_PRODUCTS.length > 0) {
        return callback(null, FALLBACK_PRODUCTS);
      }
    } catch (e) {
      console.error("Fallback error:", e);
    }
    callback(err || new Error("Unable to load product data"), null);
  });
}
    console.warn("SellAuth live API failed or rate-limited, reading sellauth_fallback.json");
    try {
      const fallbackPath = path.join(process.cwd(), 'sellauth_fallback.json');
      if (fs.existsSync(fallbackPath)) {
        const fallbackData = JSON.parse(fs.readFileSync(fallbackPath, 'utf8'));
        if (Array.isArray(fallbackData) && fallbackData.length > 0) {
          return callback(null, fallbackData);
        }
      }
    } catch (e) {
      console.error("Fallback load error:", e);
    }
    callback(err || new Error("Unable to load product data"), null);
  });
}

function fetchProductsFromSellAuth(callback) {
  const now = Date.now();
  if (cachedProducts && (now - lastFetchTime < 60000)) {
    return callback(null, cachedProducts);
  }

  const options = {
    hostname: 'api.sellauth.com',
    path: `/v1/shops/${SHOP_ID}/products`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    },
    rejectUnauthorized: false // Ignore local SSL verification issues if any
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(body);
        if (json && json.data) {
          cachedProducts = json.data;
          lastFetchTime = Date.now();
          console.log(`Successfully updated products cache from SellAuth API! Count: ${cachedProducts.length}`);
          callback(null, cachedProducts);
        } else {
          callback(new Error('Invalid response structure from SellAuth API'), null);
        }
      } catch (err) {
        callback(err, null);
      }
    });
  });

  req.on('error', (err) => {
    callback(err, null);
  });

  req.end();
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;

  // Intercept product routes: /product/:slug
  const productMatch = pathname.match(/^\/product\/([a-zA-Z0-9_-]+)$/);
  if (productMatch) {
    const slug = productMatch[1].toLowerCase();
    const sellauthPath = SLUG_TO_PATH[slug];

    if (sellauthPath) {
      // 1. Fetch live products from SellAuth API
      getProducts((err, products) => {
        if (err || !products) {
          console.error("SellAuth fetch failed, falling back to local simulation:", err);
          // If SellAuth API is down, fallback to 500 error
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('SellAuth API Connection Error. Please try again.');
          return;
        }

        // Find the matched product in our live shop catalog
        const liveProd = products.find(p => {
      if (!p) return false;
      if (p.path === sellauthPath || p.path === slug) return true;
      if (Array.isArray(p.aliases) && (p.aliases.includes(slug) || p.aliases.includes(sellauthPath))) return true;
      return false;
    });
        if (!liveProd) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Product not found in SellAuth catalog.');
          return;
        }

        // 2. Read product_detail.html
        const templatePath = path.join(__dirname, 'product_detail.html');
        fs.readFile(templatePath, 'utf8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
          }

          let prodImages = (liveProd.images || []).map(img => typeof img === 'string' ? img : img.url).filter(Boolean);
      if (!prodImages.length && PRODUCT_ASSETS[slug]) {
        prodImages = [PRODUCT_ASSETS[slug].image];
      }
      if (!prodImages.length) {
        prodImages = ['/storage/images/rust.jpg'];
      }
      const localAsset = {
        image: prodImages[0],
        images: prodImages,
        desc: (PRODUCT_ASSETS[slug] && PRODUCT_ASSETS[slug].desc) ? PRODUCT_ASSETS[slug].desc : (liveProd.description || '')
      };

          // Build our dynamically integrated product JSON
          const productJson = {
            id: liveProd.id,
            path: liveProd.path,
            unique_id: liveProd.salt,
            name: liveProd.name,
            description: localAsset.desc,
            meta_title: liveProd.name + " - RiftCheats",
            meta_description: "Information: Windows 10 & 11 Supported, Intel & AMD Processors.",
            meta_image_url: localAsset.image,
            meta_twitter_card: "summary_large_image",
            product_tabs: [],
            price: liveProd.variants[0]?.price || "0.00",
            min_price: liveProd.variants[0]?.price || "0.00",
            max_price: liveProd.variants[liveProd.variants.length - 1]?.price || "0.00",
            min_price_slash: null,
            max_price_slash: null,
            min_price_with_discount: parseFloat(liveProd.variants[0]?.price || 0),
            max_price_with_discount: parseFloat(liveProd.variants[liveProd.variants.length - 1]?.price || 0),
            currency: liveProd.currency || "USD",
            image_url: null,
            image_urls: localAsset.images,
            sort_priority: 0,
            deliverables: null,
            stock: -1,
            hide_stock_count: false,
            group_id: liveProd.group_id,
            category_id: null,
            category: null,
            type: "variant",
            visibility: "public",
            variants: liveProd.variants.map(v => ({
              id: v.id,
              name: v.name,
              description: null,
              price: v.price,
              price_slash: null,
              quantity_min: v.quantity_min,
              quantity_max: v.quantity_max,
              volume_discounts: [],
              deliverables: 0,
              stock: v.stock,
              disabled_payment_method_ids: null
            })),
            products_sold: liveProd.products_sold,
            quantity_min: null,
            quantity_max: null,
            status_color: "#2ecc71",
            status_text: "Undetected",
            custom_fields: [],
            product_badges: { card: [], page: [] },
            discord_required: false,
            discord_guild_id: null,
            show_views_count: false,
            show_sales_count: false,
            show_sales_notifications: false,
            sales_count_hours: null,
            created_at: liveProd.created_at || "2026-06-30T04:09:09.000000Z",
            is_mandatory: false,
            metadata: null
          };

          let output = data;

          // Replace metadata titles and images
          output = output.replace(/<title>.*?<\/title>/g, `<title>${liveProd.name} - RiftCheats</title>`);
          output = output.replace(/<meta property="og:title" content=".*?"/g, `<meta property="og:title" content="${liveProd.name}"`);
          output = output.replace(/<meta name="twitter:title" content=".*?"/g, `<meta name="twitter:title" content="${liveProd.name}"`);
          output = output.replace(/<meta property="og:image" content=".*?"/g, `<meta property="og:image" content="${localAsset.image}"`);
          output = output.replace(/<meta name="twitter:image" content=".*?"/g, `<meta name="twitter:image" content="${localAsset.image}"`);

          // Replace the main Alpine.js product variable
          const productPattern = /product:\s*\{"id":774973,[\s\S]*?\}\s*,\s*productAddons/g;
          output = output.replace(productPattern, `product: ${JSON.stringify(productJson)}, productAddons`);

          // Re-render user reviews using the exact name of the product
          output = output.replace(/R6 Exodus Lite/g, liveProd.name);
          output = output.replace(/External Rust/g, liveProd.name);
          output = output.replace(/Apex Internal/g, liveProd.name);

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(output);
        });
      });
      return;
    }
  }

  // Fallback to static files check
  let filePath = path.join(__dirname, pathname);
  
  if (!filePath.startsWith(__dirname)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.exists(filePath, (exists) => {
      if (exists && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
      } else {
        const indexPath = path.join(__dirname, 'index.html');
        fs.exists(indexPath, (indexExists) => {
          if (indexExists) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(indexPath).pipe(res);
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          }
        });
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

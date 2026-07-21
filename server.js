const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = process.env.SELLAUTH_API_KEY || "5959307|3C5nX16iKAnZWTam7Mo3Q6o20GapFtnyLwEHtjfY71a1fd57";
const SHOP_ID = process.env.SELLAUTH_SHOP_ID || "223549";

const SLUG_TO_PATH = {
  'rust': 'rust',
  'r6': 'rainbow-six-siege',
  'apex': 'apex-legends',
  'arc': 'arc-raiders',
  'fortnite': 'fortnite-private',
  'delta': 'delta-force',
  'woofer': 'hwid-spoofer'
};

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

const FALLBACK_PRODUCTS = [
  {
    "id": 740833,
    "path": "rust",
    "name": "Rust Cheat",
    "currency": "USD",
    "salt": "rust-salt-001",
    "group_id": 102718,
    "products_sold": 1420,
    "created_at": "2026-06-30T04:09:09.000000Z",
    "description": "Rust Cheat - Aimbot, ESP, Wallhack & More",
    "variants": [
      {
        "id": 1210815,
        "name": "1 Day key",
        "price": "7.49",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1210816,
        "name": "7 Day Key",
        "price": "29.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1210817,
        "name": "30 Day Key",
        "price": "59.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      }
    ]
  },
  {
    "id": 651369,
    "path": "rainbow-six-siege",
    "name": "Rainbow Six Siege",
    "currency": "USD",
    "salt": "r6-salt-002",
    "group_id": 92904,
    "products_sold": 980,
    "created_at": "2026-06-30T04:09:09.000000Z",
    "description": "Rainbow Six Siege Cheat - Silent Aim, ESP, Chams & More",
    "variants": [
      {
        "id": 1026675,
        "name": "1 Day key",
        "price": "7.49",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1026676,
        "name": "7 Day Key",
        "price": "29.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1026677,
        "name": "30 Day Key",
        "price": "59.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      }
    ]
  },
  {
    "id": 651363,
    "path": "apex-legends",
    "name": "Apex Legends",
    "currency": "USD",
    "salt": "apex-salt-003",
    "group_id": 92905,
    "products_sold": 850,
    "created_at": "2026-06-30T04:09:09.000000Z",
    "description": "Apex Legends Cheat - Custom Aimbot, Glow ESP & Loot Filter",
    "variants": [
      {
        "id": 1026646,
        "name": "1 Day key",
        "price": "7.49",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1026647,
        "name": "7 Day Key",
        "price": "29.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1026648,
        "name": "30 Day Key",
        "price": "59.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      }
    ]
  },
  {
    "id": 651348,
    "path": "arc-raiders",
    "name": "Arc Raiders",
    "currency": "USD",
    "salt": "arc-salt-004",
    "group_id": 92901,
    "products_sold": 610,
    "created_at": "2026-06-30T04:09:09.000000Z",
    "description": "Arc Raiders Cheat - Vector Aimbot, Raider & Machine ESP",
    "variants": [
      {
        "id": 1026616,
        "name": "1 Day key",
        "price": "7.49",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1026632,
        "name": "7 Day Key",
        "price": "29.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1026633,
        "name": "30 Day Key",
        "price": "59.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      }
    ]
  },
  {
    "id": 740821,
    "path": "fortnite-private",
    "name": "Fortnite Private",
    "currency": "USD",
    "salt": "fortnite-salt-005",
    "group_id": 102708,
    "products_sold": 2100,
    "created_at": "2026-06-30T04:09:09.000000Z",
    "description": "Fortnite Private Cheat - Silent Aim, 3D Box ESP & Vehicle ESP",
    "variants": [
      {
        "id": 1210784,
        "name": "1 Day key",
        "price": "7.49",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1210785,
        "name": "7 Day Key",
        "price": "29.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1210786,
        "name": "30 Day Key",
        "price": "59.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1360871,
        "name": "Lifetime",
        "price": "299.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      }
    ]
  },
  {
    "id": 740827,
    "path": "delta-force",
    "name": "Delta Force",
    "currency": "USD",
    "salt": "delta-salt-006",
    "group_id": 102717,
    "products_sold": 430,
    "created_at": "2026-06-30T04:09:09.000000Z",
    "description": "Delta Force Cheat - Silent Aim, Skeleton ESP & Recoil Bypass",
    "variants": [
      {
        "id": 1210803,
        "name": "1 Day key",
        "price": "7.49",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1210804,
        "name": "7 Day Key",
        "price": "29.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1210805,
        "name": "30 Day Key",
        "price": "59.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      }
    ]
  },
  {
    "id": 740845,
    "path": "hwid-spoofer",
    "name": "HWID Spoofer",
    "currency": "USD",
    "salt": "woofer-salt-007",
    "group_id": 102720,
    "products_sold": 1890,
    "created_at": "2026-06-30T04:09:09.000000Z",
    "description": "HWID Spoofer - Ring0 Kernel Driver, Automated Spoofing",
    "variants": [
      {
        "id": 1210839,
        "name": "1 Time",
        "price": "29.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      },
      {
        "id": 1210842,
        "name": "Lifetime",
        "price": "99.99",
        "stock": -1,
        "quantity_min": 1,
        "quantity_max": 100
      }
    ]
  }
];

let cachedProducts = null;
let lastFetchTime = 0;

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
    rejectUnauthorized: false
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      try {
        const jsonRes = JSON.parse(body);
        if (jsonRes && jsonRes.data && Array.isArray(jsonRes.data) && jsonRes.data.length > 0) {
          cachedProducts = jsonRes.data;
          lastFetchTime = Date.now();
          return callback(null, cachedProducts);
        }
      } catch (err) {
        // Silent fallback
      }
      cachedProducts = FALLBACK_PRODUCTS;
      lastFetchTime = Date.now();
      callback(null, cachedProducts);
    });
  });

  req.on('error', (err) => {
    cachedProducts = FALLBACK_PRODUCTS;
    lastFetchTime = Date.now();
    callback(null, cachedProducts);
  });

  req.end();
}

app.use(express.static(__dirname));

app.get('/product/:slug', (req, res) => {
  const slug = (req.params.slug || '').toLowerCase();
  const sellauthPath = SLUG_TO_PATH[slug];
  if (!sellauthPath) {
    return res.status(404).send('Product path configuration missing.');
  }

  fetchProductsFromSellAuth((err, products) => {
    if (!products) {
      products = FALLBACK_PRODUCTS;
    }

    const liveProd = products.find(p => p.path === sellauthPath) || FALLBACK_PRODUCTS.find(p => p.path === sellauthPath);
    if (!liveProd) {
      return res.status(404).send('Product not found.');
    }

    const templatePath = path.join(__dirname, 'product_detail.html');
    fs.readFile(templatePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Server configuration error: product template file missing.');
      }

      const localAsset = PRODUCT_ASSETS[slug] || { image: liveProd.images?.[0]?.url || '/storage/images/rust.jpg', desc: liveProd.description };

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
        image_url: localAsset.image,
        image_urls: [localAsset.image],
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
          quantity_min: v.quantity_min || 1,
          quantity_max: v.quantity_max || 100,
          volume_discounts: [],
          deliverables: 0,
          stock: v.stock || -1,
          disabled_payment_method_ids: null
        })),
        products_sold: liveProd.products_sold || 500,
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
      output = output.replace(/<title>.*?<\/title>/g, `<title>${liveProd.name} - RiftCheats</title>`);
      output = output.replace(/<meta property="og:title" content=".*?"/g, `<meta property="og:title" content="${liveProd.name}"`);
      output = output.replace(/<meta name="twitter:title" content=".*?"/g, `<meta name="twitter:title" content="${liveProd.name}"`);
      output = output.replace(/<meta property="og:image" content=".*?"/g, `<meta property="og:image" content="${localAsset.image}"`);
      output = output.replace(/<meta name="twitter:image" content=".*?"/g, `<meta name="twitter:image" content="${localAsset.image}"`);

      const productPattern = /product:\s*\{"id":774973,[\s\S]*?\}\s*,\s*productAddons/g;
      output = output.replace(productPattern, `product: ${JSON.stringify(productJson)}, productAddons`);

      output = output.replace(/\/storage\/images\/1008329\.webp/g, localAsset.image);
      output = output.replace(/External Rust/g, liveProd.name);

      res.status(200).set('Content-Type', 'text/html; charset=utf-8').send(output);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

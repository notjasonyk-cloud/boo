const fs = require('fs');
const path = require('path');
const https = require('https');

const FALLBACK_PRODUCTS = [
  {
    "id": 651348,
    "name": "Krush Arc Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Arc Raiders Elite is the ultimate undetected cheat suite for dominating ARC Raiders extractions. Featuring lightning-fast aimbot, crystal-clear ESP &amp; wallhack, customizable radar, loot scanner, and no-recoil precision, all while staying fully undetected against aggressive anti-cheat waves. Elevate your raids, secure top-tier loot, and outplay every opponent with elite-level advantage. </span></p>",
    "currency": "USD",
    "path": "arc-raiders",
    "aliases": [
      "arc-raiders",
      "arc",
      "arc-raiders-elite"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944493.webp"
    ],
    "variants": [
      {
        "id": 1026616,
        "name": "1 Day",
        "price": 7.49,
        "stock": -1
      },
      {
        "id": 1026632,
        "name": "7 Days",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1026633,
        "name": "30 Days",
        "price": 59.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 651363,
    "name": "Krush Apex Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Apex Pro is the ultimate undetected cheat suite for dominating Apex Legends arenas and ranked lobbies. Featuring lightning-fast aimbot, crystal-clear ESP &amp; wallhack, customizable radar, item/loot scanner, no-recoil + perfect movement macros, all while staying fully undetected against the latest EAC and Ricochet anti-cheat updates. Climb ranks faster, secure endgame wins, and outplay every squad with pro-level advantage.</span></p>",
    "currency": "USD",
    "path": "apex-legends",
    "aliases": [
      "apex-legends",
      "apex",
      "apex-pro"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944495.webp"
    ],
    "variants": [
      {
        "id": 1026646,
        "name": "1 Day",
        "price": 7.49,
        "stock": -1
      },
      {
        "id": 1026647,
        "name": "7 Days",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1026648,
        "name": "30 Days",
        "price": 59.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 651369,
    "name": "Crusader R6 Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Rainbow Six Siege Private is the ultimate undetected cheat suite for dominating Rainbow Six Siege ranked lobbies and competitive matches. Featuring lightning-fast aimbot, crystal-clear ESP &amp; wallhack, customizable radar, gadget/loot scanner, no-recoil + perfect lean/peek macros, all while staying fully undetected against the latest BattlEye and R6 ShieldGuard anti-cheat updates. Climb to Champion faster, secure clutch wins, and outplay every team with pro-level advantage.</span></p>",
    "currency": "USD",
    "path": "rainbow-six-siege",
    "aliases": [
      "rainbow-six-siege",
      "r6",
      "r6-private"
    ],
    "images": [
      "https://api.sellauth.com/storage/images/944492.webp"
    ],
    "variants": [
      {
        "id": 1026675,
        "name": "1 Day",
        "price": 7.49,
        "stock": -1
      },
      {
        "id": 1026676,
        "name": "7 Days",
        "price": 29.99,
        "stock": -1
      },
      {
        "id": 1026677,
        "name": "30 Days",
        "price": 59.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740821,
    "name": "Disconnect Fortnite Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">World:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Loot Settings</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Display Status</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Items</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Loot Color</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Render Distance</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Categories</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Weapon</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enable Category</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Draw Settings</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Name: Always</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Distance: Always</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Rarity: Always | On Hover</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Categories Settings</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Font</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Color</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Aimbot:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">General</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enable Aimbot</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- AimBot Type: Static | Curved</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Aim Bind</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Second Aim Bind</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw FOV</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Target</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Aim Only Visible</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Lock Target</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Ignore Knocked</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Prediction</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Category Settings</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Global</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Melee</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Rifle</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Shotgun</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- SMG</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Pistol</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Sniper</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Other</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Additional</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- FOV (slider)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Smooth (slider)</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Trigger Bot</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enable</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Trigger Bind</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Delay Before Firing</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Firing Time</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Delay After Firing</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Bone Selection</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Aim Bone: Head | Neck | Body | Stomach | Nearest</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Force Bone</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Force Bind</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Visuals:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">General</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Render Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw AI</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Box</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Skeleton</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Skeleton Thickness (slider)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Line</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Line Type</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Distance</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Additional Info</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Team</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Unique Team Color</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Kills</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Platform</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Rank</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Weapon</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Radar</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enable Radar</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Radar Size (slider)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Draw Player</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Settings:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Show FPS</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- FPS Locker (slider)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enable Crosshair</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair Size</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- ESP Text Size</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Loot Text Size</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Language</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Add Config</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Load Config</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Share Config</span></p><p class=\"e-paragraph\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Requirements:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- INTEL + AMD CPU.</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Windows 10 - 11 | 1909 - 25H2.</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- SVM [AMD] / VT-X [INTEL] (BIOS) enabled.</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- 16GB RAM (or more).</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hyper v disabled for AMD CPU only.</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hyper v enabled for INTEL CPU only.</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Firmware in UEFI mode only for INTEL CPU.</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- The system use GPT format disk only for INTEL CPU.</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Secure Boot disabled.</span></p>",
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
        "price": 7.49,
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
        "price": 59.99,
        "stock": -1
      },
      {
        "id": 1360871,
        "name": "Lifetime",
        "price": 299.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740827,
    "name": "Ancient Delta Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">instructions-https://telegra.ph/ANCIENT-FAQ-EU-07-20</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">loader-https://telegra.ph/INJECTION-07-21-4</span></p>",
    "currency": "USD",
    "path": "delta-force",
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
        "price": 7.49,
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
        "price": 59.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740833,
    "name": "Krush Rust Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Silent Aimbot</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Target (Closest to Crosshair, Closest to Player)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- FOV</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hit Rate</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hit Rate</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Only Visible</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Bone (Head, Neck...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Show FOV</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Show Line</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Target (Closest to Crosshair, Closest to Player)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- FOV</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Smoothness</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Only Visible</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Prediction</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Bone (Head, Neck...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Show FOV</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Show Line</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Player ESP</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Skeleton</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Box (2D, 3D)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Visible Check</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Snap Line</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Head Circle</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- View Direction</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hide Sleepers</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Skeleton Thickness</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Box Thickness</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hide Teammates</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Team</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Held Item</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Position (Top, Bottom)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hotbar Items</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hotbar Armor</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Hotbar Scale</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># NPC ESP</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Skeleton</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Box (2D, 3D)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Snapline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- View Direction</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Head Circle</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Skeleton Thickness</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Box Thickness</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Filter (Scientist, Tunnel Dweller, Bandit...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">0</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># World ESP (items)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Amount</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Condition (Vertical, Horizontal, Text)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Icon</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Category (Weapons, Ammo, Resources...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># World ESP (raid)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Filter (Tool Cupboard, Auto Turrent...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># World ESP (ORES)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Icon</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Filter (Stone, Metal, Sulfur)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># World ESP (LOOT)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Filter (Standard Barrel, Biohazard Barrel...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># World ESP (PLANTS)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Filter (Hemp, Mushroom...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># World ESP (VEHICLES</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Name</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Max Distance</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Text Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># OOF ARROWS</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Player Arrows</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- NPC Arrows</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Shape (Filled, Outline, Dotted)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Radius</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Length</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Width</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Exploits</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- No Recoil (Yaw, Pitch)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- No Recoil (Yaw, Pitch)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Bright Night</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Sky Color</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Misc</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- CombatMode</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- CombatMode Filter (Dropped, Ores, Plants...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Menu Bind</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Panic Mode Bind</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- ESP Background</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- ESP Background Opacity</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- ESP Background Categories (NPCs, Dropped, Ores...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair Enabled</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair Gap</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair Length</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair Thickness</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair Dot</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair Outline</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Crosshair T-Shape</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Font Size</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- VSync</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- FPS Cap</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Menu DPI</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Menu Auto Scale</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Config Manager (Create, Load, Save...)</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p>",
    "currency": "USD",
    "path": "rust",
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
        "price": 7.49,
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
        "price": 59.99,
        "stock": -1
      }
    ]
  },
  {
    "id": 740845,
    "name": "Verse HWID Spoofer",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Requirements:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- CPU: Intel / AMD</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- OS: Windows 10 / 11</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- USB 8GB</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Windows Re-install</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Flash BIOS</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Supported Games:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- League of Legends</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Fortnite (Tournaments included) </span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Apex Legends</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Rust</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Call of Duty</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Rainbow Six Seige</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Overwatch 2</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Dark and Darker</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- &amp; MORE</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># General Information:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Works for all popular games</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- TPM Bypass NOT included</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Fortnite Tourney Support/Cleaners</span></p><p class=\"e-paragraph\" dir=\"ltr\"><br></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Supported Motherboards:</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">*TESTED AND WORKING ON MOTHERBOARDS*</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- ASUS</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Gigabyte</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Colorful</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Biostar</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- MSI</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Evga</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Asrock</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Microstar</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- Aorus</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">- HP</span></p><p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">-&gt; For Lenovo/Acer/Dell please open ticket first before purchase!</span></p>",
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
  }
];

const API_KEY = process.env.SELLAUTH_API_KEY || "5959307|3C5nX16iKAnZWTam7Mo3Q6o20GapFtnyLwEHtjfY71a1fd57";
const SHOP_ID = process.env.SELLAUTH_SHOP_ID || "223549";

const SLUG_TO_PATH = {
  'rust': 'rust',
  'rust-private': 'rust',
  'r6': 'rainbow-six-siege',
  'rainbow-six-siege': 'rainbow-six-siege',
  'r6-private': 'rainbow-six-siege',
  'apex': 'apex-legends',
  'apex-legends': 'apex-legends',
  'apex-pro': 'apex-legends',
  'arc': 'arc-raiders',
  'arc-raiders': 'arc-raiders',
  'arc-raiders-elite': 'arc-raiders',
  'fortnite': 'fortnite-private',
  'fortnite-private': 'fortnite-private',
  'delta': 'delta-force',
  'delta-force': 'delta-force',
  'delta-force-private': 'delta-force',
  'woofer': 'hwid-spoofer',
  'spoofer': 'hwid-spoofer',
  'hwid-spoofer': 'hwid-spoofer'
};

const PRODUCT_ASSETS = {
  'rust': {
    image: 'https://api.sellauth.com/storage/images/944529.webp',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">External Streamproof Solution</span></p>'
  },
  'arc': {
    image: 'https://api.sellauth.com/storage/images/944493.webp',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Extreme Performance</span></p>'
  },
  'r6': {
    image: 'https://api.sellauth.com/storage/images/944492.webp',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Undetected Solution</span></p>'
  },
  'apex': {
    image: 'https://api.sellauth.com/storage/images/944495.webp',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Clean Streamproof Glow</span></p>'
  },
  'fortnite': {
    image: 'https://api.sellauth.com/storage/images/944503.webp',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Optimized For Tournament Play</span></p>'
  },
  'delta': {
    image: 'https://api.sellauth.com/storage/images/944525.webp',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Windows 10 &amp; 11 Supported</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Intel &amp; AMD Processors</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Premium Delta Force Solution</span></p>'
  },
  'woofer': {
    image: 'https://api.sellauth.com/storage/images/944536.webp',
    desc: '<p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Information:</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Supports Windows 10 &amp; 11</span></p><p class="e-paragraph" dir="ltr" style="text-align: start;"><span style="font-weight: 700; white-space: pre-wrap;">Bypasses EAC, BE, Vanguard, and more</span></p>'
  }
};

let cachedProducts = null;
let lastFetchTime = 0;

function getProducts(callback) {
  fetchProductsFromSellAuth((err, products) => {
    if (!err && products && Array.isArray(products) && products.length > 0) {
      return callback(null, products);
    }
    console.warn("SellAuth live API failed or rate-limited, returning bundled FALLBACK_PRODUCTS");
    if (typeof FALLBACK_PRODUCTS !== 'undefined' && Array.isArray(FALLBACK_PRODUCTS) && FALLBACK_PRODUCTS.length > 0) {
      return callback(null, FALLBACK_PRODUCTS);
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
    rejectUnauthorized: false
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

module.exports = (req, res) => {
  // Proxy /checkout/* requests directly from SellAuth's servers
  if (req.url && req.url.startsWith('/checkout/')) {
    const proxyOptions = {
      hostname: 'sellauth.com',
      path: req.url,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': req.headers['accept'] || '*/*',
        'Accept-Language': req.headers['accept-language'] || 'en-US,en;q=0.9'
      }
    };

    const proxyReq = https.request(proxyOptions, (proxyRes) => {
      res.statusCode = proxyRes.statusCode;
      if (proxyRes.headers['content-type']) {
        res.setHeader('Content-Type', proxyRes.headers['content-type']);
      }
      
      let data = [];
      proxyRes.on('data', (chunk) => data.push(chunk));
      proxyRes.on('end', () => {
        let buffer = Buffer.concat(data);
        const contentType = proxyRes.headers['content-type'] || '';
        if (contentType.includes('text/html')) {
          let html = buffer.toString('utf8');
          // Fix relative asset links so JS/CSS assets fetch from https://sellauth.com
          html = html.replace(/src="\/checkout\/assets\//g, 'src="https://sellauth.com/checkout/assets/');
          html = html.replace(/href="\/checkout\/assets\//g, 'href="https://sellauth.com/checkout/assets/');
          html = html.replace(/src="\/cdn-cgi\//g, 'src="https://sellauth.com/cdn-cgi/');
          res.end(html);
        } else {
          res.end(buffer);
        }
      });
    });

    proxyReq.on('error', (err) => {
      console.error("Checkout Proxy Error:", err);
      res.statusCode = 500;
      res.end("Checkout Proxy Error");
    });

    proxyReq.end();
    return;
  }

  let slug = req.query.slug;
  if (!slug) {
    const urlParts = req.url.split('?')[0].split('/');
    slug = urlParts[urlParts.length - 1];
  }
  slug = (slug || '').toLowerCase();

  const sellauthPath = SLUG_TO_PATH[slug] || slug;

  getProducts((err, products) => {
    if (err || !products) {
      console.error("SellAuth API Error:", err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('SellAuth API Connection Error. Please refresh and try again.');
      return;
    }

    const slugClean = slug.replace(/-(private|pro|elite)$/, '');

    const liveProd = products.find(p => {
      if (!p) return false;
      const pPath = (p.path || '').toLowerCase();
      const pPathClean = pPath.replace(/-(private|pro|elite)$/, '');
      if (pPath === sellauthPath || pPath === slug || pPathClean === slugClean) return true;
      if (Array.isArray(p.aliases) && (p.aliases.includes(slug) || p.aliases.includes(sellauthPath))) return true;
      return false;
    });

    if (!liveProd) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Product not found in SellAuth dashboard.');
      return;
    }

    const templatePath = path.join(process.cwd(), 'product_detail.html');
    fs.readFile(templatePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Failed to read product_detail.html:", err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server configuration error: product template file missing.');
        return;
      }

      let prodImages = (liveProd.images || []).map(img => typeof img === 'string' ? img : img.url).filter(Boolean);
      if (!prodImages.length && PRODUCT_ASSETS[slug]) {
        prodImages = [PRODUCT_ASSETS[slug].image];
      }
      if (!prodImages.length) {
        prodImages = ['https://api.sellauth.com/storage/images/944529.webp'];
      }
      const localAsset = {
        image: prodImages[0],
        images: prodImages,
        desc: (PRODUCT_ASSETS[slug] && PRODUCT_ASSETS[slug].desc) ? PRODUCT_ASSETS[slug].desc : (liveProd.description || '')
      };

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

      output = output.replace(/<title>.*?<\/title>/g, `<title>${liveProd.name} - RiftCheats</title>`);
      output = output.replace(/<meta property="og:title" content=".*?"/g, `<meta property="og:title" content="${liveProd.name}"`);
      output = output.replace(/<meta name="twitter:title" content=".*?"/g, `<meta name="twitter:title" content="${liveProd.name}"`);
      output = output.replace(/<meta property="og:image" content=".*?"/g, `<meta property="og:image" content="${localAsset.image}"`);
      output = output.replace(/<meta name="twitter:image" content=".*?"/g, `<meta name="twitter:image" content="${localAsset.image}"`);

      const productPattern = /product:\s*\{"id":774973,[\s\S]*?\}\s*,\s*productAddons/g;
      output = output.replace(productPattern, `product: ${JSON.stringify(productJson)}, productAddons`);

      output = output.replace(/\/storage\/images\/1008329\.webp/g, localAsset.image);
      output = output.replace(/\/storage\/images\/rust\.jpg/g, localAsset.image);
      output = output.replace(/R6 Exodus Lite/g, liveProd.name);
      output = output.replace(/External Rust/g, liveProd.name);
      output = output.replace(/Apex Internal/g, liveProd.name);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(output);
    });
  });
};

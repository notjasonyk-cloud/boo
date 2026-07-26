const fs = require('fs');
const path = require('path');
const https = require('https');

const FALLBACK_PRODUCTS = [
  {
    "id": 651348,
    "name": "Krush Arc Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Players\n- Enabled\n- Skeleton\n- OOF Arrows\n- Box (2D / 3D)\n- Shield Bar\n- Health Bar\n- Head Circle\n- View Direction\n- Username\n- Squad Name\n- Holding Weapon Name\n- Visible Check (Raycast)\n- Dead Bodies\n- Knocked Filter\n- Distance\n- Max Distance\n\n# Arcs\n- Enabled\n- Name\n- Threat\n- Icon\n- Broken Filter (Corpse)\n- Custom Selection Of Each ARC\n- Distance\n- Max Distance\n\n# Extractions\n- Enabled\n- State (Ready, Closed...)\n- Icon\n- Distance\n- Max Distance\n\n# Containers\n- Enabled\n- Name\n- Icon\n- Hide Already Looted\n- Custom Selection Of Each Container\n- Distance\n- Max Distance\n\n# Items\n- Enabled\n- Name\n- Quantity\n- Rarity\n- Distance\n- Max Distance\n- Weight\n- Price\n- Icon\n\n# Natures\n- Enabled\n- Name\n- Icon\n- Custom Selection Of Natures\n- Distance\n- Max Distance\n\n# Exploits\n- Super Flashlight\n- Flashlight Color Changer\n- FOV Changer\n- Zoom (Hotkey)\n- Disable Enemy Flashlight (Client)\n- Long Distance Revive\n- Long Distance Consumable\n\n# Misc\n- CombatMode (Disable World ESP)\n- All Colors Customizable\n- OOF Arrows Selection\n- OOF Arrows Customization\n- Config Saver\n- Config Load\n- Config Reset</span></p>",
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
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot\n- Aimbot\n- Enable\n- Ignore Knocked\n- Aim Only Visible\n- Draw FOV\n- FOV (slider)\n- Aim Bind\n- Smooth (slider)\n- Second Aim Bind\n- Second Smooth (slider)\n- Misc\n- Lock Target\n- Aim Bone: Head | Neck | Chest | Stomach | Nearest\n- RCS Pitch (slider)\n- RCS Yaw (slider)\n- Trigger\n- Enable\n- Trigger Bind\n- Trigger Delay (slider)\n- Trigger Distance (slider)\n\n# Player ESP\n- ESP\n- Render Distance (slider)\n- Draw Box (visible and invisible colors)\n- Draw Knocked: color\n- Draw Skeleton: color\n- Draw Glow (visible and invisible colors)\n- Draw Name: color\n- Draw Distance: color\n- Draw Health\n- Draw Shield\n- Draw Weapon: color\n- Draw Offscreen (visible and invisible colors)\n- Draw Info\n- Draw Seer\n- STYLE\n- Box Type: Default | Outline | Filled\n- Text Background: color\n- Draw Kills\n- Draw Rank\n- Draw Lvl\n- Draw Team\n- Offscreen Range (slider)\n- Glow Type: Default | Vis Only | Invis Only | Flat\n- Skeleton Thickness (slider)\n- Seer Type: Always | FOV | Distance | FOV & Distance\n- Seer Distance (slider)\n- Weapon Type: Text | Icon\n\n# Loot ESP\n- ESP\n- Enable\n- Draw Icon\n- Draw Name\n- Draw Lobe\n- Draw Glow: color\n- Draw Death Box\n- Draw Distance\n- Render Distance\n- Style\n- Text Background: color\n- Icon Size (slider)\n- Icon Type: Default | Game\n- Glow Type: Default | Outline | Filled\n- Loot Category\n- Weapon\n- Gear\n- Regen\n- Attachment\n- Ammo\n- Special\n- Smart Loot\n- Enable Smart Loot\n- Ammo (with customize ammo count)\n- Custom Loot (with customize all loot)\n\n# Misc\n- Misc\n- FOV Changer\n- Auto Grapple\n- Auto Wall Jump\n- Auto Super Glide\n- Auto Tap Strafe\n- Big Map Radar\n- General\n- Spectator Count\n- Spectator Window Transparency (slider)\n- Battle Mode Key\n- FOV Scale (slider)\n- FPS Limit (slider)\n- Show FPS</span></p>",
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
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Misc:\n- Gadget ESP\n- Hit Damage Effect\n- Crosshair\n\n# Aimbot:\n- Active Aimbot\n- Aimbot Keys\n- FOV Size\n- Hitboxes\n- Sensitivity\n- Mark Target\n\n# Visuals:\n- Player ESP\n- ESP Box\n- ESP Line\n- Player Distance\n- Skeleton\n- Name - players' nicknames\n- Head - select head hitbox separately using ESP\n- Health (Bar, Text)\n- Team Check\n- Max Distance\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# General Information:\n- Great for legit-rage</span></p>",
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
    "name": "DC Fortnite Cheat",
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot:\n- Aimbot \n- Aimbot Prediction\n- Aimbot Hitbox (Head, Neck, Chest, Pelvis)\n- Aimbot Smoothing Value\n- Aimbot FOV\n- Aimbot Max Distance\n- Different Weapon Configs\n- Triggerbot\n- Triggerbot Hitbox (Head, Neck, Chest, Pelvis)\n- Triggerbot Delay\n- Other Aimbot \n- Draw FOV\n- Draw Filled FOV\n- Aimbot Visible Check\n- Aimbot Ignore Knocked\n- Aimbot Ignore Team\n- Aimbot Deadzone\n- Aimbot Keybind\n- Triggerbot Keybind\n- Battlemode Toggle\n\n# Visuals:\n- Box (Full, Corner)\n- Skeleton (Sharp, Bezier)\n- Name\n- Team ID\n- Distance\n- Held Weapon\n- Kills\n- Show Team\n- Show NPC\n- Filled Box\n- Platform\n- Snaplines (Center, Top, Bottom)\n\n# Item ESP:\n- Item ESP \n- Item Configs\n- Show Item\n- Show Name\n- Show Count\n- Show Rarity\n- Show Distance\n- Item Max Distance\n\n# Settings:\n- Config System\n- Overlay VSync\n- ESP Font (Tahoma, Pixel, FN, Matcha)\n- ESP Font Size\n- ESP Outline (Drop Shadow, Full Outline, Half Outline)\n- Full Controller Support\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# Other Visuals:\n- Seperate Team ID Colors\n- Radar\n- Radar Team Visualizer\n- Radar Automatic Distance Scaling\n- Radar Background Alpha\n- Radar Orientation Lock\n- Radar Player Size\n- Radar Radius\n- Radar Distance\n- Radar Enemy Color\n- Radar Team Color\n- Target Line\n\n# General Information:\n- Fully external\n- Streamproof\n- NO SPOOFER INCLUDED</span></p>",
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
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Visuals\n  Visuals\n    Render Distance (slider)\n    Draw Box (visible and invisible colors)\n    Draw Skeleton (visible and invisible colors)\n    Skeleton Thickness (slider)\n    Draw Health\n    Draw Line\n    Draw Name: color\n    Draw Distance: color\n    Draw Team\n    Draw Kills\n  Radar\n    Enable Radar\n    Radar Size (slider)\n    Draw Player: color\n\n# Settings\n  Settings\n    Save Config\n    Load Config\n    Delete Config\n    Share Config\n    Show FPS\n    FPS Locker (slider)\n    Language: English | Chinese\n\n# Requirements\n  Requirements\n    INTEL + AMD CPU\n    Windows 10 - 11 | 1909 - 25H2\n    SVM [AMD] / VT-X [INTEL] (BIOS) Enabled\n    16GB RAM (or more)\n    Hyper-V Disabled for AMD CPU Only\n    Hyper-V Enabled for INTEL CPU Only\n    Firmware in UEFI Mode Only for INTEL CPU\n    System Must Use GPT Format Disk for INTEL CPU\n    Secure Boot Disabled</span></p>",
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
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Silent Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Hit Rate\n- Hit Rate\n- Only Visible\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Smoothness\n- Only Visible\n- Prediction\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Player ESP\n- Enabled\n- Name\n- Skeleton\n- Box (2D, 3D)\n- Visible Check\n- Snap Line\n- Head Circle\n- View Direction\n- Hide Sleepers\n- Skeleton Thickness\n- Box Thickness\n- Hide Teammates\n- Distance\n- Team\n- Held Item\n- Text Outline\n- Text Position (Top, Bottom)\n- Hotbar Items\n- Hotbar Armor\n- Hotbar Scale\n- Max Distance\n\n# NPC ESP\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Skeleton\n- Box (2D, 3D)\n- Snapline\n- View Direction\n- Head Circle\n- Skeleton Thickness\n- Box Thickness\n- Filter (Scientist, Tunnel Dweller, Bandit...)\n0\n# World ESP (items)\n- Enabled\n- Name\n- Amount\n- Condition (Vertical, Horizontal, Text)\n- Icon\n- Distance\n- Text Outline\n- Category (Weapons, Ammo, Resources...)\n- Max Distance\n\n# World ESP (raid)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Tool Cupboard, Auto Turrent...)\n- Max Distance\n\n# World ESP (ORES)\n- Enabled\n- Name\n- Distance\n- Icon\n- Text Outline\n- Filter (Stone, Metal, Sulfur)\n- Max Distance\n\n# World ESP (LOOT)\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Filter (Standard Barrel, Biohazard Barrel...)\n\n# World ESP (PLANTS)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Hemp, Mushroom...)\n- Max Distance\n\n# World ESP (VEHICLES\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n\n# OOF ARROWS\n- Enabled\n- Player Arrows\n- NPC Arrows\n- Shape (Filled, Outline, Dotted)\n- Radius\n- Length\n- Width\n\n# Exploits\n- No Recoil (Yaw, Pitch)\n- No Recoil (Yaw, Pitch)\n- Bright Night\n- Sky Color\n\n# Misc\n- CombatMode\n- CombatMode Filter (Dropped, Ores, Plants...)\n- Menu Bind\n- Panic Mode Bind\n- ESP Background\n- ESP Background Opacity\n- ESP Background Categories (NPCs, Dropped, Ores...)\n- Crosshair Enabled\n- Crosshair Gap\n- Crosshair Length\n- Crosshair Thickness\n- Crosshair Dot\n- Crosshair Outline\n- Crosshair T-Shape\n- Font Size\n- VSync\n- FPS Cap\n- Menu DPI\n- Menu Auto Scale\n- Config Manager (Create, Load, Save...)</span></p>",
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
    "description": "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n- USB 8GB\n- Windows Re-install\n- Flash BIOS\n\n# Supported Games:\n- League of Legends\n- Fortnite (Tournaments included) \n- Apex Legends\n- Rust\n- Call of Duty\n- Rainbow Six Seige\n- Overwatch 2\n- Dark and Darker\n- & MORE\n\n# General Information:\n- Works for all popular games\n- TPM Bypass NOT included\n- Fortnite Tourney Support/Cleaners\n\n# Supported Motherboards:\n*TESTED AND WORKING ON MOTHERBOARDS*\n- ASUS\n- Gigabyte\n- Colorful\n- Biostar\n- MSI\n- Evga\n- Asrock\n- Microstar\n- Aorus\n- HP\n-> For Lenovo/Acer/Dell please open ticket first before purchase!</span></p>",
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
        "name": "7 Day Key",
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
  'rust': { name: 'Krush Rust Cheat', image: '/storage/images/rust.jpg', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Silent Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Hit Rate\n- Hit Rate\n- Only Visible\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Smoothness\n- Only Visible\n- Prediction\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Player ESP\n- Enabled\n- Name\n- Skeleton\n- Box (2D, 3D)\n- Visible Check\n- Snap Line\n- Head Circle\n- View Direction\n- Hide Sleepers\n- Skeleton Thickness\n- Box Thickness\n- Hide Teammates\n- Distance\n- Team\n- Held Item\n- Text Outline\n- Text Position (Top, Bottom)\n- Hotbar Items\n- Hotbar Armor\n- Hotbar Scale\n- Max Distance\n\n# NPC ESP\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Skeleton\n- Box (2D, 3D)\n- Snapline\n- View Direction\n- Head Circle\n- Skeleton Thickness\n- Box Thickness\n- Filter (Scientist, Tunnel Dweller, Bandit...)\n0\n# World ESP (items)\n- Enabled\n- Name\n- Amount\n- Condition (Vertical, Horizontal, Text)\n- Icon\n- Distance\n- Text Outline\n- Category (Weapons, Ammo, Resources...)\n- Max Distance\n\n# World ESP (raid)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Tool Cupboard, Auto Turrent...)\n- Max Distance\n\n# World ESP (ORES)\n- Enabled\n- Name\n- Distance\n- Icon\n- Text Outline\n- Filter (Stone, Metal, Sulfur)\n- Max Distance\n\n# World ESP (LOOT)\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Filter (Standard Barrel, Biohazard Barrel...)\n\n# World ESP (PLANTS)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Hemp, Mushroom...)\n- Max Distance\n\n# World ESP (VEHICLES\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n\n# OOF ARROWS\n- Enabled\n- Player Arrows\n- NPC Arrows\n- Shape (Filled, Outline, Dotted)\n- Radius\n- Length\n- Width\n\n# Exploits\n- No Recoil (Yaw, Pitch)\n- No Recoil (Yaw, Pitch)\n- Bright Night\n- Sky Color\n\n# Misc\n- CombatMode\n- CombatMode Filter (Dropped, Ores, Plants...)\n- Menu Bind\n- Panic Mode Bind\n- ESP Background\n- ESP Background Opacity\n- ESP Background Categories (NPCs, Dropped, Ores...)\n- Crosshair Enabled\n- Crosshair Gap\n- Crosshair Length\n- Crosshair Thickness\n- Crosshair Dot\n- Crosshair Outline\n- Crosshair T-Shape\n- Font Size\n- VSync\n- FPS Cap\n- Menu DPI\n- Menu Auto Scale\n- Config Manager (Create, Load, Save...)</span></p>" },
  'rust-private': { name: 'Krush Rust Cheat', image: '/storage/images/rust.jpg', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Silent Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Hit Rate\n- Hit Rate\n- Only Visible\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Smoothness\n- Only Visible\n- Prediction\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Player ESP\n- Enabled\n- Name\n- Skeleton\n- Box (2D, 3D)\n- Visible Check\n- Snap Line\n- Head Circle\n- View Direction\n- Hide Sleepers\n- Skeleton Thickness\n- Box Thickness\n- Hide Teammates\n- Distance\n- Team\n- Held Item\n- Text Outline\n- Text Position (Top, Bottom)\n- Hotbar Items\n- Hotbar Armor\n- Hotbar Scale\n- Max Distance\n\n# NPC ESP\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Skeleton\n- Box (2D, 3D)\n- Snapline\n- View Direction\n- Head Circle\n- Skeleton Thickness\n- Box Thickness\n- Filter (Scientist, Tunnel Dweller, Bandit...)\n0\n# World ESP (items)\n- Enabled\n- Name\n- Amount\n- Condition (Vertical, Horizontal, Text)\n- Icon\n- Distance\n- Text Outline\n- Category (Weapons, Ammo, Resources...)\n- Max Distance\n\n# World ESP (raid)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Tool Cupboard, Auto Turrent...)\n- Max Distance\n\n# World ESP (ORES)\n- Enabled\n- Name\n- Distance\n- Icon\n- Text Outline\n- Filter (Stone, Metal, Sulfur)\n- Max Distance\n\n# World ESP (LOOT)\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Filter (Standard Barrel, Biohazard Barrel...)\n\n# World ESP (PLANTS)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Hemp, Mushroom...)\n- Max Distance\n\n# World ESP (VEHICLES\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n\n# OOF ARROWS\n- Enabled\n- Player Arrows\n- NPC Arrows\n- Shape (Filled, Outline, Dotted)\n- Radius\n- Length\n- Width\n\n# Exploits\n- No Recoil (Yaw, Pitch)\n- No Recoil (Yaw, Pitch)\n- Bright Night\n- Sky Color\n\n# Misc\n- CombatMode\n- CombatMode Filter (Dropped, Ores, Plants...)\n- Menu Bind\n- Panic Mode Bind\n- ESP Background\n- ESP Background Opacity\n- ESP Background Categories (NPCs, Dropped, Ores...)\n- Crosshair Enabled\n- Crosshair Gap\n- Crosshair Length\n- Crosshair Thickness\n- Crosshair Dot\n- Crosshair Outline\n- Crosshair T-Shape\n- Font Size\n- VSync\n- FPS Cap\n- Menu DPI\n- Menu Auto Scale\n- Config Manager (Create, Load, Save...)</span></p>" },
  'krush-rust-cheat': { name: 'Krush Rust Cheat', image: '/storage/images/rust.jpg', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Silent Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Hit Rate\n- Hit Rate\n- Only Visible\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Aimbot\n- Enabled\n- Target (Closest to Crosshair, Closest to Player)\n- FOV\n- Smoothness\n- Only Visible\n- Prediction\n- Bone (Head, Neck...)\n- Show FOV\n- Show Line\n\n# Player ESP\n- Enabled\n- Name\n- Skeleton\n- Box (2D, 3D)\n- Visible Check\n- Snap Line\n- Head Circle\n- View Direction\n- Hide Sleepers\n- Skeleton Thickness\n- Box Thickness\n- Hide Teammates\n- Distance\n- Team\n- Held Item\n- Text Outline\n- Text Position (Top, Bottom)\n- Hotbar Items\n- Hotbar Armor\n- Hotbar Scale\n- Max Distance\n\n# NPC ESP\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Skeleton\n- Box (2D, 3D)\n- Snapline\n- View Direction\n- Head Circle\n- Skeleton Thickness\n- Box Thickness\n- Filter (Scientist, Tunnel Dweller, Bandit...)\n0\n# World ESP (items)\n- Enabled\n- Name\n- Amount\n- Condition (Vertical, Horizontal, Text)\n- Icon\n- Distance\n- Text Outline\n- Category (Weapons, Ammo, Resources...)\n- Max Distance\n\n# World ESP (raid)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Tool Cupboard, Auto Turrent...)\n- Max Distance\n\n# World ESP (ORES)\n- Enabled\n- Name\n- Distance\n- Icon\n- Text Outline\n- Filter (Stone, Metal, Sulfur)\n- Max Distance\n\n# World ESP (LOOT)\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n- Filter (Standard Barrel, Biohazard Barrel...)\n\n# World ESP (PLANTS)\n- Enabled\n- Name\n- Distance\n- Text Outline\n- Filter (Hemp, Mushroom...)\n- Max Distance\n\n# World ESP (VEHICLES\n- Enabled\n- Name\n- Distance\n- Max Distance\n- Text Outline\n\n# OOF ARROWS\n- Enabled\n- Player Arrows\n- NPC Arrows\n- Shape (Filled, Outline, Dotted)\n- Radius\n- Length\n- Width\n\n# Exploits\n- No Recoil (Yaw, Pitch)\n- No Recoil (Yaw, Pitch)\n- Bright Night\n- Sky Color\n\n# Misc\n- CombatMode\n- CombatMode Filter (Dropped, Ores, Plants...)\n- Menu Bind\n- Panic Mode Bind\n- ESP Background\n- ESP Background Opacity\n- ESP Background Categories (NPCs, Dropped, Ores...)\n- Crosshair Enabled\n- Crosshair Gap\n- Crosshair Length\n- Crosshair Thickness\n- Crosshair Dot\n- Crosshair Outline\n- Crosshair T-Shape\n- Font Size\n- VSync\n- FPS Cap\n- Menu DPI\n- Menu Auto Scale\n- Config Manager (Create, Load, Save...)</span></p>" },
  'r6': { name: 'Crusader R6 Cheat', image: '/storage/images/r6.jpg', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Misc:\n- Gadget ESP\n- Hit Damage Effect\n- Crosshair\n\n# Aimbot:\n- Active Aimbot\n- Aimbot Keys\n- FOV Size\n- Hitboxes\n- Sensitivity\n- Mark Target\n\n# Visuals:\n- Player ESP\n- ESP Box\n- ESP Line\n- Player Distance\n- Skeleton\n- Name - players' nicknames\n- Head - select head hitbox separately using ESP\n- Health (Bar, Text)\n- Team Check\n- Max Distance\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# General Information:\n- Great for legit-rage</span></p>" },
  'rainbow-six-siege': { name: 'Crusader R6 Cheat', image: '/storage/images/r6.jpg', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Misc:\n- Gadget ESP\n- Hit Damage Effect\n- Crosshair\n\n# Aimbot:\n- Active Aimbot\n- Aimbot Keys\n- FOV Size\n- Hitboxes\n- Sensitivity\n- Mark Target\n\n# Visuals:\n- Player ESP\n- ESP Box\n- ESP Line\n- Player Distance\n- Skeleton\n- Name - players' nicknames\n- Head - select head hitbox separately using ESP\n- Health (Bar, Text)\n- Team Check\n- Max Distance\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# General Information:\n- Great for legit-rage</span></p>" },
  'r6-private': { name: 'Crusader R6 Cheat', image: '/storage/images/r6.jpg', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Misc:\n- Gadget ESP\n- Hit Damage Effect\n- Crosshair\n\n# Aimbot:\n- Active Aimbot\n- Aimbot Keys\n- FOV Size\n- Hitboxes\n- Sensitivity\n- Mark Target\n\n# Visuals:\n- Player ESP\n- ESP Box\n- ESP Line\n- Player Distance\n- Skeleton\n- Name - players' nicknames\n- Head - select head hitbox separately using ESP\n- Health (Bar, Text)\n- Team Check\n- Max Distance\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# General Information:\n- Great for legit-rage</span></p>" },
  'crusader-r6-cheat': { name: 'Crusader R6 Cheat', image: '/storage/images/r6.jpg', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Misc:\n- Gadget ESP\n- Hit Damage Effect\n- Crosshair\n\n# Aimbot:\n- Active Aimbot\n- Aimbot Keys\n- FOV Size\n- Hitboxes\n- Sensitivity\n- Mark Target\n\n# Visuals:\n- Player ESP\n- ESP Box\n- ESP Line\n- Player Distance\n- Skeleton\n- Name - players' nicknames\n- Head - select head hitbox separately using ESP\n- Health (Bar, Text)\n- Team Check\n- Max Distance\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# General Information:\n- Great for legit-rage</span></p>" },
  'apex': { name: 'Krush Apex Cheat', image: '/storage/images/apex.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot\n- Aimbot\n- Enable\n- Ignore Knocked\n- Aim Only Visible\n- Draw FOV\n- FOV (slider)\n- Aim Bind\n- Smooth (slider)\n- Second Aim Bind\n- Second Smooth (slider)\n- Misc\n- Lock Target\n- Aim Bone: Head | Neck | Chest | Stomach | Nearest\n- RCS Pitch (slider)\n- RCS Yaw (slider)\n- Trigger\n- Enable\n- Trigger Bind\n- Trigger Delay (slider)\n- Trigger Distance (slider)\n\n# Player ESP\n- ESP\n- Render Distance (slider)\n- Draw Box (visible and invisible colors)\n- Draw Knocked: color\n- Draw Skeleton: color\n- Draw Glow (visible and invisible colors)\n- Draw Name: color\n- Draw Distance: color\n- Draw Health\n- Draw Shield\n- Draw Weapon: color\n- Draw Offscreen (visible and invisible colors)\n- Draw Info\n- Draw Seer\n- STYLE\n- Box Type: Default | Outline | Filled\n- Text Background: color\n- Draw Kills\n- Draw Rank\n- Draw Lvl\n- Draw Team\n- Offscreen Range (slider)\n- Glow Type: Default | Vis Only | Invis Only | Flat\n- Skeleton Thickness (slider)\n- Seer Type: Always | FOV | Distance | FOV & Distance\n- Seer Distance (slider)\n- Weapon Type: Text | Icon\n\n# Loot ESP\n- ESP\n- Enable\n- Draw Icon\n- Draw Name\n- Draw Lobe\n- Draw Glow: color\n- Draw Death Box\n- Draw Distance\n- Render Distance\n- Style\n- Text Background: color\n- Icon Size (slider)\n- Icon Type: Default | Game\n- Glow Type: Default | Outline | Filled\n- Loot Category\n- Weapon\n- Gear\n- Regen\n- Attachment\n- Ammo\n- Special\n- Smart Loot\n- Enable Smart Loot\n- Ammo (with customize ammo count)\n- Custom Loot (with customize all loot)\n\n# Misc\n- Misc\n- FOV Changer\n- Auto Grapple\n- Auto Wall Jump\n- Auto Super Glide\n- Auto Tap Strafe\n- Big Map Radar\n- General\n- Spectator Count\n- Spectator Window Transparency (slider)\n- Battle Mode Key\n- FOV Scale (slider)\n- FPS Limit (slider)\n- Show FPS</span></p>" },
  'apex-legends': { name: 'Krush Apex Cheat', image: '/storage/images/apex.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot\n- Aimbot\n- Enable\n- Ignore Knocked\n- Aim Only Visible\n- Draw FOV\n- FOV (slider)\n- Aim Bind\n- Smooth (slider)\n- Second Aim Bind\n- Second Smooth (slider)\n- Misc\n- Lock Target\n- Aim Bone: Head | Neck | Chest | Stomach | Nearest\n- RCS Pitch (slider)\n- RCS Yaw (slider)\n- Trigger\n- Enable\n- Trigger Bind\n- Trigger Delay (slider)\n- Trigger Distance (slider)\n\n# Player ESP\n- ESP\n- Render Distance (slider)\n- Draw Box (visible and invisible colors)\n- Draw Knocked: color\n- Draw Skeleton: color\n- Draw Glow (visible and invisible colors)\n- Draw Name: color\n- Draw Distance: color\n- Draw Health\n- Draw Shield\n- Draw Weapon: color\n- Draw Offscreen (visible and invisible colors)\n- Draw Info\n- Draw Seer\n- STYLE\n- Box Type: Default | Outline | Filled\n- Text Background: color\n- Draw Kills\n- Draw Rank\n- Draw Lvl\n- Draw Team\n- Offscreen Range (slider)\n- Glow Type: Default | Vis Only | Invis Only | Flat\n- Skeleton Thickness (slider)\n- Seer Type: Always | FOV | Distance | FOV & Distance\n- Seer Distance (slider)\n- Weapon Type: Text | Icon\n\n# Loot ESP\n- ESP\n- Enable\n- Draw Icon\n- Draw Name\n- Draw Lobe\n- Draw Glow: color\n- Draw Death Box\n- Draw Distance\n- Render Distance\n- Style\n- Text Background: color\n- Icon Size (slider)\n- Icon Type: Default | Game\n- Glow Type: Default | Outline | Filled\n- Loot Category\n- Weapon\n- Gear\n- Regen\n- Attachment\n- Ammo\n- Special\n- Smart Loot\n- Enable Smart Loot\n- Ammo (with customize ammo count)\n- Custom Loot (with customize all loot)\n\n# Misc\n- Misc\n- FOV Changer\n- Auto Grapple\n- Auto Wall Jump\n- Auto Super Glide\n- Auto Tap Strafe\n- Big Map Radar\n- General\n- Spectator Count\n- Spectator Window Transparency (slider)\n- Battle Mode Key\n- FOV Scale (slider)\n- FPS Limit (slider)\n- Show FPS</span></p>" },
  'apex-pro': { name: 'Krush Apex Cheat', image: '/storage/images/apex.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot\n- Aimbot\n- Enable\n- Ignore Knocked\n- Aim Only Visible\n- Draw FOV\n- FOV (slider)\n- Aim Bind\n- Smooth (slider)\n- Second Aim Bind\n- Second Smooth (slider)\n- Misc\n- Lock Target\n- Aim Bone: Head | Neck | Chest | Stomach | Nearest\n- RCS Pitch (slider)\n- RCS Yaw (slider)\n- Trigger\n- Enable\n- Trigger Bind\n- Trigger Delay (slider)\n- Trigger Distance (slider)\n\n# Player ESP\n- ESP\n- Render Distance (slider)\n- Draw Box (visible and invisible colors)\n- Draw Knocked: color\n- Draw Skeleton: color\n- Draw Glow (visible and invisible colors)\n- Draw Name: color\n- Draw Distance: color\n- Draw Health\n- Draw Shield\n- Draw Weapon: color\n- Draw Offscreen (visible and invisible colors)\n- Draw Info\n- Draw Seer\n- STYLE\n- Box Type: Default | Outline | Filled\n- Text Background: color\n- Draw Kills\n- Draw Rank\n- Draw Lvl\n- Draw Team\n- Offscreen Range (slider)\n- Glow Type: Default | Vis Only | Invis Only | Flat\n- Skeleton Thickness (slider)\n- Seer Type: Always | FOV | Distance | FOV & Distance\n- Seer Distance (slider)\n- Weapon Type: Text | Icon\n\n# Loot ESP\n- ESP\n- Enable\n- Draw Icon\n- Draw Name\n- Draw Lobe\n- Draw Glow: color\n- Draw Death Box\n- Draw Distance\n- Render Distance\n- Style\n- Text Background: color\n- Icon Size (slider)\n- Icon Type: Default | Game\n- Glow Type: Default | Outline | Filled\n- Loot Category\n- Weapon\n- Gear\n- Regen\n- Attachment\n- Ammo\n- Special\n- Smart Loot\n- Enable Smart Loot\n- Ammo (with customize ammo count)\n- Custom Loot (with customize all loot)\n\n# Misc\n- Misc\n- FOV Changer\n- Auto Grapple\n- Auto Wall Jump\n- Auto Super Glide\n- Auto Tap Strafe\n- Big Map Radar\n- General\n- Spectator Count\n- Spectator Window Transparency (slider)\n- Battle Mode Key\n- FOV Scale (slider)\n- FPS Limit (slider)\n- Show FPS</span></p>" },
  'ancient-apex-cheat': { name: 'Krush Apex Cheat', image: '/storage/images/apex.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot\n- Aimbot\n- Enable\n- Ignore Knocked\n- Aim Only Visible\n- Draw FOV\n- FOV (slider)\n- Aim Bind\n- Smooth (slider)\n- Second Aim Bind\n- Second Smooth (slider)\n- Misc\n- Lock Target\n- Aim Bone: Head | Neck | Chest | Stomach | Nearest\n- RCS Pitch (slider)\n- RCS Yaw (slider)\n- Trigger\n- Enable\n- Trigger Bind\n- Trigger Delay (slider)\n- Trigger Distance (slider)\n\n# Player ESP\n- ESP\n- Render Distance (slider)\n- Draw Box (visible and invisible colors)\n- Draw Knocked: color\n- Draw Skeleton: color\n- Draw Glow (visible and invisible colors)\n- Draw Name: color\n- Draw Distance: color\n- Draw Health\n- Draw Shield\n- Draw Weapon: color\n- Draw Offscreen (visible and invisible colors)\n- Draw Info\n- Draw Seer\n- STYLE\n- Box Type: Default | Outline | Filled\n- Text Background: color\n- Draw Kills\n- Draw Rank\n- Draw Lvl\n- Draw Team\n- Offscreen Range (slider)\n- Glow Type: Default | Vis Only | Invis Only | Flat\n- Skeleton Thickness (slider)\n- Seer Type: Always | FOV | Distance | FOV & Distance\n- Seer Distance (slider)\n- Weapon Type: Text | Icon\n\n# Loot ESP\n- ESP\n- Enable\n- Draw Icon\n- Draw Name\n- Draw Lobe\n- Draw Glow: color\n- Draw Death Box\n- Draw Distance\n- Render Distance\n- Style\n- Text Background: color\n- Icon Size (slider)\n- Icon Type: Default | Game\n- Glow Type: Default | Outline | Filled\n- Loot Category\n- Weapon\n- Gear\n- Regen\n- Attachment\n- Ammo\n- Special\n- Smart Loot\n- Enable Smart Loot\n- Ammo (with customize ammo count)\n- Custom Loot (with customize all loot)\n\n# Misc\n- Misc\n- FOV Changer\n- Auto Grapple\n- Auto Wall Jump\n- Auto Super Glide\n- Auto Tap Strafe\n- Big Map Radar\n- General\n- Spectator Count\n- Spectator Window Transparency (slider)\n- Battle Mode Key\n- FOV Scale (slider)\n- FPS Limit (slider)\n- Show FPS</span></p>" },
  'krush-apex-cheat': { name: 'Krush Apex Cheat', image: '/storage/images/apex.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot\n- Aimbot\n- Enable\n- Ignore Knocked\n- Aim Only Visible\n- Draw FOV\n- FOV (slider)\n- Aim Bind\n- Smooth (slider)\n- Second Aim Bind\n- Second Smooth (slider)\n- Misc\n- Lock Target\n- Aim Bone: Head | Neck | Chest | Stomach | Nearest\n- RCS Pitch (slider)\n- RCS Yaw (slider)\n- Trigger\n- Enable\n- Trigger Bind\n- Trigger Delay (slider)\n- Trigger Distance (slider)\n\n# Player ESP\n- ESP\n- Render Distance (slider)\n- Draw Box (visible and invisible colors)\n- Draw Knocked: color\n- Draw Skeleton: color\n- Draw Glow (visible and invisible colors)\n- Draw Name: color\n- Draw Distance: color\n- Draw Health\n- Draw Shield\n- Draw Weapon: color\n- Draw Offscreen (visible and invisible colors)\n- Draw Info\n- Draw Seer\n- STYLE\n- Box Type: Default | Outline | Filled\n- Text Background: color\n- Draw Kills\n- Draw Rank\n- Draw Lvl\n- Draw Team\n- Offscreen Range (slider)\n- Glow Type: Default | Vis Only | Invis Only | Flat\n- Skeleton Thickness (slider)\n- Seer Type: Always | FOV | Distance | FOV & Distance\n- Seer Distance (slider)\n- Weapon Type: Text | Icon\n\n# Loot ESP\n- ESP\n- Enable\n- Draw Icon\n- Draw Name\n- Draw Lobe\n- Draw Glow: color\n- Draw Death Box\n- Draw Distance\n- Render Distance\n- Style\n- Text Background: color\n- Icon Size (slider)\n- Icon Type: Default | Game\n- Glow Type: Default | Outline | Filled\n- Loot Category\n- Weapon\n- Gear\n- Regen\n- Attachment\n- Ammo\n- Special\n- Smart Loot\n- Enable Smart Loot\n- Ammo (with customize ammo count)\n- Custom Loot (with customize all loot)\n\n# Misc\n- Misc\n- FOV Changer\n- Auto Grapple\n- Auto Wall Jump\n- Auto Super Glide\n- Auto Tap Strafe\n- Big Map Radar\n- General\n- Spectator Count\n- Spectator Window Transparency (slider)\n- Battle Mode Key\n- FOV Scale (slider)\n- FPS Limit (slider)\n- Show FPS</span></p>" },
  'arc': { name: 'Krush Arc Cheat', image: '/storage/images/arc.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Players\n- Enabled\n- Skeleton\n- OOF Arrows\n- Box (2D / 3D)\n- Shield Bar\n- Health Bar\n- Head Circle\n- View Direction\n- Username\n- Squad Name\n- Holding Weapon Name\n- Visible Check (Raycast)\n- Dead Bodies\n- Knocked Filter\n- Distance\n- Max Distance\n\n# Arcs\n- Enabled\n- Name\n- Threat\n- Icon\n- Broken Filter (Corpse)\n- Custom Selection Of Each ARC\n- Distance\n- Max Distance\n\n# Extractions\n- Enabled\n- State (Ready, Closed...)\n- Icon\n- Distance\n- Max Distance\n\n# Containers\n- Enabled\n- Name\n- Icon\n- Hide Already Looted\n- Custom Selection Of Each Container\n- Distance\n- Max Distance\n\n# Items\n- Enabled\n- Name\n- Quantity\n- Rarity\n- Distance\n- Max Distance\n- Weight\n- Price\n- Icon\n\n# Natures\n- Enabled\n- Name\n- Icon\n- Custom Selection Of Natures\n- Distance\n- Max Distance\n\n# Exploits\n- Super Flashlight\n- Flashlight Color Changer\n- FOV Changer\n- Zoom (Hotkey)\n- Disable Enemy Flashlight (Client)\n- Long Distance Revive\n- Long Distance Consumable\n\n# Misc\n- CombatMode (Disable World ESP)\n- All Colors Customizable\n- OOF Arrows Selection\n- OOF Arrows Customization\n- Config Saver\n- Config Load\n- Config Reset</span></p>" },
  'arc-raiders': { name: 'Krush Arc Cheat', image: '/storage/images/arc.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Players\n- Enabled\n- Skeleton\n- OOF Arrows\n- Box (2D / 3D)\n- Shield Bar\n- Health Bar\n- Head Circle\n- View Direction\n- Username\n- Squad Name\n- Holding Weapon Name\n- Visible Check (Raycast)\n- Dead Bodies\n- Knocked Filter\n- Distance\n- Max Distance\n\n# Arcs\n- Enabled\n- Name\n- Threat\n- Icon\n- Broken Filter (Corpse)\n- Custom Selection Of Each ARC\n- Distance\n- Max Distance\n\n# Extractions\n- Enabled\n- State (Ready, Closed...)\n- Icon\n- Distance\n- Max Distance\n\n# Containers\n- Enabled\n- Name\n- Icon\n- Hide Already Looted\n- Custom Selection Of Each Container\n- Distance\n- Max Distance\n\n# Items\n- Enabled\n- Name\n- Quantity\n- Rarity\n- Distance\n- Max Distance\n- Weight\n- Price\n- Icon\n\n# Natures\n- Enabled\n- Name\n- Icon\n- Custom Selection Of Natures\n- Distance\n- Max Distance\n\n# Exploits\n- Super Flashlight\n- Flashlight Color Changer\n- FOV Changer\n- Zoom (Hotkey)\n- Disable Enemy Flashlight (Client)\n- Long Distance Revive\n- Long Distance Consumable\n\n# Misc\n- CombatMode (Disable World ESP)\n- All Colors Customizable\n- OOF Arrows Selection\n- OOF Arrows Customization\n- Config Saver\n- Config Load\n- Config Reset</span></p>" },
  'arc-raiders-elite': { name: 'Krush Arc Cheat', image: '/storage/images/arc.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Players\n- Enabled\n- Skeleton\n- OOF Arrows\n- Box (2D / 3D)\n- Shield Bar\n- Health Bar\n- Head Circle\n- View Direction\n- Username\n- Squad Name\n- Holding Weapon Name\n- Visible Check (Raycast)\n- Dead Bodies\n- Knocked Filter\n- Distance\n- Max Distance\n\n# Arcs\n- Enabled\n- Name\n- Threat\n- Icon\n- Broken Filter (Corpse)\n- Custom Selection Of Each ARC\n- Distance\n- Max Distance\n\n# Extractions\n- Enabled\n- State (Ready, Closed...)\n- Icon\n- Distance\n- Max Distance\n\n# Containers\n- Enabled\n- Name\n- Icon\n- Hide Already Looted\n- Custom Selection Of Each Container\n- Distance\n- Max Distance\n\n# Items\n- Enabled\n- Name\n- Quantity\n- Rarity\n- Distance\n- Max Distance\n- Weight\n- Price\n- Icon\n\n# Natures\n- Enabled\n- Name\n- Icon\n- Custom Selection Of Natures\n- Distance\n- Max Distance\n\n# Exploits\n- Super Flashlight\n- Flashlight Color Changer\n- FOV Changer\n- Zoom (Hotkey)\n- Disable Enemy Flashlight (Client)\n- Long Distance Revive\n- Long Distance Consumable\n\n# Misc\n- CombatMode (Disable World ESP)\n- All Colors Customizable\n- OOF Arrows Selection\n- OOF Arrows Customization\n- Config Saver\n- Config Load\n- Config Reset</span></p>" },
  'krush-arc-cheat': { name: 'Krush Arc Cheat', image: '/storage/images/arc.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Players\n- Enabled\n- Skeleton\n- OOF Arrows\n- Box (2D / 3D)\n- Shield Bar\n- Health Bar\n- Head Circle\n- View Direction\n- Username\n- Squad Name\n- Holding Weapon Name\n- Visible Check (Raycast)\n- Dead Bodies\n- Knocked Filter\n- Distance\n- Max Distance\n\n# Arcs\n- Enabled\n- Name\n- Threat\n- Icon\n- Broken Filter (Corpse)\n- Custom Selection Of Each ARC\n- Distance\n- Max Distance\n\n# Extractions\n- Enabled\n- State (Ready, Closed...)\n- Icon\n- Distance\n- Max Distance\n\n# Containers\n- Enabled\n- Name\n- Icon\n- Hide Already Looted\n- Custom Selection Of Each Container\n- Distance\n- Max Distance\n\n# Items\n- Enabled\n- Name\n- Quantity\n- Rarity\n- Distance\n- Max Distance\n- Weight\n- Price\n- Icon\n\n# Natures\n- Enabled\n- Name\n- Icon\n- Custom Selection Of Natures\n- Distance\n- Max Distance\n\n# Exploits\n- Super Flashlight\n- Flashlight Color Changer\n- FOV Changer\n- Zoom (Hotkey)\n- Disable Enemy Flashlight (Client)\n- Long Distance Revive\n- Long Distance Consumable\n\n# Misc\n- CombatMode (Disable World ESP)\n- All Colors Customizable\n- OOF Arrows Selection\n- OOF Arrows Customization\n- Config Saver\n- Config Load\n- Config Reset</span></p>" },
  'fortnite': { name: 'DC Fortnite Cheat', image: '/storage/images/fortnite.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot:\n- Aimbot \n- Aimbot Prediction\n- Aimbot Hitbox (Head, Neck, Chest, Pelvis)\n- Aimbot Smoothing Value\n- Aimbot FOV\n- Aimbot Max Distance\n- Different Weapon Configs\n- Triggerbot\n- Triggerbot Hitbox (Head, Neck, Chest, Pelvis)\n- Triggerbot Delay\n- Other Aimbot \n- Draw FOV\n- Draw Filled FOV\n- Aimbot Visible Check\n- Aimbot Ignore Knocked\n- Aimbot Ignore Team\n- Aimbot Deadzone\n- Aimbot Keybind\n- Triggerbot Keybind\n- Battlemode Toggle\n\n# Visuals:\n- Box (Full, Corner)\n- Skeleton (Sharp, Bezier)\n- Name\n- Team ID\n- Distance\n- Held Weapon\n- Kills\n- Show Team\n- Show NPC\n- Filled Box\n- Platform\n- Snaplines (Center, Top, Bottom)\n\n# Item ESP:\n- Item ESP \n- Item Configs\n- Show Item\n- Show Name\n- Show Count\n- Show Rarity\n- Show Distance\n- Item Max Distance\n\n# Settings:\n- Config System\n- Overlay VSync\n- ESP Font (Tahoma, Pixel, FN, Matcha)\n- ESP Font Size\n- ESP Outline (Drop Shadow, Full Outline, Half Outline)\n- Full Controller Support\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# Other Visuals:\n- Seperate Team ID Colors\n- Radar\n- Radar Team Visualizer\n- Radar Automatic Distance Scaling\n- Radar Background Alpha\n- Radar Orientation Lock\n- Radar Player Size\n- Radar Radius\n- Radar Distance\n- Radar Enemy Color\n- Radar Team Color\n- Target Line\n\n# General Information:\n- Fully external\n- Streamproof\n- NO SPOOFER INCLUDED</span></p>" },
  'fortnite-private': { name: 'DC Fortnite Cheat', image: '/storage/images/fortnite.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot:\n- Aimbot \n- Aimbot Prediction\n- Aimbot Hitbox (Head, Neck, Chest, Pelvis)\n- Aimbot Smoothing Value\n- Aimbot FOV\n- Aimbot Max Distance\n- Different Weapon Configs\n- Triggerbot\n- Triggerbot Hitbox (Head, Neck, Chest, Pelvis)\n- Triggerbot Delay\n- Other Aimbot \n- Draw FOV\n- Draw Filled FOV\n- Aimbot Visible Check\n- Aimbot Ignore Knocked\n- Aimbot Ignore Team\n- Aimbot Deadzone\n- Aimbot Keybind\n- Triggerbot Keybind\n- Battlemode Toggle\n\n# Visuals:\n- Box (Full, Corner)\n- Skeleton (Sharp, Bezier)\n- Name\n- Team ID\n- Distance\n- Held Weapon\n- Kills\n- Show Team\n- Show NPC\n- Filled Box\n- Platform\n- Snaplines (Center, Top, Bottom)\n\n# Item ESP:\n- Item ESP \n- Item Configs\n- Show Item\n- Show Name\n- Show Count\n- Show Rarity\n- Show Distance\n- Item Max Distance\n\n# Settings:\n- Config System\n- Overlay VSync\n- ESP Font (Tahoma, Pixel, FN, Matcha)\n- ESP Font Size\n- ESP Outline (Drop Shadow, Full Outline, Half Outline)\n- Full Controller Support\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# Other Visuals:\n- Seperate Team ID Colors\n- Radar\n- Radar Team Visualizer\n- Radar Automatic Distance Scaling\n- Radar Background Alpha\n- Radar Orientation Lock\n- Radar Player Size\n- Radar Radius\n- Radar Distance\n- Radar Enemy Color\n- Radar Team Color\n- Target Line\n\n# General Information:\n- Fully external\n- Streamproof\n- NO SPOOFER INCLUDED</span></p>" },
  'disconnect-fortnite-cheat': { name: 'DC Fortnite Cheat', image: '/storage/images/fortnite.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot:\n- Aimbot \n- Aimbot Prediction\n- Aimbot Hitbox (Head, Neck, Chest, Pelvis)\n- Aimbot Smoothing Value\n- Aimbot FOV\n- Aimbot Max Distance\n- Different Weapon Configs\n- Triggerbot\n- Triggerbot Hitbox (Head, Neck, Chest, Pelvis)\n- Triggerbot Delay\n- Other Aimbot \n- Draw FOV\n- Draw Filled FOV\n- Aimbot Visible Check\n- Aimbot Ignore Knocked\n- Aimbot Ignore Team\n- Aimbot Deadzone\n- Aimbot Keybind\n- Triggerbot Keybind\n- Battlemode Toggle\n\n# Visuals:\n- Box (Full, Corner)\n- Skeleton (Sharp, Bezier)\n- Name\n- Team ID\n- Distance\n- Held Weapon\n- Kills\n- Show Team\n- Show NPC\n- Filled Box\n- Platform\n- Snaplines (Center, Top, Bottom)\n\n# Item ESP:\n- Item ESP \n- Item Configs\n- Show Item\n- Show Name\n- Show Count\n- Show Rarity\n- Show Distance\n- Item Max Distance\n\n# Settings:\n- Config System\n- Overlay VSync\n- ESP Font (Tahoma, Pixel, FN, Matcha)\n- ESP Font Size\n- ESP Outline (Drop Shadow, Full Outline, Half Outline)\n- Full Controller Support\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# Other Visuals:\n- Seperate Team ID Colors\n- Radar\n- Radar Team Visualizer\n- Radar Automatic Distance Scaling\n- Radar Background Alpha\n- Radar Orientation Lock\n- Radar Player Size\n- Radar Radius\n- Radar Distance\n- Radar Enemy Color\n- Radar Team Color\n- Target Line\n\n# General Information:\n- Fully external\n- Streamproof\n- NO SPOOFER INCLUDED</span></p>" },
  'dc-fortnite-cheat': { name: 'DC Fortnite Cheat', image: '/storage/images/fortnite.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Aimbot:\n- Aimbot \n- Aimbot Prediction\n- Aimbot Hitbox (Head, Neck, Chest, Pelvis)\n- Aimbot Smoothing Value\n- Aimbot FOV\n- Aimbot Max Distance\n- Different Weapon Configs\n- Triggerbot\n- Triggerbot Hitbox (Head, Neck, Chest, Pelvis)\n- Triggerbot Delay\n- Other Aimbot \n- Draw FOV\n- Draw Filled FOV\n- Aimbot Visible Check\n- Aimbot Ignore Knocked\n- Aimbot Ignore Team\n- Aimbot Deadzone\n- Aimbot Keybind\n- Triggerbot Keybind\n- Battlemode Toggle\n\n# Visuals:\n- Box (Full, Corner)\n- Skeleton (Sharp, Bezier)\n- Name\n- Team ID\n- Distance\n- Held Weapon\n- Kills\n- Show Team\n- Show NPC\n- Filled Box\n- Platform\n- Snaplines (Center, Top, Bottom)\n\n# Item ESP:\n- Item ESP \n- Item Configs\n- Show Item\n- Show Name\n- Show Count\n- Show Rarity\n- Show Distance\n- Item Max Distance\n\n# Settings:\n- Config System\n- Overlay VSync\n- ESP Font (Tahoma, Pixel, FN, Matcha)\n- ESP Font Size\n- ESP Outline (Drop Shadow, Full Outline, Half Outline)\n- Full Controller Support\n\n# Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n\n# Other Visuals:\n- Seperate Team ID Colors\n- Radar\n- Radar Team Visualizer\n- Radar Automatic Distance Scaling\n- Radar Background Alpha\n- Radar Orientation Lock\n- Radar Player Size\n- Radar Radius\n- Radar Distance\n- Radar Enemy Color\n- Radar Team Color\n- Target Line\n\n# General Information:\n- Fully external\n- Streamproof\n- NO SPOOFER INCLUDED</span></p>" },
  'delta': { name: 'Ancient Delta Cheat', image: '/storage/images/delta.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Visuals\n  Visuals\n    Render Distance (slider)\n    Draw Box (visible and invisible colors)\n    Draw Skeleton (visible and invisible colors)\n    Skeleton Thickness (slider)\n    Draw Health\n    Draw Line\n    Draw Name: color\n    Draw Distance: color\n    Draw Team\n    Draw Kills\n  Radar\n    Enable Radar\n    Radar Size (slider)\n    Draw Player: color\n\n# Settings\n  Settings\n    Save Config\n    Load Config\n    Delete Config\n    Share Config\n    Show FPS\n    FPS Locker (slider)\n    Language: English | Chinese\n\n# Requirements\n  Requirements\n    INTEL + AMD CPU\n    Windows 10 - 11 | 1909 - 25H2\n    SVM [AMD] / VT-X [INTEL] (BIOS) Enabled\n    16GB RAM (or more)\n    Hyper-V Disabled for AMD CPU Only\n    Hyper-V Enabled for INTEL CPU Only\n    Firmware in UEFI Mode Only for INTEL CPU\n    System Must Use GPT Format Disk for INTEL CPU\n    Secure Boot Disabled</span></p>" },
  'delta-force': { name: 'Ancient Delta Cheat', image: '/storage/images/delta.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Visuals\n  Visuals\n    Render Distance (slider)\n    Draw Box (visible and invisible colors)\n    Draw Skeleton (visible and invisible colors)\n    Skeleton Thickness (slider)\n    Draw Health\n    Draw Line\n    Draw Name: color\n    Draw Distance: color\n    Draw Team\n    Draw Kills\n  Radar\n    Enable Radar\n    Radar Size (slider)\n    Draw Player: color\n\n# Settings\n  Settings\n    Save Config\n    Load Config\n    Delete Config\n    Share Config\n    Show FPS\n    FPS Locker (slider)\n    Language: English | Chinese\n\n# Requirements\n  Requirements\n    INTEL + AMD CPU\n    Windows 10 - 11 | 1909 - 25H2\n    SVM [AMD] / VT-X [INTEL] (BIOS) Enabled\n    16GB RAM (or more)\n    Hyper-V Disabled for AMD CPU Only\n    Hyper-V Enabled for INTEL CPU Only\n    Firmware in UEFI Mode Only for INTEL CPU\n    System Must Use GPT Format Disk for INTEL CPU\n    Secure Boot Disabled</span></p>" },
  'delta-force-private': { name: 'Ancient Delta Cheat', image: '/storage/images/delta.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Visuals\n  Visuals\n    Render Distance (slider)\n    Draw Box (visible and invisible colors)\n    Draw Skeleton (visible and invisible colors)\n    Skeleton Thickness (slider)\n    Draw Health\n    Draw Line\n    Draw Name: color\n    Draw Distance: color\n    Draw Team\n    Draw Kills\n  Radar\n    Enable Radar\n    Radar Size (slider)\n    Draw Player: color\n\n# Settings\n  Settings\n    Save Config\n    Load Config\n    Delete Config\n    Share Config\n    Show FPS\n    FPS Locker (slider)\n    Language: English | Chinese\n\n# Requirements\n  Requirements\n    INTEL + AMD CPU\n    Windows 10 - 11 | 1909 - 25H2\n    SVM [AMD] / VT-X [INTEL] (BIOS) Enabled\n    16GB RAM (or more)\n    Hyper-V Disabled for AMD CPU Only\n    Hyper-V Enabled for INTEL CPU Only\n    Firmware in UEFI Mode Only for INTEL CPU\n    System Must Use GPT Format Disk for INTEL CPU\n    Secure Boot Disabled</span></p>" },
  'ancient-delta-cheat': { name: 'Ancient Delta Cheat', image: '/storage/images/delta.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Visuals\n  Visuals\n    Render Distance (slider)\n    Draw Box (visible and invisible colors)\n    Draw Skeleton (visible and invisible colors)\n    Skeleton Thickness (slider)\n    Draw Health\n    Draw Line\n    Draw Name: color\n    Draw Distance: color\n    Draw Team\n    Draw Kills\n  Radar\n    Enable Radar\n    Radar Size (slider)\n    Draw Player: color\n\n# Settings\n  Settings\n    Save Config\n    Load Config\n    Delete Config\n    Share Config\n    Show FPS\n    FPS Locker (slider)\n    Language: English | Chinese\n\n# Requirements\n  Requirements\n    INTEL + AMD CPU\n    Windows 10 - 11 | 1909 - 25H2\n    SVM [AMD] / VT-X [INTEL] (BIOS) Enabled\n    16GB RAM (or more)\n    Hyper-V Disabled for AMD CPU Only\n    Hyper-V Enabled for INTEL CPU Only\n    Firmware in UEFI Mode Only for INTEL CPU\n    System Must Use GPT Format Disk for INTEL CPU\n    Secure Boot Disabled</span></p>" },
  'spoofer': { name: 'Verse HWID Spoofer', image: '/storage/images/woofer.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n- USB 8GB\n- Windows Re-install\n- Flash BIOS\n\n# Supported Games:\n- League of Legends\n- Fortnite (Tournaments included) \n- Apex Legends\n- Rust\n- Call of Duty\n- Rainbow Six Seige\n- Overwatch 2\n- Dark and Darker\n- & MORE\n\n# General Information:\n- Works for all popular games\n- TPM Bypass NOT included\n- Fortnite Tourney Support/Cleaners\n\n# Supported Motherboards:\n*TESTED AND WORKING ON MOTHERBOARDS*\n- ASUS\n- Gigabyte\n- Colorful\n- Biostar\n- MSI\n- Evga\n- Asrock\n- Microstar\n- Aorus\n- HP\n-> For Lenovo/Acer/Dell please open ticket first before purchase!</span></p>" },
  'woofer': { name: 'Verse HWID Spoofer', image: '/storage/images/woofer.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n- USB 8GB\n- Windows Re-install\n- Flash BIOS\n\n# Supported Games:\n- League of Legends\n- Fortnite (Tournaments included) \n- Apex Legends\n- Rust\n- Call of Duty\n- Rainbow Six Seige\n- Overwatch 2\n- Dark and Darker\n- & MORE\n\n# General Information:\n- Works for all popular games\n- TPM Bypass NOT included\n- Fortnite Tourney Support/Cleaners\n\n# Supported Motherboards:\n*TESTED AND WORKING ON MOTHERBOARDS*\n- ASUS\n- Gigabyte\n- Colorful\n- Biostar\n- MSI\n- Evga\n- Asrock\n- Microstar\n- Aorus\n- HP\n-> For Lenovo/Acer/Dell please open ticket first before purchase!</span></p>" },
  'hwid-spoofer': { name: 'Verse HWID Spoofer', image: '/storage/images/woofer.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n- USB 8GB\n- Windows Re-install\n- Flash BIOS\n\n# Supported Games:\n- League of Legends\n- Fortnite (Tournaments included) \n- Apex Legends\n- Rust\n- Call of Duty\n- Rainbow Six Seige\n- Overwatch 2\n- Dark and Darker\n- & MORE\n\n# General Information:\n- Works for all popular games\n- TPM Bypass NOT included\n- Fortnite Tourney Support/Cleaners\n\n# Supported Motherboards:\n*TESTED AND WORKING ON MOTHERBOARDS*\n- ASUS\n- Gigabyte\n- Colorful\n- Biostar\n- MSI\n- Evga\n- Asrock\n- Microstar\n- Aorus\n- HP\n-> For Lenovo/Acer/Dell please open ticket first before purchase!</span></p>" },
  'verse-hwid-spoofer': { name: 'Verse HWID Spoofer', image: '/storage/images/woofer.png', desc: "<p class=\"e-paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\"># Requirements:\n- CPU: Intel / AMD\n- OS: Windows 10 / 11\n- USB 8GB\n- Windows Re-install\n- Flash BIOS\n\n# Supported Games:\n- League of Legends\n- Fortnite (Tournaments included) \n- Apex Legends\n- Rust\n- Call of Duty\n- Rainbow Six Seige\n- Overwatch 2\n- Dark and Darker\n- & MORE\n\n# General Information:\n- Works for all popular games\n- TPM Bypass NOT included\n- Fortnite Tourney Support/Cleaners\n\n# Supported Motherboards:\n*TESTED AND WORKING ON MOTHERBOARDS*\n- ASUS\n- Gigabyte\n- Colorful\n- Biostar\n- MSI\n- Evga\n- Asrock\n- Microstar\n- Aorus\n- HP\n-> For Lenovo/Acer/Dell please open ticket first before purchase!</span></p>" }
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
            const localKey = (slug || liveProd.path || '').toLowerCase();
      let assetInfo = PRODUCT_ASSETS[localKey] || PRODUCT_ASSETS[sellauthPath];
      if (!assetInfo && liveProd.aliases) {
        for (const al of liveProd.aliases) {
          if (PRODUCT_ASSETS[al]) { assetInfo = PRODUCT_ASSETS[al]; break; }
        }
      }
      const localAsset = {
        image: prodImages[0],
        images: prodImages,
        desc: (assetInfo && assetInfo.desc) ? assetInfo.desc : (liveProd.description || '')
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

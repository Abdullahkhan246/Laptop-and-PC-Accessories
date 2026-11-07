// AAA Hardware - local product catalogue
// This is a frontend-only assignment project, so products live here in a
// local JS file instead of a database. Product and category photos use
// distinct Unsplash URLs.

const unsplashPhoto = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=900&q=80`
const themeGradient = 'linear-gradient(135deg,#171717,#eab308)'

export const categoryImages = {
  Laptops: unsplashPhoto('photo-1496181133206-80ce9b88a853'),
  Monitors: unsplashPhoto('photo-1527443224154-c4a3942d3acf'),
  GPU: unsplashPhoto('photo-1591488320449-011701bb6704'),
  SSD: unsplashPhoto('photo-1597872200969-2b65d56bd16b'),
  RAM: unsplashPhoto('photo-1562976540-1502c2145186'),
  'Laptop Accessories': unsplashPhoto('photo-1588872657578-7efd1f1555ed'),
  'PC Accessories': unsplashPhoto('photo-1608043152269-423dbba4e7e1'),
}

export const CATEGORIES = [
  { name: 'Laptops', image: categoryImages.Laptops, gradient: themeGradient, tagline: 'Work, study & gaming laptops' },
  { name: 'Monitors', image: categoryImages.Monitors, gradient: themeGradient, tagline: 'Crisp displays for every desk' },
  { name: 'GPU', image: categoryImages.GPU, gradient: themeGradient, tagline: 'Graphic cards for smooth play' },
  { name: 'SSD', image: categoryImages.SSD, gradient: themeGradient, tagline: 'Fast storage, instant boot' },
  { name: 'RAM', image: categoryImages.RAM, gradient: themeGradient, tagline: 'Memory upgrades that show' },
  { name: 'Laptop Accessories', image: categoryImages['Laptop Accessories'], gradient: themeGradient, tagline: 'Bags, stands, chargers & more' },
  { name: 'PC Accessories', image: categoryImages['PC Accessories'], gradient: themeGradient, tagline: 'Cases, chargers & power banks' },
]

const productCatalogue = [
  // ---------------- Laptops (4) ----------------
  {
    id: 1, name: 'HP Victus 15 Gaming Laptop - Ryzen 5, RTX 4050, 16GB, 512GB SSD', brand: 'HP',
    category: 'Laptops', price: 87950, oldPrice: 94999, badge: '7% Off', rating: 4.7,
    image: unsplashPhoto('photo-1517336714731-489689fd1ca8'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['AMD Ryzen 5 processor for gaming and study', 'NVIDIA RTX 4050 graphics, 144Hz display', '16GB RAM with 512GB fast SSD storage'],
    specs: { Brand: 'HP', Model: 'Victus 15', Processor: 'AMD Ryzen 5 8645HS', RAM: '16GB DDR5', Storage: '512GB NVMe SSD', Display: '15.6 inch FHD, 144Hz', Graphics: 'NVIDIA RTX 4050 6GB', 'Operating System': 'Windows 11', Warranty: '1 Year Local' },
  },
  {
    id: 2, name: 'Dell Inspiron 14 Laptop - Core i5, 16GB, 512GB SSD', brand: 'Dell',
    category: 'Laptops', price: 73490, oldPrice: null, badge: 'New', rating: 4.6,
    image: unsplashPhoto('photo-1498050108023-c5249f4df085'),
    inStock: true, isFeatured: true, isNew: true,
    highlights: ['Intel Core i5 13th Gen performance', 'Slim aluminium body, only 1.5 kg', '16GB RAM and 512GB SSD for daily work'],
    specs: { Brand: 'Dell', Model: 'Inspiron 14 5430', Processor: 'Intel Core i5-1335U', RAM: '16GB LPDDR5', Storage: '512GB NVMe SSD', Display: '14 inch 2.2K IPS', Graphics: 'Intel Iris Xe', 'Operating System': 'Windows 11', Warranty: '1 Year Local' },
  },
  {
    id: 3, name: 'Lenovo IdeaPad Slim 3 - Core i3, 8GB, 256GB SSD', brand: 'Lenovo',
    category: 'Laptops', price: 58999, oldPrice: 64999, badge: '9% Off', rating: 4.4,
    image: unsplashPhoto('photo-1516321318423-f06f85e504b3'),
    inStock: true, isFeatured: false, isNew: false,
    highlights: ['Best value laptop for students', 'Lightweight design for university use', 'Fast charging battery support'],
    specs: { Brand: 'Lenovo', Model: 'IdeaPad Slim 3', Processor: 'Intel Core i3-1315U', RAM: '8GB DDR4', Storage: '256GB NVMe SSD', Display: '15.6 inch FHD', Graphics: 'Intel UHD', 'Operating System': 'Windows 11', Warranty: '1 Year Local' },
  },
  {
    id: 4, name: 'Apple MacBook Air 13 - M2 Chip, 8GB, 256GB SSD', brand: 'Apple',
    category: 'Laptops', price: 96999, oldPrice: null, badge: 'Popular', rating: 4.9,
    image: unsplashPhoto('photo-1525547719571-a2d4ac8945e2'),
    inStock: false, isFeatured: true, isNew: false,
    highlights: ['Apple M2 chip, silent fanless design', 'Up to 18 hours battery life', 'Retina display with rich colours'],
    specs: { Brand: 'Apple', Model: 'MacBook Air 13 (M2)', Processor: 'Apple M2, 8-core CPU', RAM: '8GB unified memory', Storage: '256GB SSD', Display: '13.6 inch Liquid Retina', Graphics: 'Apple 8-core GPU', 'Operating System': 'macOS', Warranty: '1 Year International' },
  },

  // ---------------- Monitors (4) ----------------
  {
    id: 5, name: 'Samsung Odyssey G5 27 inch QHD Gaming Monitor - 165Hz', brand: 'Samsung',
    category: 'Monitors', price: 72999, oldPrice: 84999, badge: '14% Off', rating: 4.8,
    image: unsplashPhoto('photo-1547082299-de196ea013d6'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['Curved QHD panel for deep immersion', '165Hz refresh with 1ms response', 'HDR10 for richer contrast'],
    specs: { Brand: 'Samsung', Model: 'Odyssey G5 27', Size: '27 inch, Curved', Resolution: '2560 x 1440 (QHD)', 'Refresh Rate': '165Hz', Panel: 'VA, HDR10', Ports: 'HDMI, DisplayPort', Warranty: '2 Years Local' },
  },
  {
    id: 6, name: 'LG UltraGear 24 inch FHD Gaming Monitor - 180Hz', brand: 'LG',
    category: 'Monitors', price: 48950, oldPrice: null, badge: 'New', rating: 4.6,
    image: unsplashPhoto('photo-1593640408182-31c70c8268f5'),
    inStock: true, isFeatured: false, isNew: true,
    highlights: ['180Hz refresh for competitive play', 'Fast IPS panel, wide viewing angles', 'Thin bezels on three sides'],
    specs: { Brand: 'LG', Model: 'UltraGear 24GS60F', Size: '24 inch, Flat', Resolution: '1920 x 1080 (FHD)', 'Refresh Rate': '180Hz', Panel: 'IPS, 1ms', Ports: 'HDMI, DisplayPort', Warranty: '2 Years Local' },
  },
  {
    id: 7, name: 'Dell 24 inch FHD Office Monitor - IPS, Height Adjustable', brand: 'Dell',
    category: 'Monitors', price: 35999, oldPrice: 39999, badge: '10% Off', rating: 4.5,
    image: unsplashPhoto('photo-1519389950473-47ba0277781c'),
    inStock: true, isFeatured: false, isNew: false,
    highlights: ['ComfortView low blue light for office hours', 'Height and tilt adjustable stand', 'Clean cable management design'],
    specs: { Brand: 'Dell', Model: 'P2422H Series', Size: '24 inch, Flat', Resolution: '1920 x 1080 (FHD)', 'Refresh Rate': '60Hz', Panel: 'IPS', Ports: 'HDMI, VGA, DisplayPort', Warranty: '3 Years Local' },
  },
  {
    id: 8, name: 'ASUS TUF Gaming 32 inch QHD Monitor - 170Hz', brand: 'ASUS',
    category: 'Monitors', price: 89999, oldPrice: null, badge: 'New', rating: 4.7,
    image: unsplashPhoto('photo-1593508512255-86ab42a8e620'),
    inStock: true, isFeatured: true, isNew: true,
    highlights: ['Big 32 inch QHD gaming screen', '170Hz refresh, HDR support', 'Built-in stereo speakers'],
    specs: { Brand: 'ASUS', Model: 'TUF Gaming VG32', Size: '32 inch, Curved', Resolution: '2560 x 1440 (QHD)', 'Refresh Rate': '170Hz', Panel: 'VA, HDR', Ports: '2x HDMI, DisplayPort', Warranty: '2 Years Local' },
  },

  // ---------------- GPU (3) ----------------
  {
    id: 9, name: 'MSI GeForce RTX 4060 Ventus 8GB Graphic Card', brand: 'MSI',
    category: 'GPU', price: 94950, oldPrice: 99999, badge: '5% Off', rating: 4.8,
    image: unsplashPhoto('photo-1587202372775-e229f172b9d7'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['Smooth 1080p and 1440p gaming', 'DLSS 3 frame generation support', 'Dual fan cooling, quiet under load'],
    specs: { Brand: 'MSI', Model: 'RTX 4060 Ventus 2X', Memory: '8GB GDDR6', 'Core Clock': 'Up to 2490 MHz Boost', Interface: 'PCIe 4.0 x8', Outputs: 'HDMI, 3x DisplayPort', 'Recommended Wattage': '550W', Warranty: '2 Years Local' },
  },
  {
    id: 10, name: 'Gigabyte Radeon RX 7600 Gaming OC 8GB Graphic Card', brand: 'Gigabyte',
    category: 'GPU', price: 87999, oldPrice: null, badge: 'Popular', rating: 4.6,
    image: unsplashPhoto('photo-1587202372634-32705e3bf49c'),
    inStock: true, isFeatured: false, isNew: false,
    highlights: ['Great value for high-refresh 1080p', 'Triple fan Windforce cooling', 'Metal backplate for strength'],
    specs: { Brand: 'Gigabyte', Model: 'RX 7600 Gaming OC', Memory: '8GB GDDR6', 'Core Clock': 'Up to 2755 MHz Boost', Interface: 'PCIe 4.0 x8', Outputs: '2x HDMI, 2x DisplayPort', 'Recommended Wattage': '550W', Warranty: '2 Years Local' },
  },
  {
    id: 11, name: 'ASUS Dual GeForce RTX 4070 Super 12GB Graphic Card', brand: 'ASUS',
    category: 'GPU', price: 89999, oldPrice: 97999, badge: '8% Off', rating: 4.9,
    image: unsplashPhoto('photo-1591799264318-7e6ef8ddb7ea'),
    inStock: false, isFeatured: true, isNew: true,
    highlights: ['High-end 1440p and 4K gaming', '12GB GDDR6X fast memory', 'Compact dual fan design fits most cases'],
    specs: { Brand: 'ASUS', Model: 'Dual RTX 4070 Super', Memory: '12GB GDDR6X', 'Core Clock': 'Up to 2475 MHz Boost', Interface: 'PCIe 4.0 x16', Outputs: 'HDMI, 3x DisplayPort', 'Recommended Wattage': '750W', Warranty: '2 Years Local' },
  },

  // ---------------- SSD (3) ----------------
  {
    id: 12, name: 'Samsung 970 EVO Plus 1TB NVMe SSD', brand: 'Samsung',
    category: 'SSD', price: 23999, oldPrice: 28999, badge: '17% Off', rating: 4.9,
    image: unsplashPhoto('photo-1541029071515-84cc54f84dc5'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['Read speeds up to 3,500 MB/s', 'Reliable Samsung V-NAND quality', 'Perfect boot drive upgrade'],
    specs: { Brand: 'Samsung', Model: '970 EVO Plus', Capacity: '1TB', Type: 'NVMe M.2 PCIe 3.0', 'Read Speed': 'Up to 3,500 MB/s', 'Write Speed': 'Up to 3,300 MB/s', Form: 'M.2 2280', Warranty: '3 Years Local' },
  },
  {
    id: 13, name: 'WD Black SN770 500GB NVMe Gen4 SSD', brand: 'WD',
    category: 'SSD', price: 15499, oldPrice: null, badge: 'New', rating: 4.7,
    image: unsplashPhoto('photo-1520170350707-b2da59970118'),
    inStock: true, isFeatured: false, isNew: true,
    highlights: ['Gen4 speeds up to 5,000 MB/s', 'Built for gaming load times', 'Low power, stays cool'],
    specs: { Brand: 'WD', Model: 'Black SN770', Capacity: '500GB', Type: 'NVMe M.2 PCIe 4.0', 'Read Speed': 'Up to 5,000 MB/s', 'Write Speed': 'Up to 4,000 MB/s', Form: 'M.2 2280', Warranty: '3 Years Local' },
  },
  {
    id: 14, name: 'Kingston A400 480GB SATA SSD', brand: 'Kingston',
    category: 'SSD', price: 8999, oldPrice: 10999, badge: '18% Off', rating: 4.5,
    image: unsplashPhoto('photo-1518770660439-4636190af475'),
    inStock: true, isFeatured: false, isNew: false,
    highlights: ['10x faster than a normal hard drive', 'Best budget upgrade for old laptops', 'Shock and vibration resistant'],
    specs: { Brand: 'Kingston', Model: 'A400', Capacity: '480GB', Type: 'SATA III 2.5 inch', 'Read Speed': 'Up to 500 MB/s', 'Write Speed': 'Up to 450 MB/s', Form: '2.5 inch, 7mm', Warranty: '2 Years Local' },
  },

  // ---------------- RAM (3) ----------------
  {
    id: 15, name: 'Kingston Fury Beast 16GB DDR5 5600MHz Desktop RAM', brand: 'Kingston',
    category: 'RAM', price: 13999, oldPrice: 15999, badge: '13% Off', rating: 4.8,
    image: unsplashPhoto('photo-1587202372583-49330a15584d'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['DDR5 speed for new generation PCs', 'Low profile heat spreader', 'Plug and play auto overclocking'],
    specs: { Brand: 'Kingston', Model: 'Fury Beast', Capacity: '16GB (1 x 16GB)', Type: 'DDR5 DIMM', Speed: '5600MHz', Latency: 'CL40', Voltage: '1.25V', Warranty: 'Lifetime Local' },
  },
  {
    id: 16, name: 'Crucial 8GB DDR4 3200MHz Laptop RAM', brand: 'Crucial',
    category: 'RAM', price: 5499, oldPrice: null, badge: 'Popular', rating: 4.6,
    image: unsplashPhoto('photo-1527430253228-e93688616381'),
    inStock: true, isFeatured: false, isNew: false,
    highlights: ['Easiest way to speed up a laptop', 'Works with most DDR4 laptops', 'Improves multitasking instantly'],
    specs: { Brand: 'Crucial', Model: 'Basics Laptop Series', Capacity: '8GB (1 x 8GB)', Type: 'DDR4 SO-DIMM', Speed: '3200MHz', Latency: 'CL22', Voltage: '1.2V', Warranty: 'Lifetime Local' },
  },
  {
    id: 17, name: 'Kingston Fury Beast RGB 32GB DDR4 3600MHz RAM Kit', brand: 'Kingston',
    category: 'RAM', price: 21999, oldPrice: 24999, badge: '12% Off', rating: 4.7,
    image: unsplashPhoto('photo-1542978709-19c95dc3bc7e'),
    inStock: true, isFeatured: false, isNew: true,
    highlights: ['32GB kit for heavy gaming and editing', 'RGB lighting with smooth effects', 'Intel XMP ready profiles'],
    specs: { Brand: 'Kingston', Model: 'Fury Beast RGB', Capacity: '32GB (2 x 16GB)', Type: 'DDR4 DIMM', Speed: '3600MHz', Latency: 'CL18', Voltage: '1.35V', Warranty: 'Lifetime Local' },
  },

  // ---------------- Laptop Accessories (4) ----------------
  {
    id: 18, name: 'Premium Laptop Backpack 15.6 inch - Water Resistant', brand: 'AAA Basics',
    category: 'Laptop Accessories', price: 3999, oldPrice: 4999, badge: '20% Off', rating: 4.6,
    image: unsplashPhoto('photo-1553062407-98eeb64c6a62'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['Padded 15.6 inch laptop compartment', 'Water resistant fabric for daily travel', 'USB charging port on the side'],
    specs: { Brand: 'AAA Basics', Model: 'Travel Backpack Pro', Size: 'Fits up to 15.6 inch laptops', Material: 'Water resistant polyester', Compartments: '3 main + front pocket', Weight: '0.85 kg', Colour: 'Charcoal Grey', Warranty: '6 Months' },
  },
  {
    id: 19, name: 'Aluminium Laptop Stand - Adjustable, Foldable', brand: 'AAA Basics',
    category: 'Laptop Accessories', price: 2799, oldPrice: null, badge: 'New', rating: 4.7,
    image: unsplashPhoto('photo-1527864550417-7fd91fc51a46'),
    inStock: true, isFeatured: false, isNew: true,
    highlights: ['6 height levels for better posture', 'Solid aluminium, holds up to 10 kg', 'Folds flat, carry anywhere'],
    specs: { Brand: 'AAA Basics', Model: 'Lift Stand Aluminium', Material: 'Aluminium alloy', Levels: '6 adjustable heights', Compatibility: '10 to 17 inch laptops', Weight: '0.26 kg', Colour: 'Silver', Warranty: '6 Months' },
  },
  {
    id: 20, name: 'Laptop Cooling Pad with 5 Quiet Fans and RGB Lights', brand: 'AAA Basics',
    category: 'Laptop Accessories', price: 4999, oldPrice: 6499, badge: '23% Off', rating: 4.5,
    image: unsplashPhoto('photo-1527814050087-3793815479db'),
    inStock: true, isFeatured: false, isNew: false,
    highlights: ['5 quiet fans keep gaming laptops cool', 'Two height settings for comfort', 'RGB side lights with on/off control'],
    specs: { Brand: 'AAA Basics', Model: 'Chill Pad X5', Fans: '5 fans, adjustable speed', Size: 'Fits up to 17 inch laptops', Power: 'USB powered, extra USB port', Lights: 'RGB side strip', Weight: '0.9 kg', Warranty: '6 Months' },
  },
  {
    id: 21, name: '65W USB-C Fast Laptop Charger - Universal Adapter', brand: 'Anker',
    category: 'Laptop Accessories', price: 6999, oldPrice: 8499, badge: '18% Off', rating: 4.8,
    image: unsplashPhoto('photo-1611532736597-de2d4265fba3'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['65W fast charging over USB-C', 'Works with most USB-C laptops and phones', 'Compact GaN design, travel friendly'],
    specs: { Brand: 'Anker', Model: 'Nano 65W GaN', Output: '65W USB-C Power Delivery', Input: '100-240V universal', Cable: '1.8m braided USB-C cable included', Protection: 'Over-voltage and heat protection', Weight: '0.12 kg', Warranty: '1 Year Local' },
  },

  // ---------------- PC Accessories (3) ----------------
  {
    id: 22, name: '20000mAh Power Bank with 22.5W Fast Charging', brand: 'Anker',
    category: 'PC Accessories', price: 5999, oldPrice: 7499, badge: '20% Off', rating: 4.7,
    image: unsplashPhoto('photo-1609091839311-d5365f9ff1c5'),
    inStock: true, isFeatured: true, isNew: false,
    highlights: ['Charges a phone 3 to 4 times', '22.5W fast charging support', 'LED display shows battery level'],
    specs: { Brand: 'Anker', Model: 'PowerCore 20000', Capacity: '20000mAh', Output: '22.5W max, USB-C and USB-A', Input: 'USB-C fast recharging', Display: 'LED percentage display', Weight: '0.34 kg', Warranty: '1 Year Local' },
  },
  {
    id: 23, name: 'Shockproof PC Cover with Camera Protection - Clear', brand: 'Baseus',
    category: 'PC Accessories', price: 1299, oldPrice: null, badge: 'Popular', rating: 4.4,
    image: unsplashPhoto('photo-1511707171634-5f897ff02aa9'),
    inStock: true, isFeatured: false, isNew: true,
    highlights: ['Drop tested corner protection', 'Raised edges guard screen and camera', 'Clear back shows your phone design'],
    specs: { Brand: 'Baseus', Model: 'Crystal Guard Clear', Material: 'TPU + hard PC back', Protection: 'Military grade drop test', Compatibility: 'Popular Samsung and iPhone models', Weight: '0.04 kg', Colour: 'Crystal Clear', Warranty: '3 Months' },
  },
  {
    id: 24, name: '3-in-1 Fast Charging Cable - USB-C, Lightning, Micro USB', brand: 'Baseus',
    category: 'PC Accessories', price: 999, oldPrice: 1399, badge: '29% Off', rating: 4.5,
    image: unsplashPhoto('photo-1583394838336-acd977736f90'),
    inStock: true, isFeatured: false, isNew: false,
    highlights: ['One cable for every device', 'Braided nylon, tangle free', 'Supports fast charging and data sync'],
    specs: { Brand: 'Baseus', Model: '3-in-1 Rapid Cable', Length: '1.2 metre', Connectors: 'USB-C, Lightning, Micro USB', Output: 'Up to 3.5A combined', Material: 'Braided nylon + aluminium tips', 'Data Speed': 'Up to 480 Mbps', Warranty: '3 Months' },
  },
]

export const products = productCatalogue.map((product) => ({
  ...product,
  gradient: themeGradient,
}))

export const formatPrice = (value) => 'Rs. ' + Number(value).toLocaleString('en-PK')

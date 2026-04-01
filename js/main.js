// ============================================
// GLOBAL SUPPLY — Products Data + Cart Logic
// ============================================

// ---------- PRODUCTS DATA ----------
const PRODUCTS = [
  // ====== NIKE — AIR FORCE ======
  {
    id: 1,
    name: "Air Force 1 White",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-force",
    slug: "air-force-1-white",
    image: "https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "POPULAR",
    new: true,
    description: "O clássico intemporal. Air Force 1 na colorway branca — combinam com tudo, duram para sempre."
  },
  {
    id: 2,
    name: "Air Force 1 Black",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-force",
    slug: "air-force-1-black",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "Versão preta do ícone AF1. Versátil, elegante e atemporal."
  },

  // ====== NIKE — AIR MAX TN ======
  {
    id: 3,
    name: "Air Max TN Black White",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-tn",
    slug: "air-max-tn-black-white",
    image: "https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "HOT",
    new: true,
    description: "Air Max TN na combinação preto e branco. Aerodinâmico, confortável e sempre em alta."
  },
  {
    id: 4,
    name: "Air Max TN Full Black",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-tn",
    slug: "air-max-tn-full-black",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "TN total black. Para quem prefere o look monocromático e imponente."
  },
  {
    id: 5,
    name: "Air Max TN Black Yellow",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-tn",
    slug: "air-max-tn-black-yellow",
    image: "https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "LIMITED",
    new: false,
    description: "Colorway preto e amarelo — vibrante e inconfundível nas ruas."
  },
  {
    id: 6,
    name: "Air Max TN Lisboa",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-tn",
    slug: "air-max-tn-lisboa",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "EXCLUSIVO",
    new: true,
    description: "Edição especial Lisboa. Um tributo à capital, com detalhes únicos e estilo inconfundível."
  },

  // ====== NIKE — AIR MAX 95 ======
  {
    id: 7,
    name: "Air Max 95 Black White",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-95",
    slug: "air-max-95-black-white",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "O ícone do streetwear desde 1995. Cushioning Air e design em camadas que resiste ao tempo."
  },
  {
    id: 8,
    name: "Air Max 95 Black",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-95",
    slug: "air-max-95-black",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "Air Max 95 total black. Minimalismo e amortecimento Air em estado puro."
  },
  {
    id: 9,
    name: "Air Max 95 Corteiz White",
    brand: "Nike x Corteiz",
    category: "sneakers",
    subcategory: "air-max-95",
    slug: "air-max-95-corteiz-white",
    image: "https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "COLLAB",
    new: true,
    description: "Colaboração Nike x Corteiz em branco. Uma das collabs mais aguardadas do ano."
  },
  {
    id: 10,
    name: "Air Max 95 Corteiz Blue",
    brand: "Nike x Corteiz",
    category: "sneakers",
    subcategory: "air-max-95",
    slug: "air-max-95-corteiz-blue",
    image: "https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "COLLAB",
    new: true,
    description: "Nike x Corteiz em azul. Edição limitada, muito procurada no mercado global."
  },
  {
    id: 11,
    name: "Air Max 95 Levi's",
    brand: "Nike x Levi's",
    category: "sneakers",
    subcategory: "air-max-95",
    slug: "air-max-95-levis",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "COLLAB",
    new: false,
    description: "Collab icónica Nike x Levi's no modelo Air Max 95. Denim e sustentabilidade."
  },
  {
    id: 12,
    name: "Air Max 95 OG Neon",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-95",
    slug: "air-max-95-neon",
    image: "https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "HOT",
    new: true,
    description: "O original AM95 Neon em versão OG. Um must-have para qualquer coleção."
  },
  {
    id: 13,
    name: "Air Max 95 Worksout",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-95",
    slug: "air-max-95-worksout",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "Air Max 95 edição Worksout. Performance e estilo sem compromissos."
  },

  // ====== NIKE — AIR MAX PLUS ======
  {
    id: 14,
    name: "Air Max Plus 3",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-plus",
    slug: "air-max-plus-3",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "NEW",
    new: true,
    description: "A terceira geração do Air Max Plus. Design futurista e máximo conforto."
  },
  {
    id: 15,
    name: "Air Max Plus VII",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-plus",
    slug: "air-max-plus-vii",
    image: "https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "NEW",
    new: true,
    description: "Air Max Plus VII — evolução do design Tuned Air numa versão moderna e agressiva."
  },

  // ====== NIKE — AIR MAX DN ======
  {
    id: 16,
    name: "Air Max DN White Metallic",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-dn",
    slug: "air-max-dn-white-metallic",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "NEW",
    new: true,
    description: "Air Max DN em branco com detalhes metálicos. O sneaker do futuro disponível hoje."
  },
  {
    id: 17,
    name: "Air Max DN Blue",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-dn",
    slug: "air-max-dn-blue",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "Air Max DN em azul. Sistema de amortecimento DN visível e design ultra-moderno."
  },
  {
    id: 18,
    name: "Air Max DN SE Light Smoke",
    brand: "Nike",
    category: "sneakers",
    subcategory: "air-max-dn",
    slug: "air-max-dn-se-light-smoke",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "Air Max DN SE em Light Smoke Grey. Subtil, sofisticado e diferente."
  },

  // ====== NIKE — SHOX ======
  {
    id: 19,
    name: "Nike Shox TL Black",
    brand: "Nike",
    category: "sneakers",
    subcategory: "shox",
    slug: "shox-tl-black",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "HOT",
    new: false,
    description: "O Shox TL voltou com tudo. Colunas visíveis, design Y2K que domina o streetwear atual."
  },
  {
    id: 20,
    name: "Nike Shox TL White",
    brand: "Nike",
    category: "sneakers",
    subcategory: "shox",
    slug: "shox-tl-white",
    image: "https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "Shox TL em branco. Mais clean, mesma tecnologia de mola que todos querem."
  },

  // ====== NIKE — VOMERO ======
  {
    id: 21,
    name: "Nike Zoom Vomero 5",
    brand: "Nike",
    category: "sneakers",
    subcategory: "vomero",
    slug: "zoom-vomero-5",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "TRENDING",
    new: true,
    description: "O Vomero 5 é o sneaker do momento. Chunky, confortável e viral nas redes sociais."
  },

  // ====== JORDAN ======
  {
    id: 22,
    name: "Air Jordan 1 Retro High",
    brand: "Jordan",
    category: "sneakers",
    subcategory: "jordan",
    slug: "air-jordan-1-retro-high",
    image: "https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "POPULAR",
    new: false,
    description: "O sneaker mais icónico de sempre. Air Jordan 1 Retro High — história do basquete e da cultura."
  },
  {
    id: 23,
    name: "Air Jordan 4 Retro",
    brand: "Jordan",
    category: "sneakers",
    subcategory: "jordan",
    slug: "air-jordan-4-retro",
    image: "https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "HOT",
    new: true,
    description: "Air Jordan 4 — o segundo mais desejado. Design agressivo, grelha lateral e lendas do basquete."
  },

  // ====== ADIDAS ======
  {
    id: 24,
    name: "Adidas Samba OG",
    brand: "Adidas",
    category: "sneakers",
    subcategory: "adidas",
    slug: "adidas-samba-og",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "TRENDING",
    new: true,
    description: "O Samba OG conquistou as ruas mundialmente. Goma bege, listras laterais — menos é mais."
  },
  {
    id: 25,
    name: "Adidas Campus 00s",
    brand: "Adidas",
    category: "sneakers",
    subcategory: "adidas",
    slug: "adidas-campus-00s",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "TRENDING",
    new: true,
    description: "Campus 00s — o sneaker que dominou 2024 e continua forte. Vintage, chunky e muito cool."
  },
  {
    id: 26,
    name: "Adidas Yeezy Slide Onyx",
    brand: "Adidas Yeezy",
    category: "sneakers",
    subcategory: "adidas",
    slug: "yeezy-slide-onyx",
    image: "https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "YEEZY",
    new: false,
    description: "Yeezy Slide em Onyx — o slide mais desejado do mundo. Conforto extremo."
  },

  // ====== NEW BALANCE ======
  {
    id: 27,
    name: "New Balance 9060",
    brand: "New Balance",
    category: "sneakers",
    subcategory: "new-balance",
    slug: "new-balance-9060",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "HOT",
    new: true,
    description: "New Balance 9060 — chunky runner com amortecimento premium. O favorito dos sneakerheads."
  },
  {
    id: 28,
    name: "New Balance 992",
    brand: "New Balance",
    category: "sneakers",
    subcategory: "new-balance",
    slug: "new-balance-992",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "New Balance 992 — made in USA. O sneaker premium de referência no mundo do lifestyle."
  },

  // ====== LUXURY ======
  {
    id: 29,
    name: "LV Sneaker Black",
    brand: "Louis Vuitton",
    category: "sneakers",
    subcategory: "luxury",
    slug: "lv-sneaker-black",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "LUXURY",
    new: false,
    description: "Sneaker Louis Vuitton em preto. Monograma LV, materiais premium e acabamento de alta moda."
  },
  {
    id: 30,
    name: "LV Sneaker White",
    brand: "Louis Vuitton",
    category: "sneakers",
    subcategory: "luxury",
    slug: "lv-sneaker-white",
    image: "https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "LUXURY",
    new: false,
    description: "LV branco — para os dias em que só o melhor chega."
  },
  {
    id: 31,
    name: "LV Skate Beige",
    brand: "Louis Vuitton",
    category: "sneakers",
    subcategory: "luxury",
    slug: "lv-skate-beige",
    image: "https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "LUXURY",
    new: true,
    description: "LV Skate em Bege — o skate-shoe mais luxuoso do mercado."
  },
  {
    id: 32,
    name: "Dior B30 Black",
    brand: "Dior",
    category: "sneakers",
    subcategory: "luxury",
    slug: "dior-b30-black",
    image: "https://images.unsplash.com/photo-1539185111-6b29e59eb2d8?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "LUXURY",
    new: false,
    description: "Dior B30 em preto. O sneaker que define a elegância casual moderna."
  },
  {
    id: 33,
    name: "Dior B22 White",
    brand: "Dior",
    category: "sneakers",
    subcategory: "luxury",
    slug: "dior-b22-white",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be1c1?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1600269452-2337085f2133?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "LUXURY",
    new: false,
    description: "Dior B22 em branco — chunky runner de alta costura com materiais de primeira."
  },

  // ====== ASICS ======
  {
    id: 34,
    name: "ASICS Gel-NYC",
    brand: "ASICS",
    category: "sneakers",
    subcategory: "asics",
    slug: "asics-gel-nyc",
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1542291026-7338ccfcd699?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: "TRENDING",
    new: true,
    description: "ASICS Gel-NYC — o runner técnico que invadiu as ruas. Cores vibrantes, conforto excepcional."
  },
  {
    id: 35,
    name: "ASICS Gel-1130",
    brand: "ASICS",
    category: "sneakers",
    subcategory: "asics",
    slug: "asics-gel-1130",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    sizes: [38,39,40,41,42,43,44,45,46],
    price: null,
    badge: null,
    new: false,
    description: "ASICS Gel-1130 — estética retro-runner japonesa que domina o movimento gorpcore."
  },

  // ====== CLOTHING ======
  {
    id: 36,
    name: "Hoodie Oversized Black",
    brand: "Global Supply",
    category: "clothing",
    subcategory: "hoodies",
    slug: "hoodie-oversized-black",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    price: null,
    badge: null,
    new: false,
    description: "Hoodie oversized 100% algodão pesado. Bordado Global Supply no peito. Unissexo."
  },
  {
    id: 37,
    name: "Hoodie Oversized White",
    brand: "Global Supply",
    category: "clothing",
    subcategory: "hoodies",
    slug: "hoodie-oversized-white",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&auto=format&fit=crop&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    price: null,
    badge: null,
    new: false,
    description: "Hoodie branco oversized. Combinação perfeita com qualquer sneaker do catálogo."
  },
  {
    id: 38,
    name: "Cargo Pants Black",
    brand: "Global Supply",
    category: "clothing",
    subcategory: "pants",
    slug: "cargo-pants-black",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    price: null,
    badge: "NEW",
    new: true,
    description: "Cargo pants em preto. Bolsos laterais funcionais, tecido resistente. O essencial do streetwear."
  },
  {
    id: 39,
    name: "Cargo Pants Beige",
    brand: "Global Supply",
    category: "clothing",
    subcategory: "pants",
    slug: "cargo-pants-beige",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    price: null,
    badge: null,
    new: false,
    description: "Cargo em bege — versátil, combina com tudo. Do campus às ruas da cidade."
  },
  {
    id: 40,
    name: "T-Shirt Oversized Essential",
    brand: "Global Supply",
    category: "clothing",
    subcategory: "tshirts",
    slug: "tshirt-oversized-essential",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    price: null,
    badge: null,
    new: false,
    description: "T-shirt oversized em algodão 220g. Logo Global Supply impresso. A base de qualquer outfit."
  },
  {
    id: 41,
    name: "Shorts Cargo Black",
    brand: "Global Supply",
    category: "clothing",
    subcategory: "shorts",
    slug: "shorts-cargo-black",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    sizes: ["XS","S","M","L","XL","XXL"],
    price: null,
    badge: null,
    new: false,
    description: "Shorts cargo. Para os dias quentes, com todo o estilo streetwear."
  },
  {
    id: 42,
    name: "Burberry Shorts",
    brand: "Burberry",
    category: "clothing",
    subcategory: "shorts",
    slug: "burberry-shorts",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    image2:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&auto=format&fit=crop&q=80",
    sizes: ["S","M","L","XL"],
    price: null,
    badge: "LUXURY",
    new: false,
    description: "Shorts Burberry — o xadrez brit que nunca sai de moda. Perfeito com qualquer sneaker."
  }
];

// ---------- RELEASE WALL DATA ----------
const RELEASES = [
  {
    name: "Air Jordan 4 'Black Cat' 2026",
    brand: "Jordan",
    date: "15 Abril 2026",
    status: "soon",
    image: "https://picsum.photos/seed/rel1/100/100",
    price: null
  },
  {
    name: "Nike Air Max 95 'Neon' 2026",
    brand: "Nike",
    date: "22 Abril 2026",
    status: "soon",
    image: "https://picsum.photos/seed/rel2/100/100",
    price: null
  },
  {
    name: "Adidas Samba 'Animalier'",
    brand: "Adidas",
    date: "29 Abril 2026",
    status: "coming",
    image: "https://picsum.photos/seed/rel3/100/100",
    price: null
  },
  {
    name: "Nike Vomero Plus",
    brand: "Nike",
    date: "6 Maio 2026",
    status: "coming",
    image: "https://picsum.photos/seed/rel4/100/100",
    price: null
  },
  {
    name: "New Balance 992 'White Navy'",
    brand: "New Balance",
    date: "13 Maio 2026",
    status: "coming",
    image: "https://picsum.photos/seed/rel5/100/100",
    price: null
  },
  {
    name: "Nike Air Jordan 1 x Off-White",
    brand: "Jordan x Off-White",
    date: "20 Maio 2026",
    status: "coming",
    image: "https://picsum.photos/seed/rel6/100/100",
    price: null
  }
];

// ---------- CART ----------
class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('gs_cart') || '[]');
    this.render();
    this.updateCount();
  }

  save() {
    localStorage.setItem('gs_cart', JSON.stringify(this.items));
  }

  add(productId, size) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const key = `${productId}-${size}`;
    const existing = this.items.find(i => i.key === key);
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ key, productId, size, qty: 1, name: product.name, brand: product.brand, image: `https://picsum.photos/seed/gs${productId}/80/80` });
    }
    this.save();
    this.render();
    this.updateCount();
    showToast(`✓ ${product.name} adicionado ao carrinho`);
    openCart();
  }

  remove(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save();
    this.render();
    this.updateCount();
  }

  clear() {
    this.items = [];
    this.save();
    this.render();
    this.updateCount();
  }

  total() {
    return this.items.reduce((sum, i) => {
      const product = PRODUCTS.find(p => p.id === i.productId);
      return sum + (product && product.price ? product.price * i.qty : 0);
    }, 0);
  }

  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }

  render() {
    const container = document.getElementById('cart-items');
    const footer    = document.getElementById('cart-footer');
    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <p style="font-size:2rem;margin-bottom:1rem">👟</p>
          <p>O teu carrinho está vazio.</p>
          <a href="pages/shop.html" class="btn btn-primary" style="margin-top:1.5rem;display:inline-flex">Ver Produtos</a>
        </div>`;
      if (footer) footer.style.display = 'none';
      return;
    }

    if (footer) footer.style.display = 'block';
    container.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <img src="https://picsum.photos/seed/gs${item.productId}/80/80" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">Tamanho: ${item.size} | Qtd: ${item.qty}</div>
          <div class="cart-item-price">${PRODUCTS.find(p=>p.id===item.productId)?.price ? '€' + (PRODUCTS.find(p=>p.id===item.productId).price * item.qty).toFixed(2) : 'A definir'}</div>
          <button class="cart-item-remove" onclick="cart.remove('${item.key}')">Remover</button>
        </div>
      </div>
    `).join('');

    const totalEl = document.getElementById('cart-total-price');
    if (totalEl) {
      const t = this.total();
      totalEl.textContent = t > 0 ? `€${t.toFixed(2)}` : 'A definir';
    }
  }

  updateCount() {
    const count = this.count();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.classList.toggle('visible', count > 0);
    });
  }
}

// ---------- GLOBAL FUNCTIONS ----------
let cart;
let selectedProductForModal = null;
let selectedSize = null;

function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function openSizeModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  selectedProductForModal = product;
  selectedSize = null;

  const overlay = document.getElementById('size-modal-overlay');
  if (!overlay) return;

  document.getElementById('modal-product-img').src   = `https://picsum.photos/seed/gs${product.id}/80/80`;
  document.getElementById('modal-product-name').textContent  = product.name;
  document.getElementById('modal-product-brand').textContent = product.brand;

  const grid = document.getElementById('modal-size-grid');
  grid.innerHTML = product.sizes.map(s => `
    <button class="size-option" onclick="selectSize(this,'${s}')">${s}</button>
  `).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSizeModal() {
  document.getElementById('size-modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  selectedProductForModal = null;
  selectedSize = null;
}

function selectSize(btn, size) {
  document.querySelectorAll('#modal-size-grid .size-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = size;
}

function confirmAddToCart() {
  if (!selectedProductForModal) return;
  if (!selectedSize) { showToast('⚠️ Seleciona um tamanho primeiro'); return; }
  cart.add(selectedProductForModal.id, selectedSize);
  closeSizeModal();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  nav?.classList.toggle('open');
  document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
}

// ---------- MEGA MENU ----------
// ---------- HERO VIDEO CROSSFADE ----------
function initHeroVideos() {
  const vids = Array.from(document.querySelectorAll('.hero-vid'));
  if (!vids.length) return;

  let current = 0;

  // Inicia o primeiro vídeo
  vids[0].play().catch(() => {});

  function crossfade() {
    const prev = current;
    current = (current + 1) % vids.length;

    // Carrega e arranca o próximo
    vids[current].currentTime = 0;
    vids[current].play().catch(() => {});

    // Faz crossfade
    vids[current].classList.add('active');
    vids[prev].classList.remove('active');

    // Para o anterior depois da transição acabar
    setTimeout(() => {
      vids[prev].pause();
      vids[prev].currentTime = 0;
    }, 1800);
  }

  // Ciclo a cada 8 segundos
  setInterval(crossfade, 8000);
}

function initMegaMenu() {
  const items = document.querySelectorAll('.nav-item.has-dropdown');

  // Garantir que todos os menus começam fechados
  items.forEach(i => i.classList.remove('open'));

  items.forEach(item => {
    const btn = item.querySelector('.nav-link');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains('open');
      // Fecha todos os dropdowns
      items.forEach(i => i.classList.remove('open'));
      // Abre só o clicado (toggle)
      if (!isOpen) item.classList.add('open');
    });
    // Impede que cliques dentro do mega-menu fechem o dropdown
    const menu = item.querySelector('.mega-menu');
    if (menu) menu.addEventListener('click', e => e.stopPropagation());
  });

  // Clique fora fecha tudo
  document.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('open'));
  });
}

// ---------- MOBILE ACCORDION ----------
function toggleMobAcc(btn) {
  const acc = btn.closest('.mob-acc');
  acc.classList.toggle('open');
}

// ---------- RENDER HELPERS ----------
function getBadgeHTML(badge) {
  if (!badge) return '';
  const map = {
    'POPULAR':'badge-new','HOT':'badge-hot','NEW':'badge-new','TRENDING':'badge-new',
    'COLLAB':'badge-limited','LIMITED':'badge-limited','LUXURY':'badge-hot',
    'YEEZY':'badge-limited','EXCLUSIVO':'badge-limited'
  };
  return `<span class="badge ${map[badge]||'badge-new'}">${badge}</span>`;
}

function renderProductCard(product, path = '') {
  return `
  <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-subcategory="${product.subcategory}">
    <div class="product-card-img">
      <div class="product-card-badge">${getBadgeHTML(product.badge)}</div>
      <img src="https://picsum.photos/seed/gs${product.id}/600/600" alt="${product.name}" loading="lazy"
           onerror="this.src='https://picsum.photos/seed/gsfallback/600/600'">
      <div class="product-card-actions">
        <button class="btn btn-primary" onclick="openSizeModal(${product.id})">Adicionar</button>
        <button class="btn btn-dark" onclick="quickView(${product.id})">👁</button>
      </div>
    </div>
    <div class="product-card-info">
      <div class="product-card-brand">${product.brand}</div>
      <div class="product-card-name">${product.name}</div>
      <div class="product-card-sizes">
        ${product.sizes.slice(0,5).map(s=>`<span class="size-dot">${s}</span>`).join('')}
        ${product.sizes.length > 5 ? `<span class="size-dot">+${product.sizes.length-5}</span>` : ''}
      </div>
      <div class="product-card-footer">
        <span class="product-price">
          ${product.price ? `€${product.price}` : '<span class="product-price-tbd">Consultar preço</span>'}
        </span>
        <button class="btn btn-primary" style="padding:0.45rem 1rem;font-size:0.75rem" onclick="openSizeModal(${product.id})">Comprar</button>
      </div>
    </div>
  </div>`;
}

function quickView(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  openSizeModal(productId);
}

// ---------- YOUTUBE CROSSFADE ----------
const YT_VIDEOS = [
  { id: 'd-_A6SB-eJU', start: 4  }, // Air Dior × Travis Scott
  { id: 'psyCXr9uqaQ', start: 28 }, // ASAP Rocky × Gucci Tailoring Campaign
];
let ytPlayers = [];
let ytCurrent = 0;
const YT_SWITCH_INTERVAL = 14000; // troca a cada 14 segundos

window.onYouTubeIframeAPIReady = function () {
  YT_VIDEOS.forEach((vid, i) => {
    ytPlayers[i] = new YT.Player(`yt-player-${i}`, {
      videoId: vid.id,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        disablekb: 1,
        iv_load_policy: 3,
        start: vid.start,
        vq: 'hd1080',
        loop: 1,
        playlist: vid.id,
      },
      events: {
        onReady: (e) => {
          e.target.setPlaybackQuality('hd1080');
          e.target.playVideo();
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) {
            e.target.seekTo(YT_VIDEOS[i].start);
            e.target.playVideo();
          }
        },
      },
    });
  });
  setTimeout(ytCrossfade, YT_SWITCH_INTERVAL);
};

function ytCrossfade() {
  const prev = ytCurrent;
  ytCurrent = (ytCurrent + 1) % ytPlayers.length;

  const prevEl = document.getElementById(`yt-player-${prev}`);
  const nextEl = document.getElementById(`yt-player-${ytCurrent}`);
  if (!prevEl || !nextEl) return;

  nextEl.classList.add('active');
  nextEl.classList.remove('inactive');

  setTimeout(() => {
    prevEl.classList.remove('active');
    prevEl.classList.add('inactive');
  }, 1500);

  setTimeout(ytCrossfade, YT_SWITCH_INTERVAL);
}

// ---------- PAGE LOADER ----------
(function () {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  const hide = () => loader.classList.add('hidden');
  if (document.readyState === 'complete') {
    setTimeout(hide, 300);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 400));
    // fallback — nunca ficar preso mais de 3s
    setTimeout(hide, 3000);
  }
})();

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  cart = new Cart();

  // Hero video crossfade
  initHeroVideos();

  // Mega menu
  initMegaMenu();

  // Scroll to top button
  const scrollBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      item.classList.toggle('open');
    });
  });

  // Close cart on overlay click
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

  // Newsletter form
  document.getElementById('newsletter-form')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✓ Subscrito com sucesso! Bem-vindo à família.');
    e.target.reset();
  });

  // Contact form
  document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✓ Mensagem enviada! Respondemos em 24h.');
    e.target.reset();
  });

  // Active nav link
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav a, .mobile-nav a').forEach(a => {
    if (a.getAttribute('href') === current || (current === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });
});

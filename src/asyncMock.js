const productList = [
  {
    id: "1",
    instrument: "Fender Stratocaster",
    category: "Guitarras",
    price: 1200,
    description:
      "La Fender Stratocaster, un ícono en guitarras eléctricas, ofrece versatilidad tonal y comodidad en un diseño clásico.",
    image:
      "https://audioimport.com.ar/wp-content/uploads/2021/02/fender-player-stratocaster-hss-mn-3-color-sunburst_5d810423749c9.jpg",
  },
  {
    id: "2",
    instrument: "Ibanez RG550",
    category: "Guitarras",
    price: 1000,
    description:
      "La Ibanez RG550, ideal para guitarristas de rock y metal, ofrece potencia y velocidad con un estilo distintivo.",
    image: "https://static.sonovente.com/img/library/zoom/60/450/60369_1.jpg",
  },
  {
    id: "3",
    instrument: "Fender Jazz Bass",
    category: "Bajos",
    price: 1100,
    description:
      "El Fender Jazz Bass, conocido por su versatilidad, proporciona graves potentes y tonos ricos para diversos estilos musicales.",
    image: "https://themusicoutlet.ie/wp-content/uploads/2018/10/bb1-4.jpg",
  },
  {
    id: "4",
    instrument: "DW Collector's Series",
    category: "Percusion",
    price: 4000,
    description:
      "La DW Collector's Series, con cascos de arce y hardware premium, ofrece una experiencia de batería excepcional para músicos exigentes.",
    image:
      "https://listaimsa.com.ar/wp-content/uploads/2023/07/DW-Collectors-Cherry-Gum-4-c-Silver-Abalone.jpg",
  },
  {
    id: "5",
    instrument: "Yamaha YAS-82Z",
    category: "Saxofones",
    price: 2800,
    description:
      "El Yamaha YAS-82Z, saxofón alto profesional, ofrece un tono expresivo y una respuesta precisa, siendo una elección destacada para músicos de alto nivel.",
    image:
      "https://es.yamaha.com/es/files/yas-82zb_540x540_d5a8d81606d4cf6efda1f5b097a6b7b3.jpg",
  },
  {
    id: "6",
    instrument: "Selmer Mark VI",
    category: "Saxofones",
    price: 5000,
    description:
      "El Selmer Mark VI, saxofón alto legendario, destaca por su calidad tonal excepcional y su artesanía insuperable en el mundo del jazz.",
    image:
      "https://www.tomleemusic.ca/media/catalog/product/cache/7b59eeedc8a9391b10c489498e31e772/7/2/72.png",
  },
  {
    id: "7",
    instrument: "Roland FP-30",
    category: "Pianos",
    price: 700,
    description:
      "El Roland FP-30, piano digital portátil, ofrece autenticidad de sonido de piano de cola en un diseño compacto para músicos en movimiento.",
    image: "https://www.manual.ar/thumbs/products/l/1450337-roland-fp-30x.jpg",
  },
  {
    id: "8",
    instrument: "Korg Kronos 88",
    category: "Pianos",
    price: 3500,
    description:
      "El Korg Kronos 88, una workstation potente con teclas contrapesadas, es esencial para productores y músicos que buscan calidad y versatilidad.",
    image:
      "https://www.b2bmusicstore.com.ar/wp-content/uploads/korg-kronos-2-88-2.jpg",
  },
  {
    id: "9",
    instrument: "Kawai ES8",
    category: "Pianos",
    price: 1800,
    description:
      "El piano digital Kawai ES8, con teclas contrapesadas y sonidos auténticos, proporciona una experiencia de piano premium para músicos exigentes.",
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/23/230175/600/preview_10.jpg",
  },
  {
    id: "10",
    instrument: "Fender Deluxe Reverb",
    category: "Amplificadores",
    price: 1300,
    description:
      "El amplificador Fender Deluxe Reverb ofrece un tono limpio y vibrante, ideal para guitarristas que buscan calidad y versatilidad.",
    image:
      "https://distingomusicstores.com/wp-content/uploads/2022/02/Fender-65-DELUXE-REVERB%C2%AE.jpg",
  },
  {
    id: "11",
    instrument: "Fender Bassman",
    category: "Amplificadores",
    price: 1200,
    description:
      "El Fender Bassman, clásico amplificador para bajos, proporciona tonos cálidos y vintage que han definido el sonido del bajo eléctrico.",
    image: "https://www.long-mcquade.com/files/610/2171000010_xl.jpg",
  },
  {
    id: "12",
    instrument: "Roland JC-120",
    category: "Amplificadores",
    price: 800,
    description:
      "El Roland JC-120, conocido por su limpieza y sonido estéreo distintivo, es una elección popular entre guitarristas para una reproducción fiel del sonido.",
    image:
      "https://acdn.mitiendanube.com/stores/001/312/585/products/roland391-1a7d066a587f48ca4616359842476978-1024-1024.jpg",
  },
  {
    id: "13",
    instrument: "Gibson Les Paul Standard",
    category: "Guitarras",
    price: 2500,
    description:
      "La Gibson Les Paul Standard, icónica por su tono poderoso, artesanía superior y diseño clásico, es una elección preferida entre guitarristas de todos los estilos.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_894367-MLA69429285313_052023-O.webp",
  },
  {
    id: "14",
    instrument: "Pearl Masterworks",
    category: "Percusion",
    price: 4500,
    description:
      "La Pearl Masterworks, con cascos personalizados y acabados impresionantes, es una batería de alta gama diseñada para músicos que buscan calidad excepcional.",
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/57/577485/600/preview.jpg",
  },
  {
    id: "15",
    instrument: "Yamaha CP88",
    category: "Pianos",
    price: 2500,
    description:
      "El Yamaha CP88, un piano de escenario premium con teclas contrapesadas y sonidos auténticos, proporciona una experiencia excepcional para músicos en vivo.",
    image: "https://www.cjfsonidoprofesional.com/images/slide-1634835966.jpg",
  },
];

export default productList;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productList);
    }, 100);
  })
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const upperCategory = category.charAt(0).toUpperCase() + category.slice(1);
      console.log(category);
      console.log(upperCategory);
      resolve(productList.filter(prod => prod.category === upperCategory));
    }, 500);
  });
};
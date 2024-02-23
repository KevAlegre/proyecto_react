const productList = [
  {
    id: "1",
    instrument: "Fender Stratocaster",
    category: "Guitarras",
    price: 1200,
    description: "La Fender Stratocaster, una obra maestra de la guitarra eléctrica, ha sido la elección de guitarristas legendarios. Con su diseño clásico, ofrece versatilidad tonal excepcional y comodidad. Ya sea para tocar blues suave o rock estridente, la Stratocaster proporciona una paleta sonora rica y una ejecución sin esfuerzo.",
    alt:
      "La Fender Stratocaster, un ícono en guitarras eléctricas, ofrece versatilidad tonal y comodidad en un diseño clásico.",
    image:
      "https://audioimport.com.ar/wp-content/uploads/2021/02/fender-player-stratocaster-hss-mn-3-color-sunburst_5d810423749c9.jpg",
  },
  {
    id: "2",
    instrument: "Ibanez RG550",
    category: "Guitarras",
    price: 1000,
    description: "La Ibanez RG550 es la opción preferida de guitarristas de rock y metal que buscan velocidad y potencia. Con su diseño llamativo y pastillas de alto rendimiento, ofrece un rendimiento excepcional para solos rápidos y riffs contundentes.",
    alt:
      "La Ibanez RG550, ideal para guitarristas de rock y metal, ofrece potencia y velocidad con un estilo distintivo.",
    image: "https://static.sonovente.com/img/library/zoom/60/450/60369_1.jpg",
  },
  {
    id: "3",
    instrument: "Fender Jazz Bass",
    category: "Bajos",
    price: 1100,
    description: "El Fender Jazz Bass, famoso por su versatilidad, entrega graves potentes y tonos ricos. Ideal para cualquier estilo musical, desde jazz suave hasta funk contundente. Su diseño clásico y su construcción de alta calidad hacen del Jazz Bass una opción confiable para bajistas exigentes.",
    alt:
      "El Fender Jazz Bass, conocido por su versatilidad, proporciona graves potentes y tonos ricos para diversos estilos musicales.",
    image: "https://themusicoutlet.ie/wp-content/uploads/2018/10/bb1-4.jpg",
  },
  {
    id: "4",
    instrument: "DW Collector's Series",
    category: "Percusion",
    price: 4000,
    description: "La DW Collector's Series redefine la excelencia en baterías. Con cascos de arce y hardware premium, esta batería ofrece una experiencia de percusión excepcional. Desde sutiles ritmos hasta explosivos solos, la Collector's Series satisface las demandas de los bateristas más exigentes.",
    alt:
      "La DW Collector's Series, con cascos de arce y hardware premium, ofrece una experiencia de batería excepcional para músicos exigentes.",
    image:
      "https://listaimsa.com.ar/wp-content/uploads/2023/07/DW-Collectors-Cherry-Gum-4-c-Silver-Abalone.jpg",
  },
  {
    id: "5",
    instrument: "Yamaha YAS-82Z",
    category: "Saxofones",
    price: 2800,
    description: "El Yamaha YAS-82Z es la elección perfecta para saxofonistas profesionales y músicos que buscan un instrumento de alto rendimiento que inspire creatividad y ofrezca una experiencia musical inigualable. Su combinación de tono excepcional, calidad de construcción y diseño elegante lo sitúa en la vanguardia de los saxofones altos en el mercado.",
    alt:
      "El Yamaha YAS-82Z, saxofón alto profesional, ofrece un tono expresivo y una respuesta precisa, siendo una elección destacada para músicos de alto nivel.",
    image:
      "https://es.yamaha.com/es/files/yas-82zb_540x540_d5a8d81606d4cf6efda1f5b097a6b7b3.jpg",
  },
  {
    id: "6",
    instrument: "Selmer Mark VI",
    category: "Saxofones",
    price: 5000,
    description: "El saxofón alto Selmer Mark VI es una leyenda en el mundo del jazz. Reconocido por su calidad tonal insuperable y artesanía meticulosa, este saxofón sigue siendo la elección de los saxofonistas de élite para expresiones musicales excepcionales.",
    alt:
      "El Selmer Mark VI, saxofón alto legendario, destaca por su calidad tonal excepcional y su artesanía insuperable en el mundo del jazz.",
    image:
      "https://www.tomleemusic.ca/media/catalog/product/cache/7b59eeedc8a9391b10c489498e31e772/7/2/72.png",
  },
  {
    id: "7",
    instrument: "Roland FP-30",
    category: "Pianos",
    price: 700,
    description: "El Roland FP-30, piano digital portátil, lleva la autenticidad del sonido de piano de cola a cualquier lugar. Con un diseño compacto, teclas ponderadas y sonidos realistas, es la elección perfecta para músicos que buscan calidad en movimiento.",
    alt:
      "El Roland FP-30, piano digital portátil, ofrece autenticidad de sonido de piano de cola en un diseño compacto para músicos en movimiento.",
    image: "https://www.manual.ar/thumbs/products/l/1450337-roland-fp-30x.jpg",
  },
  {
    id: "8",
    instrument: "Korg Kronos 88",
    category: "Pianos",
    price: 3500,
    description: "El Korg Kronos 88 es una estación de trabajo poderosa para producción musical. Con teclas contrapesadas y una variedad de sonidos, es esencial para músicos y productores que buscan versatilidad y calidad en un solo dispositivo.",
    alt:
      "El Korg Kronos 88, una workstation potente con teclas contrapesadas, es esencial para productores y músicos que buscan calidad y versatilidad.",
    image:
      "https://www.b2bmusicstore.com.ar/wp-content/uploads/korg-kronos-2-88-2.jpg",
  },
  {
    id: "9",
    instrument: "Kawai ES8",
    category: "Pianos",
    price: 1800,
    description: "El Kawai ES8 es la elección predilecta para músicos que buscan la combinación perfecta de autenticidad tonal, sensación táctil realista y versatilidad en un formato portátil. Su diseño elegante, junto con su capacidad para inspirar y potenciar la creatividad musical, lo posiciona como un referente en la categoría de pianos digitales.",
    alt:
      "El piano digital Kawai ES8, con teclas contrapesadas y sonidos auténticos, proporciona una experiencia de piano premium para músicos exigentes.",
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/23/230175/600/preview_10.jpg",
  },
  {
    id: "10",
    instrument: "Fender Deluxe Reverb",
    category: "Amplificadores",
    price: 1300,
    description: "El Fender Deluxe Reverb no es simplemente un amplificador, sino una expresión sonora auténtica de la rica historia musical de Fender. Su combinación de características distintivas, tono excepcional y estilo atemporal lo convierte en una elección natural para aquellos que buscan una experiencia sonora Fender inconfundible.",
    alt:
      "El amplificador Fender Deluxe Reverb ofrece un tono limpio y vibrante, ideal para guitarristas que buscan calidad y versatilidad.",
    image:
      "https://distingomusicstores.com/wp-content/uploads/2022/02/Fender-65-DELUXE-REVERB%C2%AE.jpg",
  },
  {
    id: "11",
    instrument: "Fender Bassman",
    category: "Amplificadores",
    price: 1200,
    description: "El Fender Bassman, amplificador clásico para bajos, proporciona tonos cálidos y vintage que han definido el sonido del bajo eléctrico. Con su diseño atemporal, es la elección perfecta para bajistas que buscan un sonido auténtico y lleno de carácter.",
    alt:
      "El Fender Bassman, clásico amplificador para bajos, proporciona tonos cálidos y vintage que han definido el sonido del bajo eléctrico.",
    image: "https://www.long-mcquade.com/files/610/2171000010_xl.jpg",
  },
  {
    id: "12",
    instrument: "Roland JC-120",
    category: "Amplificadores",
    price: 800,
    description: "El Roland JC-120 es conocido por su limpieza y sonido estéreo distintivo. Este amplificador ha sido una opción favorita entre guitarristas que buscan una reproducción fiel del sonido, especialmente para estilos que requieren claridad y versatilidad.",
    alt:
      "El Roland JC-120, conocido por su limpieza y sonido estéreo distintivo, es una elección popular entre guitarristas para una reproducción fiel del sonido.",
    image:
      "https://acdn.mitiendanube.com/stores/001/312/585/products/roland391-1a7d066a587f48ca4616359842476978-1024-1024.jpg",
  },
  {
    id: "13",
    instrument: "Gibson Les Paul Standard",
    category: "Guitarras",
    price: 2500,
    description: "La Gibson Les Paul Standard es una obra maestra en diseño y tono. Con una construcción de alta calidad, esta guitarra ofrece un tono poderoso y versatilidad, estableciéndose como un estándar en el mundo de las guitarras eléctricas.",
    alt:
      "La Gibson Les Paul Standard, icónica por su tono poderoso, artesanía superior y diseño clásico, es una elección preferida entre guitarristas de todos los estilos.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_894367-MLA69429285313_052023-O.webp",
  },
  {
    id: "14",
    instrument: "Pearl Masterworks",
    category: "Percusion",
    price: 4500,
    description: "La Pearl Masterworks es una batería de alta gama con cascos personalizados y acabados impresionantes. Diseñada para músicos que buscan lo mejor en calidad y artesanía, esta batería ofrece una experiencia de interpretación excepcional.",
    alt:
      "La Pearl Masterworks, con cascos personalizados y acabados impresionantes, es una batería de alta gama diseñada para músicos que buscan calidad excepcional.",
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/57/577485/600/preview.jpg",
  },
  {
    id: "15",
    instrument: "Yamaha CP88",
    category: "Pianos",
    price: 2500,
    description: "El Yamaha CP88 no solo reproduce sonidos de alta calidad, sino que también ofrece una experiencia de interpretación que refleja la rica herencia de Yamaha en la fabricación de pianos. Su combinación de autenticidad sonora, diseño duradero y funciones avanzadas lo convierte en un instrumento de escenario excepcionalmente atractivo para aquellos que buscan lo mejor en expresión musical.",
    alt:
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
      resolve(productList.filter(prod => prod.category === upperCategory));
    }, 500);
  });
};
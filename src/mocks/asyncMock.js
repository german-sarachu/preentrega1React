const products = [
  {
    id: 1,
    title: "Pan de masa madre",
    price: 3.99,
    description:
      "Delicioso pan elaborado con masa madre, perfecto para acompañar tus comidas.",
    img: "https://images.pexels.com/photos/7966011/pexels-photo-7966011.jpeg",
    stock: 20,
    category: "panificados"
  },
  {
    id: 2,
    title: "Croissant de mantequilla",
    price: 2.49,
    description:
      "Crujientes croissants de mantequilla, ideales para disfrutar en el desayuno o la merienda.",
    img: "https://images.pexels.com/photos/792404/pexels-photo-792404.jpeg",
    stock: 15,
    category: "panificados"
  },
  {
    id: 3,
    title: "Baguette tradicional",
    price: 1.99,
    description:
      "Baguette clásica, horneada a la perfección para obtener una corteza crujiente y una miga suave.",
    img: "https://images.pexels.com/photos/8350195/pexels-photo-8350195.jpeg",
    stock: 25,
    category: "panificados"
  },
  {
    id: 4,
    title: "Pan de pasas y nueces",
    price: 4.49,
    description:
      "Pan artesanal con pasas y nueces, perfecto para disfrutar en el desayuno o como tentempié.",
    img: "https://images.pexels.com/photos/6059777/pexels-photo-6059777.jpeg",
    stock: 18,
    category: "panificados"
  },
  {
    id: 5,
    title: "Tarta de manzana",
    price: 12.99,
    description:
      "Deliciosa tarta de manzana casera, con una mezcla perfecta de dulzura y acidez.",
    img: "https://images.pexels.com/photos/10978414/pexels-photo-10978414.jpeg",
    stock: 10,
    category: "panificados"
  },
  {
    id: 6,
    title: "Pan de centeno",
    price: 3.29,
    description:
      "Pan elaborado con harina de centeno, con un sabor único y un ligero toque agridulce.",
    img: "https://images.pexels.com/photos/5869670/pexels-photo-5869670.jpeg",
    stock: 22,
    category: "dulces"
  },
  {
    id: 7,
    title: "Bollo de chocolate",
    price: 1.79,
    description:
      "Bollo esponjoso relleno de delicioso chocolate, perfecto para un capricho dulce.",
    img: "https://images.pexels.com/photos/6390644/pexels-photo-6390644.jpeg",
    stock: 30,
    category: "dulces"
  },
  {
    id: 8,
    title: "Empanada gallega",
    price: 6.99,
    description:
      "Empanada gallega casera, rellena de sabrosa mezcla de carne, pescado o verduras.",
    img: "https://images.pexels.com/photos/288264/pexels-photo-288264.jpeg",
    stock: 12,
    category: "dulces"
  },
  {
    id: 9,
    title: "Palmera de hojaldre",
    price: 1.49,
    description:
      "Palmera de hojaldre crujiente y dulce, ideal para acompañar tu café o té.",
    img: "https://images.pexels.com/photos/17399996/pexels-photo-17399996/free-photo-of-panaderia-dulce-galletas-snack.jpeg",
    stock: 25,
    category: "ocasiones"
  },
  {
    id: 10,
    title: "Pan de molde integral",
    price: 2.99,
    description:
      "Pan de molde integral, rico en fibra y nutrientes, perfecto para preparar deliciosos sándwiches.",
    img: "https://slicedbreadsolutions.com/wp-content/uploads/2023/12/natalie-behn-cuPM3VNidkM-unsplash-980x654.jpg",
    stock: 20,
    category: "finDeAnio"
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 3000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 3000);
  });
};

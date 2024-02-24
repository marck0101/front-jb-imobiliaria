import product1 from "assets/images/products/product-1-min.jpg";
import product2 from "assets/images/products/product-2-min.jpg";
import product3 from "assets/images/products/product-3-min.jpg";
import product4 from "assets/images/products/product-5-min.jpg";
import product5 from "assets/images/products/product-6-min.jpg";
import product6 from "assets/images/products/product-7-min.jpg";

const Infs = [
  {
    _id: "1",
    image: product2,
    title: "Lindo e acolhedor apartamento",
    description:
      "Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto.",
    categories: ["Apartamento inteiro", " 3 Hóspedes", "2 Camas"],
  },
  {
    _id: "2",
    image: product1,
    title: "Quarto individual no centro da cidade",
    description:
      "Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto.",
    categories: ["Apartamento inteiro", " 3 Hóspedes", "2 Camas"],
  },
  {
    _id: "3",
    image: product3,
    title: "Quarto individual no centro da cidade",
    description:
      "Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto.",
    categories: ["Apartamento inteiro", " 3 Hóspedes", "2 Camas"],
  },
  {
    _id: "4",
    image: product4,
    title: "Quarto individual no centro da cidade",
    description:
      "Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto.",
    categories: ["Apartamento inteiro", " 3 Hóspedes", "2 Camas"],
  },
  {
    _id: "5",
    image: product5,
    title: "Quarto individual no centro da cidade",
    description:
      "Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto.",
    categories: ["Apartamento inteiro", " 3 Hóspedes", "2 Camas"],
  },
  {
    _id: "6",
    image: product2,
    title: "Quarto individual no centro da cidade",
    description:
      "Casa nova, perto do centro, texto textotextoo texto texto textotextoo texto, texto textotextoo texto texto textotextoo texto.",
    categories: ["Apartamento inteiro", " 3 Hóspedes", "2 Camas"],
  },
];

export const getAllInfs = () => {
  return Promise.resolve(Infs);
};

export const getInfById = (id) => {
  const info = Infs.find((inf) => inf._id === id);
  return Promise.resolve(info);
};
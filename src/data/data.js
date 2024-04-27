export const shirts = [
  "black-1.jpg",
  "black-2.jpg",
  "gray-1.jpg",
  "gray-2.jpg",
];

export const colors = ["white", "black", "blue", "red"];
export const sizes = ["S", "M", "L", "XL", "XXL"];

export const goods = [
  {
    id: 1,
    name: "Футболка белая",
    pictures: `http://res.cloudinary.com/dgfisnrrt/image/upload/v1713118537/tvfcmucaok4ijluvdtk9.jpg`,
    category: "tshirts",
    cost: 3600,
    count: 20,
    outlay: 2000,
  },
  {
    id: 2,
    name: "Футболка белая",
    pictures: `http://res.cloudinary.com/dgfisnrrt/image/upload/v1713118537/tvfcmucaok4ijluvdtk9.jpg`,
    category: "tshirts",
    cost: 4600,
    count: 20,
    outlay: 3000,
  },
  {
    id: 3,
    name: "Футболка серая с рисунком",
    pictures: `/shirts/${shirts[2]}`,
    category: "tshirts",
    cost: 3600,
    count: 20,
    outlay: 2000,
  },
  {
    id: 4,
    name: "Футболка дизайнерская Drunk D",
    pictures: `/shirts/${shirts[3]}`,
    category: "designer-clothes",
    cost: 3600,
    count: 20,
    outlay: 2000,
  },
];

export const orders = [
  {
    _id: 1,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "fulfilled",
    goods: [goods[0], goods[1]],
    cost: 3600,
    date: "02.26.24",
    phone: "8-800-800-88-88",
  },
  {
    _id: 2,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "unfulfilled",
    goods: [goods[0], goods[1]],
    cost: 3600,
    date: "04.26.24",
    phone: "8-800-800-88-88",
  },
  {
    _id: 3,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ruuuuuuu",
    status: "unfulfilled",
    goods: [goods[0], goods[1]],
    cost: 3600,
    date: "01.26.24",
    phone: "8-800-800-88-88",
  },
  {
    _id: 4,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "fulfilled",
    goods: [goods[0], goods[1]],
    cost: 3600,
    date: "03.26.24",
    phone: "8-800-800-88-88",
  },
];

export const listNav = [
  { name: "Контакты", link: "/contacts" },
  { name: "Доставка и оплата", link: "/delivery" },
  { name: "Программа лояльности", link: "/loyalty" },
  { name: "Политика обработки персональных данных", link: "/policy" },
];

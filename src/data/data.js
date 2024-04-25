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
    category: "Футболки",
    cost: 3600,
  },
  {
    id: 2,
    name: "Футболка белая",
    pictures: `http://res.cloudinary.com/dgfisnrrt/image/upload/v1713118537/tvfcmucaok4ijluvdtk9.jpg`,
    category: "Футболки",
    cost: 4600,
  },
  {
    id: 3,
    name: "Футболка серая с рисунком",
    pictures: `/shirts/${shirts[2]}`,
    category: "Футболки",
    price: 3600,
  },
  {
    id: 4,
    name: "Футболка дизайнерская Drunk D",
    pictures: `/shirts/${shirts[3]}`,
    cost: 3600,
    count: 20,
    category: "Дизайнерская одежда",
  },
];

export const orders = [
  {
    _id: 1,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "Выполняется",
    goods: [goods[0], goods[1]],
    cost: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
  {
    _id: 2,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "В ожидании",
    price: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
  {
    _id: 3,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "В ожидании",
    price: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
  {
    _id: 4,
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "Выполнен",
    price: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
];

export const listNav = [
  { name: "Контакты", link: "/contacts" },
  { name: "Доставка и оплата", link: "/delivery" },
  { name: "Программа лояльности", link: "/loyalty" },
  { name: "Политика обработки персональных данных", link: "/policy" },
];

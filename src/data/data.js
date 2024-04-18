export const orders = [
  {
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "Выполняется",
    price: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
  {
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "В ожидании",
    price: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
  {
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "В ожидании",
    price: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
  {
    customerName: "Деды Эльдар",
    email: "eldedy@mail.ru",
    status: "Выполнен",
    price: 3600,
    date: "05.03.23",
    phone: "8-800-800-88-88",
  },
];

export const shirts = [
  "black-1.jpg",
  "black-2.jpg",
  "gray-1.jpg",
  "gray-2.jpg",
];

export const goods = [
  {
    id: 1,
    name: "Футболка черная с логотипом",
    pic: `/shirts/${shirts[0]}`,
    category: "Футболки",
    price: 3600,
  },
  {
    id: 2,
    name: "Футболка черная с надписью",
    pic: `/shirts/${shirts[1]}`,
    category: "Футболки",
    price: 3600,
  },
  {
    id: 3,
    name: "Футболка серая с рисунком",
    pic: `/shirts/${shirts[2]}`,
    category: "Футболки",
    price: 3600,
  },
  {
    id: 4,
    name: "Футболка дизайнерская Drunk D",
    pic: `/shirts/${shirts[3]}`,
    cost: 3600,
    count: 20,
    category: "Дизайнерская одежда",
  },
];

export const listNav = [
  { name: "Контакты", link: "/contacts" },
  { name: "Доставка и оплата", link: "/delivery" },
  { name: "Программа лояльности", link: "/loyalty" },
  { name: "Политика обработки персональных данных", link: "/policy" },
];

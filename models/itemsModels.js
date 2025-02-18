const itemModels = [
  {
    id: 1,
    name: "휴지",
    category: "생활용품",
    price: 45000,
    stock: 50,
  },
  {
    id: 2,
    name: "주방기구",
    category: "주방",
    price: 66000,
    stock: 30,
  },
  {
    id: 3,
    name: "세척기",
    category: "가전",
    price: 665000,
    stock: 10,
  },
  {
    id: 4,
    name: "자전거",
    category: "레저",
    price: 124000,
    stock: 20,
  },
  {
    id: 5,
    name: "세탁기",
    category: "가전",
    price: 66000,
    stock: 15,
  },
];

// 전체 가져오는 함수
const allData = () => {
  return itemModels;
};

// 해당하는 아이디 확인하는 함수
const itemById = (id) => {
  return itemModels.find((item) => item.id === parseInt(id));
};

// 제일 비싼 아이템 확인하는 함수
const expensiveItem = () => {
  const expensiveIt = Math.max(...itemModels.map((x) => x.price));
  const mostexpensiveIt = itemModels.find((x) => x.price === expensiveIt);
  return mostexpensiveIt;
};

// category가 가전인 것을 확인하는 함수
const gajenCa = () => {
  return itemModels.filter((x) => x.category === "가전");
};

// 제일 stock이 높은 것을 확인하는 함수
const highStock = () => {
  const highStockIt = Math.max(...itemModels.map((x) => x.stock));
  const mosthighStockIt = itemModels.find((x) => x.stock === highStockIt);
  return mosthighStockIt;
};

// 모든 함수
module.exports = { allData, itemById, expensiveItem, gajenCa, highStock };

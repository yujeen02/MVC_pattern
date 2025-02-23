const fruitModels = [
  {
    id: 1,
    name: "사과",
    color: "빨강",
    price: 3000,
    weight: 200,
  },
  {
    id: 2,
    name: "바나나",
    color: "노랑",
    price: 2500,
    weight: 150,
  },
  {
    id: 3,
    name: "포도",
    color: "보라",
    price: 5000,
    weight: 500,
  },
  {
    id: 4,
    name: "수박",
    color: "초록",
    price: 15000,
    weight: 700,
  },
  {
    id: 5,
    name: "오렌지",
    color: "주황",
    price: 4000,
    weight: 250,
  },
];

// 전체 가져오는 함수
const allData = () => {
  return fruitModels;
};

// 특정 id에 해당하는 과일 찾기
const fruitById = (id) => {
  return fruitModels.find((fruit) => fruit.id === parseInt(id));
};

// 색상이 빨강인 과일 찾기
const redFruit = () => {
  return fruitModels.find((x) => x.color === "빨강");
};

// 제일 비싼 과일 찾기
const expensiveFruit = () => {
  const highFruitIt = Math.max(...fruitModels.map((x) => x.price));
  const mosthighpriceIt = fruitModels.find((x) => x.price === highFruitIt);
  return mosthighpriceIt;
};

// 제일 무거운 과일 찾기
const weightFruit = () => {
  const highWeightFruitIt = Math.max(...fruitModels.map((x) => x.weight));
  const mosthighpriceIt = fruitModels.find(
    (x) => x.weight === highWeightFruitIt
  );
  return mosthighpriceIt;
};

// 모든 함수
module.exports = { allData, fruitById, redFruit, expensiveFruit, weightFruit };

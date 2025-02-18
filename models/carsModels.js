const carModels = [
  {
    id: 1,
    brand: "현대",
    model: "아반떼",
    price: 18000000,
    fuel: "가솔린",
  },
  {
    id: 2,
    brand: "기아",
    model: "K5",
    price: 25000000,
    fuel: "디젤",
  },
  {
    id: 3,
    brand: "벤츠",
    model: "C 클래스",
    price: 55000000,
    fuel: "가솔린",
  },
  {
    id: 6,
    brand: "현대",
    model: "쏘나타",
    price: 28000000,
    fuel: "가솔린",
  },
  {
    id: 5,
    brand: "테슬라",
    model: "모델 3",
    price: 60000000,
    fuel: "전기",
  },
];

// 전체 가져오는 함수
const allData = () => {
  return carModels;
};

// 해당 아이디로 이동하는 함수
const carById = (id) => {
  return carModels.find((car) => car.id === parseInt(id));
};

// 가장 비싼 자동차 찾기
const expensivecar = () => {
  const highPriceIt = Math.max(...carModels.map((x) => x.price));
  const mosthighpriceIt = carModels.filter((x) => x.price === highPriceIt);
  return mosthighpriceIt;
};

// 연료별로
const groupByFuel = () => {
  let groupedCars = {};

  carModels.forEach((car) => {
    if (!groupedCars[car.fuel]) {
      groupedCars[car.fuel] = [];
    }
    groupedCars[car.fuel].push(car);
  });

  return groupedCars;
};

// 현대 차
const hyundaiCar = () => {
  return carModels.filter((car) => car.brand === "현대");
};

// 모든 함수
module.exports = { allData, carById, expensivecar, groupByFuel, hyundaiCar };

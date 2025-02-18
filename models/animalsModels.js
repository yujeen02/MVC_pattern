const animalModels = [
  {
    id: 1,
    species: "강아지",
    name: "바둑이",
    age: 3,
    breed: "진돗개",
  },
  {
    id: 2,
    species: "고양이",
    name: "나비",
    age: 2,
    breed: "코리안 숏헤어",
  },
  {
    id: 3,
    species: "햄스터",
    name: "쫑쫑이",
    age: 1,
    breed: "골든 햄스터",
  },
  {
    id: 4,
    species: "앵무새",
    name: "짹짹이",
    age: 4,
    breed: "왕관앵무새",
  },
  {
    id: 5,
    species: "강아지",
    name: "토토",
    age: 2,
    breed: "웰시코기",
  },
];

// 전체 가져오는 함수
const allData = () => {
  return animalModels;
};

// 특정 id에 해당하는 동물 찾기
const animalsById = (id) => {
  return animalModels.find((animal) => animal.id === parseInt(id));
};

// 강아지인 동물 찾기
const dogAnimal = () => {
  return animalModels.filter((animal) => animal.species === "강아지");
};

// 동물 이름에 이가 들어가는 동물 찾기
const leeByName = () => {
  return animalModels.filter((animal) => animal.name.includes("이"));
};

// 제일 어린 동물 찾기
const youngAnimal = () => {
  const youngAni = Math.min(...animalModels.map((x) => x.age));
  const mostYoungAni = animalModels.filter((x) => x.age === youngAni);
  return mostYoungAni;
};

// 모든 함수
module.exports = { allData, animalsById, dogAnimal, leeByName, youngAnimal };

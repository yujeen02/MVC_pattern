const userModels = [
  {
    id: 1,
    name: "김철수",
    age: 25,
    email: "chulsoo@example.com",
  },
  {
    id: 2,
    name: "이영희",
    age: 30,
    email: "younghee@example.com",
  },
  {
    id: 3,
    name: "박민수",
    age: 22,
    email: "minsoo@example.com",
  },
  {
    id: 4,
    name: "정지훈",
    age: 35,
    email: "jihoon@example.com",
  },
  {
    id: 5,
    name: "한가을",
    age: 28,
    email: "gaeul@example.com",
  },
];

// 전체 가져오는 함수
const allData = () => {
  return userModels;
};

// 특정 아이디로 이동하는 함수
const userById = (id) => {
  return userModels.find((user) => user.id === parseInt(id));
};

// 제일 나이가 많은 사람
const olderPeople = () => {
  const olderPeo = Math.max(...userModels.map((x) => x.age));
  const mostOlderPeo = userModels.find((x) => x.age === olderPeo);
  return mostOlderPeo;
};

// 제일 나이가 어린 사람
const youngerPeople = () => {
  const youngPeo = Math.min(...userModels.map((x) => x.age));
  const mostYoungPeo = userModels.find((x) => x.age === youngPeo);
  return mostYoungPeo;
};

// 30대인 사람
const peopleTh = () => {
  return userModels.filter((x) => x.age >= 30);
};

// 모든 함수
module.exports = { allData, userById, olderPeople, youngerPeople, peopleTh };

const FRUIT_TYPE = {
  APPLE: 'apple',
  ORANGE: 'orange',
  BANANA: 'banana',
}
const fruits = [
  {type: FRUIT_TYPE.APPLE, price: 1000},
  {type: FRUIT_TYPE.ORANGE, price: 2000},
  {type: FRUIT_TYPE.BANANA, price: 3000},
  {type: FRUIT_TYPE.BANANA, price: 2000},
  {type: FRUIT_TYPE.APPLE, price: 500},
  {type: FRUIT_TYPE.BANANA, price: 1500},
  {type: FRUIT_TYPE.APPLE, price: 200},
  {type: FRUIT_TYPE.ORANGE, price: 3000},
]
// 1. fruits 배열을 type에 따라 다른 Array로 분리하라.
let appleList = fruits.filter(fruit => fruit.type === FRUIT_TYPE.APPLE); // apple type의 객체들을 저장
let orangeList = fruits.filter(fruit => fruit.type === FRUIT_TYPE.ORANGE); // orange type의 객체들을 저장
let bananaList = fruits.filter(fruit => fruit.type === FRUIT_TYPE.BANANA); // banana type의 객체들을 저장

// 2. fruits 배열을 바탕으로, 모든 과일들의 price 합을 구하라. (reduce 사용)
let fruitsPriceSum = fruits.reduce((acc, x) => acc + x.price, 0); // 모든 과일들의 price 합
// 3. fruits 배열을 바탕으로, 모든 과일들에 key는 name, value는 {index + "-" + type}인 property를 추가하라.
//ex) type : apple, index: 0이면 name: '0-apple'이라는 property를 추가함
let newFruits = fruits.map((fruit, i) => Object.assign({ name: `${i}-${fruit.type}` }, fruit)); // name이 추가된 배열

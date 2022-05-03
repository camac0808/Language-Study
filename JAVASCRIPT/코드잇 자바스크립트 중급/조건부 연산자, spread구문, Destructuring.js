{
  /* <조건부 연산자> 
삼항 연산자, 3개의 피연산자 */
}

const cutOff = 80;
const passCheck = (score) => (score > cutOff ? "합격" : "불합격");
console.log(passCheck(70)); // 불합격

{
  /* <Spread 구문> */
}

const webPublishing = ["HTML", "CSS"];
const interactiveWeb = [...webPublishing, "JavaScript"];

console.log(interactiveWeb); // [ 'HTML', 'CSS', 'JavaScript' ]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3);

{
  /* 배열을 객체로 spread 가능하지만 */
}

const members = ["태호", "종훈", "우재"];
const newObject = { ...members };
console.log(newObject); //{ '0': '태호', '1': '종훈', '2': '우재' }

{
  /* 객체를 배열로 spread는 불가하다*/
}

const topic = {
  name: "모던 자바스크립트",
  language: "JavaScript",
};
// const newArray = [...topic]; // TypeError!

{
  /* <모던 프로퍼티 표기법> 
프로퍼티의 네임이나 변수 축약사용가능 */
}
function sayHi() {
  console.log("Hi!");
}
const title = "codeit";
const birth = 2017;
const job = "프로그래밍 강사";

const user = {
  title,
  birth,
  job,
  sayHi,
};

// function 생략 가능
const PERSON = {
  firstName: "Tess",
  lastName: "Jang",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(PERSON.getFullName()); // Tess Jang

{
  /* <구조분해>
Destructuring 배열의 요소나 객체의 프로퍼티값을 개별적인 변수로 따로 할당해서 다룰 수 있다 */
}

const member = ["코딩하는효준", "글쓰는유나", "편집하는민환"];
const [macbook, ipad, coupon] = member;

console.log(macbook); // 코딩하는효준
console.log(ipad); // 글쓰는유나
console.log(coupon); // 편집하는민환

// Object Destructuring
const macbookPro = {
  title2: "맥북 프로 16형",
  price: 3690000,
};

const { title2, price } = macbookPro;
console.log(title2); // 맥북 프로 16형
console.log(price); // 3690000

// Array Destructuring, rest 파라미터 활용
// const members = ['코딩하는효준', '글쓰는유나', undefined, '편집하는민환', '촬영하는재하'];
// const [macbook, ipad, airpod = '녹음하는규식', ...coupon] = members;

// console.log(macbook); // 코딩하는효준
// console.log(ipad); // 글쓰는유나
// console.log(airpod); // 녹음하는규식
// console.log(coupon); // (2) ["편집하는민환", "촬영하는재하"]

{
  /* <에러와 에러객체> */
}

throw new TypeError("타입 에러가 발생했습니다.");

try {
  // 실행할 코드
} catch (error) {
  // 에러 발생 시 동작할 코드
} finally {
  // 항상 실행할 코드
}

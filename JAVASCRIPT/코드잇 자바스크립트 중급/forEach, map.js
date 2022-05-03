{
  /* <배열 메소드> 
forEach와 map 
배열의 반복작업이 필요하면 forEach를, 반복작업을 통해서 새로운 배열이 필요하면 map 메소드를 활용
 */
}

// for of 배열 반복문 = forEach 배열 반복문
const members = ["영훈", "윤수", "동욱", "태호"];
for (let member of members) {
  console.log(member);
}
members.forEach((member) => {
  console.log(member);
}); // 같은 결과 나옴

// 인덱스 출력, 배열 자체 출력
members.forEach((member, i, arr) => {
  console.log(i, member);
  console.log(arr);
});

// map 메소드

const firstName = ["영훈", "윤수"];
const lastName = ["강", "최"];

// map은 배열을 return하므로 변수에 담을 수 있다.
const fullName = firstName.map((firstName, i) => lastName[i] + firstName);
console.log(fullName);

// map을 활용한 예시
const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];
const answer = quiz.map((word, i) => word[i])
console.log(answer); // ["Y", "O", "U", "N", "G"]


{
  /* forEach를 활용한 todolist 작성 */
}
const list = document.querySelector(".list");
const data = [
  {
    title: "자바스크립트 공부하기",
    isClear: true,
  },
  {
    title: "쓰레기 분리수거",
    isClear: false,
  },
  {
    title: "고양이 밥주기",
    isClear: true,
  },
  {
    title: "독서하기",
    isClear: false,
  },
  {
    title: "영어 공부하기",
    isClear: false,
  },
];

data.forEach((todo, i) => {
  const li = document.createElement("li");
  todo.isClear ? li.classList.add("item", "done") : li.classList.add("item");
  li.innerText = `${i + 1}. ${todo.title}`;
  list.appendChild(li);
});

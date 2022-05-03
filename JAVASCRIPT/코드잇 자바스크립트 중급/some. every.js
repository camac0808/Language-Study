{/* some 메소드 every 메소드 */}

const numbers = [1, 3, 5, 7, 9]
//some : 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((el) => el > 5);
console.log(someReturn) // True

const Return = numbers.some((el, i) => {
  console.log(i) // 5보다 큰 값 나올때까지 반복 후
  return el > 5; // 7 나오면 종료
})

//every : 모든 요소가 조건을 만족하는지 / 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((el) => el > 5);
console.log(everyReturn) // False

const Every = numbers.every((el, i) => {
  console.log(i) // 조건 만족하지 않으니 하나만 출력하고
  return el > 5; // 바로 종료
})





// forEach some every 조건 연산자 활용문제 중요! 
const spait = [
  { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
  { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] },
  { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
  { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
  { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
];

function checkSpy(team) {
  const result = team.members.every((member) => member === '스파이')
  const message = result ? `팀 ${team.codeName} 에는 이중 스파이가 없습니다.` : `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;
  console.log(message)
}

spait.forEach((team) => checkSpy(team));
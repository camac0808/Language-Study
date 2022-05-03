{
  /* reduce 메소드 */
}

const numbers = [1, 2, 3, 4];

numbers.reduce((acc, el, i, arr) =>{
  return nextAccValue;
}, initialAccValue)


// 예제
const data = [ 
  { company: 'Naber', month: 3 },
	{ company: 'Amajohn', month: 12 },
	{ company: 'Coogle', month: 10 },
  { company: 'Ittel', month: 6 },
  { company: 'Sasung', month: 4 },
  { company: 'CaCao', month: 3 },
	{ company: 'Microhard', month: 17 },
];

// acc에 초기값 0 할당 , 그 이후 el 요소값 더해지고 acc에 리턴된다.
const totalCareer = data.reduce((acc, el) => {
  return acc + el.month;
}, 0);

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);
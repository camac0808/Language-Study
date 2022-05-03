{ /* sort 메소드 
문자열 순서대로 정렬 */}

const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]

// 숫자는 정렬이 잘되지 않기 때문에 (유니코드때문)    

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]


{ /* reverse 메소드 
배열 뒤집기 */}

const letter = ['a', 'c', 'b'];
const number = [421, 721, 353];

letter.reverse();
number.reverse();


// Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷합니다.
// 하지만, 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 
// Map은 메소드를 통해서 값을 추가하거나 접근할 수 있는데요.

// new 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있습니다.

// map.set(key, value): key를 이용해 value를 추가하는 메소드.
// map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
// map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
// map.delete(key): key에 해당하는 값을 삭제하는 메소드.
// map.clear(): Map 안의 모든 요소를 제거하는 메소드.
// map.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

const map = new Map();

map.set("title", '문자형 key')
console.log(map.get('title')) // '문자형 key'

console.log(map.has("title")) // true

console.log(map.size) // 1

// Set
// Set은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷합니다.
// 하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있는데요.

// Map과 마찬가지로 new 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있습니다.

// set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
// set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
// set.delete(value): 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
// set.clear(): Set 안의 모든 요소를 제거하는 메소드.
// set.size: 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)

// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}
{/* filter 메소드, find 메소드 */}

const devices = [
  {name: "galaxy", brand: "samsung"},
  {name: "ipad", brand: "apple"},
  {name: "imac", brand: "apple"},
  {name: "galaxywatch", brand: "samsung"},
]
const apple = devices.filter((el) => el.brand === "apple");
console.log(apple) // 배열 리턴
console.log(...apple) // 배열을 spread 구문으로 벗긴다

// 하나의 값만 찾고 싶을때 find 메소드

const apples = devices.find((el) => el.brand === "apple");
console.log(apples) // 하나만 출력

const appleIndex = devices.find((el, i) => {
  console.log(i)
  el.brand === "apple"
});
console.log(appleIndex)

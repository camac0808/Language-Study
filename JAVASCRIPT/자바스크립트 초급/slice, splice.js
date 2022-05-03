{
  /* Array.slice() 슬라이스 추출
Array.splice() 스플라이스 부분 삭제 후 나머지 부분 잇고 추출*/
}
var arr1 = [1, 2, 3, 4, 5]
console.log(arr1.slice(2, 4)) // 인덱스 2부터 3까지 가져옴 [3, 4]
console.log(arr1) // [1, 2, 3, 4, 5] 배열은 그대로
console.log(arr1.splice(2, 2)) // 인덱스 2부터 2개 splice함 [3, 4]
console.log(arr1) // 나머지 배열 return [1, 2, 5]
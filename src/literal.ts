export {}
interface A { a: string };
const obj1: A = { a: 'aa', age: 33 } // 타입을 지정하고 객체 리터럴을 넣으면 잉여 속성 검사를 함

const obj = { a: 'aa', age: 33 }
const obj2: A = obj // 객체 리터럴이 아닌 변수를 넣으면 잉여속성 검사를 하지 않는다.




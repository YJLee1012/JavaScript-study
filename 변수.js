//변수
//var, let, const
//var는 한번 선언된 변수를 다시 선언할 수 있다.
//let은 다시 선언시 error
//var는 선언하기 전에 사용할 수 있다.//hoisting//undefined
var name;
console.log(name);//undefined
name = 'Mike';

//호이스팅 : '스코프 내부' 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
//let은 왜 var처럼 동작하지 않고 에러?
//=> TDZ : Temporal Dead Zone 때문
//TDZ영역에 있는 변수들은 사용불가
// let, const는 TDZ에 영향
// 할당하기 전에는 사용 x 코드 예측가능, 잠재적 버그 줄일 수 있음

// var
// 1. 선언 및 초기화 단계(동시에)
// 2. 할당 단계

// let
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계

// const
// 1. 선언+초기화+할당

let name;
name = 'Mike';

var age;
age = 30;

const gender;
gender = 'male'; 
//에러 //선언하면서 할당을 안했기 때문

// var: 함수 스코프
// var에서는 유일하게 벗어날 수 없는 스코프가 함수 내에 선언되었을때
// let, const : 블록 스코프(함수,if,for,while,try/catch문 등)
// 코드블록내에서만 유효하며 외부 블록에서는 접근 불가

// var는 사용하지 않고
// let, const 사용
// 예측가능한 결과를 낼 수 있고, 버그를 줄일 수 있다.
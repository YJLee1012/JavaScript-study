/*
구조 분해 할당
구조 분해 할당 구문은
배열이나 객체의 속성을 분해해서
그 값을 변수에 담을 수 있게 하는 표현식
*/

//배열 구조 분해
let [x,y] = [1,2];
console.log(x);//1
console.log(y);//2

let str = "Mike-Tom-Jane";
let [user1,user2,user3] = str.split('-');
//Mike,Tom,Jane

//기본값 셋팅
let [a=3,b=4,c=5] = [1,2];
//c는 기본값 5 유지

//일부 반환값 무시
let [user1, ,user2] = ['Mike','Tom','Jane','Tony'];
console.log(user1);//Mike
console.log(user2);//Jane

//바꿔치기
let a=1;
let b=2;
[a,b]=[b,a];//임시변수 안쓰고 한번에 바꿔치기 가능


//객체 구조 분해
let user = {name:'Mike',age:30};
let {name,age}=user;
//let {age,name}=user;//순서 바꿔도 동일하게 동작
console.log(name);//'Mike'
console.log(age);//30

//새로운 변수 이름으로 할당
let {name:userName, age:userAge} = user;

//기본값
let{name,age,gender='male'}=user;

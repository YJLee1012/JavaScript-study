//Rest parameters, Spread syntax
//(...)형태
/***
 * arguments
 * 함수로 넘어 온 모든 인수에 접근가능
 * 함수내에서 이용 가능한 지역 변수
 * length/index 있음
 * Array형태의 '객체'
 * 배열의 내장 메서드 없음(forEach, map)
 */

function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName('Mike','Tom');
//2
//'Mike'
//'Tom'

//가급적 <나머지 매개변수> 사용 권장
//Rest parameters ...
//'정해지지 않은 개수의 인수를 배열로 나타낼 수 있게한다'
function showName(...names){
    console.log(names);
}
showName();//[]
showName('Mike');//['Mike']
showName('Mike','Tom');//'Mike', 'Tom']

//나머지 매개변수 예제
//전달 받은 모든 수를 더해야함.
function add(...numbers){
    let result =0;
    numbers.forEach(num=>(result+=num))
    console.log(result);
}
add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

//user객체를 만들어 주는 생성자 함수를 만들어
//주의할점 : 나머지 매개변수는 항상 뒤에 있어야함
function User(name,age,...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike',30,'html','css');
const user2 = new User('Jane',26,'JS','react');
const user3 = new User('Tom',10,'English');
console.log(user1);
console.log(user2);
console.log(user3);

/*
전개구문 (Spread syntax)
: 배열 , 객체 사용가능
*/
//배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = [0,...arr1,...arr2,7,8,9];
console.log(result);//0,1,2,3,4,5,6,7,8,9

//객체 전개구문쓰면,
//Object.assign()을 쓸 필요가 없어짐
//간편
let user = {name:'Mike', age:30};
let user2 = {...user};
user2.name = "Tom";
console.log(user.name);//"Mike"
console.log(user2.name);//"Tom"

//배열 예제
//arr1을 [4,5,6,1,2,3]으로
let arr1 = [1,2,3];
let arr2 = [4,5,6];

//전개구문 사용 x
arr2.reverse().forEach((num)=>{
    arr1.unshift(num);
})
//전개구문 사용 o 
arr1 = [...arr2,...arr1];
console.log(arr1);

//객체예제
let user = {name:'Mike'};
let info = {age:30};
let fe = ["JS","React"];
let lang = ["Korean","English"];

//전개구문 x
user = Object.assign({},user, info,{
    skills:[],
});
fe.forEach(item =>{
    user.skills.push(item);
})
lang.forEach(item=>{
    user.skills.push(item);
})

//전개구문 o
user ={
    ...user,
    ...info,
    skills = [...fe,...lang]
}
console.log(user);
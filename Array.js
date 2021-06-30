//Array Methods
//push()
//pop()
//unshift()//앞에 삽입
//shift()//앞에 삭제

//인덱스 n부터 m개를 지움
arr.splice(n,m)
arr.splice(n,m,x)//특정요소 지우고 x추가
let arr = [1,2,3,4,5];
arr.splice(1,3,100,200);
console.log(arr);//[1,100,200,5]
 
let arr= ["나는","철수","입니다"];
arr.splice(1,0,"대한민국","소방관")//m에 0이 들어왔을때
//아무것도 지우지 않고 추가됨
console.log(arr);//["나는","대한민국","소방관","철수","입니다"]

arr.splice()//삭제된 요소 반환
let arr = [1,2,3,4,5];
let result = arr.splice(1,2);
console.log(arr);//[1,4,5]
console.log(result); //[2,3]

//n부터 m까지 반환
arr.slice(n,m)
let arr = [1,2,3,4,5];
arr.slice(1,4);//[2,3,4]

let arr2 = arr.slice();//값 아무것도 안주면 그냥 배열복사됨
console.log(arr2);//[1,2,3,4,5]

arr.concat(arr2,arr3)//합쳐서 새배열 반환
let arr = [1,2];
arr.concat([3,4])//[1,2,3,4]
arr.concat([3,4],[5,6]);//[1,2,3,4,5,6]
arr.concat([3,4],5,6);//[1,2,3,4,5,6]

//배열반복 forEach
arr.forEach(fn)
let users = ['Mike','Tom','Jane'];
users.forEach((name,index,arr)=>{
    console.log(`${index+1}. ${name}`)
})

arr.indexOf(찾는문자, 시작위치)//해당 문자 인덱스 반환
arr.lastIndexOf(찾는문자)//끝에서부터 탐색가능

arr.includes()//포함하는지 확인 //true,false반환

arr.find(fn)//첫번째 true값만 반환하고 끝. 만약 없으면 undefined를 반환
arr.findIndex(fn)//조건에 맞는 인덱스번호를 찾아냄
//find는 딱 하나만 찾아

//filter //만족하는 모든 요소를 배열로 반환
arr.filter(fn)

//역순으로 재정렬
arr.reverse()

//map //함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
arr.map(fn)

let userList = [
    {name:'Mike', age : 30},
    {name:'Jane', age : 26},
    {name:'Tom', age : 12},
]

let newUserList = userList.map((user,i)=>{
    return Object.assign({},user,{
        isAdult : user.age>19,
        id : index + 1,
    })
})
console.log(newUserList);//id와 isAdult:true/false 추가된 객체 생성됨
console.log(userList);//기존 userList는 변경 x


//join,split
let arr = ["a","b","c"];
let result = arr. join("-");//a-b-c
console.log(result);

const users ="Mike,Jane,Tom";
const result = users.split(",");
console.log(result);//["Mike","Jane","Tom"]

//Array.isArray() 배열인지 아닌지 확인


/*
sort
배열 재정렬 
배열 자체가 변경되니 주의
인수로 정렬 로직을 담은 함수를 받음
*/
let arr = [1,5,4,2,3];
arr.sort();
console.log(arr);//[1,2,3,4,5]

let arr = [27,8,5,13];
arr.sort();
console.log(arr);//문자로 정렬되어 뒤죽박죽 결과
//[13,27,5,8]

//8,27,5,13
//5,8,27,13
//5,8,13,27
//인수로 함수
arr.sort((a,b)=>{
    console.log(a,b);
    return a-b;//더 작으면 앞으로
})
console.log(arr);//[5,8,13,27]

//보통은 쉽게 Lodash라이브러리 사용
_.sortBy(arr);//숫자든 문자든 정렬가능

/**
 reduce
 인수로 함수를 받음
 (누적 계산값, 현재값)=> { return 계산값 };
 */

//배열의 모든수 합치기
let arr = [1,2,3,4,5];
//for , for of, forEach
let result =0;
//1. forEach 배열 돌면서
arr.forEach((num)=>{
    result += num;
})
console.log(result);//15

//2.reduce는 한번에 처리가능
const result = arr.reduce((prev,cur)=>{
    return prev+cur;
},0)//초기값은 0(옵션이라 써도되고 안써도 됨)
console.log(result);//15

//예제
let userList = [
    {name:"Mike",age:30},
    {name:"Tom",age:10},
    {name:"Jane",age:27},
    {name:"Sue",age:26},
    {name:"Harry",age:42},
    {name:"Steve",age:60},
]
let result = userList.reduce((prev,cur)=>{
    if(cur.age>19){
        prev.push(cur.name);
    }
    return prev;
},[])//초기값 빈배열
console.log(result);//["Mike","Jane","Sue","Harry","Steve"]

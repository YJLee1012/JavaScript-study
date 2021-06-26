//1. Computed property
let a = 'age';
const user = {
    name : 'Mike',
    [a] : 30 //age:30
}
//식 자체를 넣는 것도 가능
const user = {
    [1+4] : 5,
    ["안녕"+"하세요"] : 'Hi'
}

//객체에서 사용할 수 있는 methods
const user = {
    name: 'Mike',
    age:30
}

//1. Object.assign() : 객체 복제
const cloneUser =user;//안됨!
//객체에 대한 참조값이 저장//객체가 복사되는게 아니라 참조값만 복사됨
//cloneUser가 변경되면 원래객체도 변경됨 //동일한 객체로 봄.

//동일하게 복사하려면 Object.assign()
const newUser = Object.assign({},user);
//{} 빈 객체는 초기값
//{}+{name : 'Mike', age:30} = 빈객체에 user가 병합
//newUser != user 같은 객체가 아님

Object.assign({name:'Tom'},user);
//똑같은 변수가 초기값으로 오면 덮어씀 //Tom 덮어써서 name: 'Mike"가 됨
//새로운 변수 초기값으로 오면 추가

//두개 이상의 객체도 합칠 수 있음
const user = {
    name : 'Mike'
}
const info1 = {
    age: 30,
}
const info2 = {
    gender : 'male',
}
Object.assign(user,info1,info2)//user에 info1,info2합쳐짐


//2. Object.keys(): 키 배열 반환
Object.keys(user);//["name","age"]

//3. Object.values(): 값 배열 반환
Object.values(user);//["Mike","30"]

//4. Object.entries(): 키와 값을 모두 배열로 반환(쌍으로 묶어 배열로 반환)
Object.entries(user);//["name","Mike"],["age",30]

//5. Object.fromEntries(): 키와 값 배열을 객체로
const arr = [
    ["name","Mike"],
    ["age",30],
    ["gender","male"]
];
Object.fromEntries(arr);
// {
//     name: 'Mike',
//     age:30,
//     gender:'male',
// }



//test
let n = 'name';
let a = 'age';

const user = {
    [n]: 'Mike',
    [a]: 30,
};
console.log(user);

function makeObj(key,val){
    return {
        [key] : val
    }
}
const obj = makeObj('나이',33);
console.log(obj);


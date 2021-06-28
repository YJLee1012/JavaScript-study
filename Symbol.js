//Symbol 자료형
//유일한 식별자(프로퍼티)를 만들때 사용
const a = Symbol();//new를 붙이지 않음
const b = Symbol
console.log(a);//Symbol()
console.log(b);//Symbol()
//but a!==b
//Symbol: 유일성 보장
//이름이 같더라도 다른 존재

//property key : Symbol형
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
console.log(user);
//{name:"Mike",age:30,Symbol(id):"myid"}//잘 나옴

//Symbol은 안나옴
Object.keys(user); //["name","age"]
Object.values(user);//["Mike",30]
Object.entries(user);//[Array(2),Array(2)]
for(let key in user){
    console.log(key,user[key])
}

//Symbol.for(): 전역 심볼
//하나의 심볼만 보장받을 수 있음
//없으면 만들고 있으면 가져오기 때문
//Symbol함수는 매번 다른 Symbol값을 생성하지만,
//Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
id1 === id2; //true
Symbol.keyFor(id1)//"id"

//전역심볼이 아닌 심볼
//description으로 이름알 수 있음
const id = Symbol('id입니다.');
id.description;//'id입니다.'

//숨겨진 Symbol key 보는 법
//거의 안씀
Object.getOwnPropertySymbols(user);//[Symbol(id)]
Reflect.ownKeys(user);//모든 키 //["name","age","Symbol(id)"]

//예제
//다른 개발자가 만들어 놓은 객체
const user = {
    name : "Mike",
    age: 30,
};

//내가 작업
//user.showName = function () {};//안됨
const showName = Symbol("show name");
user[showName] = function() {
    console.log(this.name);
}
user[showName]();//Mike출력

//사용자가 접속하면 보는 메세지
for (let key in user){
    console.log(`His ${key} is ${user[key]}.`);
}
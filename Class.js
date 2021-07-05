//Class
//ES6에 추가된 스펙

//객체, 생성자 사용
const User = function (name,age){
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    }
}
const mike = new User('Mike',30);
//객체 내부에 showName이 있음


//Class사용
class User2{
    //constructor는 객체를 만들어주는 생성자 메소드
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //클래스 내에 정의한 메소드는 User2의 프로토타입에 저장됨
    showName() {
        console.log(this.name);
    }
}
const tom = new User2('Tom',19);
//Class사용시, 객체의 프로토타입 내부에showName이 있음
//Class는 new없이 실행하면 에러남. TypeError

//클래스의 메소드는 for..in문에서 제외됨
for(const p in tom){
    console.log(p);
}
//name
//age

for(const p in mike){
    console.log(p);
}
//name
//age
//showName


//Class 상속
//extends 

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log('drive..');
    }
    stop(){
        console.log('stop');
    }
}

class Bmw extends Car{
    constructor(color){
        super(color);
        //자식클래스 생성자는 빈객체가 만들어지고 할당되는 단계 건너뜀
        //자식클래스는 항상 부모클래스의 constructor를 실행해야함
        this.navigation = 1;
    }
    park(){
        console.log("PARK");
    }
    stop(){
        super.stop();//부모 메소드 사용
        console.log('OFF');
    }
}
const z4 = new Bmw('blue');

console.log(z4.drive());//dirve..
//일단 객체에서 찾고 없으면 프로토타입에서 찾고 또 없으면 프로토타입...

//메소드 오버라이딩
//상속에서 동일한 이름의 메소드 사용하면 덮어씀
z4.stop();
//OFF

//부모의 메소드를 그대로 사용하면서 확장하고 싶다면
//super 사용
z4.stop();
//stop//OFF

/*
constructor(생성자) 오버라이딩 
super(부모인자); //부모클래스 constructor실행
부모인자 넣어줘야함
*/
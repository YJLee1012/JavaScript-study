//객체에는 자신이 프로퍼티 가지고 있는지 확인하는 메소드 .hasOwnProperty('')

//__proto__ //프로토타입

//프로토타입, 상속 예제
const car = {
    wheels : 4,
    drive(){
        console.log("drive..");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
}
const benz = {
    color: "black",
}
const audi = {
    color: "blue",
}
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw.color);//red

//bmw에서 wheels찾고 없으면 prototype에서 탐색
console.log(bmw.wheels);//4 //상속

const x5 = {
    color:"white",
    name:"x5",
}
x5.__proto__=bmw;
for(p in x5){
    console.log(p);
    //color
    //name
    //navigation
    //wheels
    //drive
}
Object.keys(x5);//"color","name"



//예제 .prototype사용
const Bmw = function (color){
    this.color = color;
};

//이렇게 해주면 생성자 함수에 일일이 .__proto__적용 안해도 됨
//하나씩 prototype 지정해 주는게 좋아 constructor때문
//new Bmw 를 통해 만들어진 객체의 __proto__ 내부에 wheels : 4 가 들어가
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
    console.log('drive..');
};
/*이렇게 써도 동일하지만 이렇게 쓰면 constructor가 사라짐
Bmw.prototype = {
    wheels : 4,
    dirve(){
        console.log('drive..');
    },
    //constructor : Bmw,//수동으로 명시해주면 constructor지정됨
}
*/
const x5 = new Bmw("red");
const z4 = new Bmw("blue");
console.log(x5.wheels)//4
console.log(x5.drive())//drive..

//생성자가 새로운 객체를 만들어야 할때, 그 객체는 생성자의 instance
//instanceof연산자 : 객체와 생성자 비교할 수 있고 해당객체가 그 생성자로부터 생성된 것이면 true
console.log(z4 instanceof Bmw);//true
console.log(z4.constructor === Bmw);//true

//클로져 이용하면 color값 얻을 수만 있고 변경 불가
const Bmw = function (color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    }
}
const x5 = new Bmw('red');
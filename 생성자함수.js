//객체 리터럴
let user = {
    name : 'Mike',
    age : 30,
}
//객체 리터럴 여러개 만들어야하는 상황

//생성자 함수 이용
function User(name,age){//함수명 첫글자는 대문자로
    this.name = name;
    this.age = age;
}
let user1 = new User('Mike',30);
let user2 = new User('Jane',22);
let user3 = new User('Tom',17);
//new 연산자를 사용해서 호출

//생성자함수 붕어빵틀

//과정
//new 함수명()호출 ->빈 객체를 만들고 this에 할당->this에 프로퍼티 추가 ->this 반환
//생성자 함수사용하면 빠르고 일관성있게 객체 생성 가능

//메소드 추가
function User(name,age){//함수명 첫글자는 대문자로
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}
let user5 = new User('Han',40);
user5.sayName();//'Han'
//this.name은 user5의 name

function Item(title,price){
    //this ={};

    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }

    //return this;
}

const Item1 = new Item('인형',3000);
const Item2 = new Item('가방',4000);
const Item3 = new Item('신발',9000);

console.log(item1,item2,item3);

item3.showPrice();//가격은 9000원 입니다.
//toString()
//10진수 -> 2진수/16진수
let num = 10;
num.toString(2);//"1010"
let num2 = 255;
num2.toString(16);//"ff"

//Math
Math.ceil()//: 올림
Math.floor() //: 내림
Math.round() //: 반올림

//소수점 자릿수
//소수점 둘재자리까지 표현(셋째자리에서 반올림)
let userRate = 30.1234;
Math.round(num * 100)/100;

//toFixed() //문자열로 반환됨.
userRate.toFixed(2);//"30.12"
userRate.toFixed(0);//"30"
userRate.toFixed(6);//"30.1234"
Number(userRate.toFixed(2));//30.12

//isNaN()
let x = Number('x');//NaN
isNaN(x)//true
isNaN(3)//false
//주의할점//isNaN만이 NaN인지 아닌지 판단 가능
x == NaN //false
x === NaN //false
NaN ==NaN //false

//parseInt
//Number와 다르게 읽을 수 있는데까지 읽어
let margin = '10px';
parseInt(margin); //10
Number(margin); //NaN

//숫자로 시작하지 않으면 NaN반환
let redColor = 'f3';
parseInt(redColor); //NaN
//두번째인자 이용
parseInt(redColor,16)//243 //16진수로 바꿔서 10진수 출력
parseInt('11',2)//3

//parseFloat()
let padding = '18.5%';
parseInt(padding);//18
parseFloat(padding);//18.5

Math.random()//0~1 무작위 숫자
Math.floor(Math.random()*100)+1 //1~100사이의 임의의 숫자

Math.min()
Math.max()
Math.abs()//절댓값
Math.pow(n,m)//제곱
Math.pow(2,10)//1024
Math.sqrt()//제곱근




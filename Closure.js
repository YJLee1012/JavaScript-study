//클로저(Closure)
/**
 * 함수와 렉시컬 환경의 조합
 * 함수가 생성될 당시의 외부 변수를 기억
 * 생성 이후에도 계속 접근 가능
 */

//어휘적 환경(Lexical Environment)
let one;
one = 1;

function addOne(num){
    console.log(one+num);
}
addOne(5);

/*
처음 코드실행
<Lexical 환경>
one: 초기화X. 사용불가.
addOne : 함수선언문 function. 사용가능.
*변수에 할당한 함수 표현식 이렇게 안됨
*/

/**
let one;을 만났을때
<Lexical 환경>
one: undefined. 사용가능.
addOne : function.
 */

/**
one = 1;을 만났을때
<전역 Lexical 환경>
one: 1. 사용가능.
addOne : function.
 */

/**
addOne(5);을 만났을때
<내부 Lexical 환경>
num : 5
//함수에서는 넘겨받은 매개변수와 지역변수 저장
 */
//내부 Lexical환경은 외부 Lexical환경을 참조
//없으면 외부로 넓혀서 있는지 찾아


function makeCounter(){
    let num =0;//은닉화

    return function(){
        //이 함수는 숫자를 반환하는데, 외부함수(makeCounter)의 변수(num)에 접근
        return num++;
    };
}

let counter = makeCounter();

console.log(counter());//0
console.log(counter());//1
console.log(counter());//2
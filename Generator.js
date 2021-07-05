//Generator
//함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
//함수옆에 * , yield키워드 사용
function* fn(){
    try{
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    }catch(e){
        console.log(e);
    }
}
const a = fn();
console.log(a);//fn{<suspended>}//generator객체만 반환되고, 함수 본문코드는 실행전

console.log(a.next())//가장가까운 yield문까지 실행
/*출력값
1
{value:1, done:false}
value값은 yield 옆의 값이고 done은 함수가 끝났는지 나타냄

a.next() 총 4번 실해하면
{value:"finish", done:true}
*/

//generator메소드
//next(), return(), throw()
a.next();
a.next();
a.return('END');//return메소드
//value:"END", done: true로 변함

a.next();
a.next();
a.throw(new Error('err'))//throw메소드
//value:undefined, done: true

/**
 * Generator는 iterator이면서 iterable이다.
  iterable .. 반복이 가능
  - Symbol.iterator메서드가 있다.
  - Symbol.iterator는 iterator를 반환해야 한다.
  
  iterator
  - next 메서드를 가진다.
  - next 메서드는 value와 done속성을 가진 객체를 반환한다.
  - 작업이 끝나면 done은 true가 된다.
 */

a[Symbol.iterator]() === a;//true
for(let num of a){
    console.log(num);
}
//4
//5
//6

//배열, 문자열도 iterable(즉, 반복가능)

//next()에 인수 전달
function* fn(){
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);
    
    return num1+num2;
}
const a = fn();
console.log(a.next());
//{value: '첫번재 숫자를 입력해주세요', done : false}
console.log(a.next(2));
//2
console.log(a.next());
//{value: '두번재 숫자를 입력해주세요', done : false}
console.log(a.next(4));
//4
//{value: 6, done : true}

//generator는 값을 미리 만들어 두지 않음
//메모리관리 측면에서 효율적, 필요한 순간에서만 연산
function* fn(){
    let index =0;
    while(true){
        yield index++;
    }
}
const a = fn();
//a.next()실행해야 index++ 실행됨
//->generator를 사용하면 필요한 순간까지 계산을 미리하지 않고 미룰 수 있음

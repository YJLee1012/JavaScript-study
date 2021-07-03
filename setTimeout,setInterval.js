/**
 setTimeout
 일정시간이 지난 후 함수를 실행

 setInterval
 일정시간 간격으로 함수를 반복
 */

function fn(){
    console.log(3)
}
setTimeout(fn,3000);//3초 후에 실행

//동일
setTimeout(function(){
    console.log(3)
},3000);

//인수가 필요하면 시간 뒤에 적어줌
setTimeout(function(name){
    console.log(name)
},3000,'Mike');

//setInterval
function showName(name){
    console.log(name);
}
const tId = setInterval(showName,3000,'Mike');
//3초마다 Mike출력
clearInterval(tId);//중단

//5초후 꺼지는 예제
let num =0;
function showTime(){
    console.log(`${num++}초가 지났습니다.`);
    if(num>5){
        clearInterval(tId);
    }
}
const tId = setInterval(showTime,1000);


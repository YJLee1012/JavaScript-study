//async await
//Promise에 then메소드를 체인형식(프로미스체이닝)으로 호출하는것보다 가속성이 좋음
//async붙이면 항상 promise로 반환됨
async function getName(){
    return "Mike";
}
console.log(getName());//Promise{<fulfilled>:"Mike"}
getName().then(name => {
    console.log(name);
})

async function getName(){
    // return Promise.resolve("Tom");
    throw new Error("err...");
}
// getName().then(name)=>{
//     console.log(name);
// }
getName().catch((err)=>{
    console.log(err);
})

//await
//async함수 내부에서만 사용가능
//await 옆에 Promise키워드

function getName(name){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(name);
        },1000)
    })
}
async function showName(){
    const res = await getName("Mike");
    console.log(res);
}
console.log('시작');
showName();
/*출력값
시작
Mike
*/


//Promise대신 async~await사용
const f1 = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('1번 주문 완료');
        },1000);
    })
}
const f2 = (message) =>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // res('2번 주문 완료');
            rej(new Error("err.."));
        },3000);
    })
}
const f3 = (message) =>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('3번 주문 완료');
        },2000);
    })
}

console.log("시작");
//reject 에러발생시 try~catch문 이용
async function order(){
    try{
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    }catch(e){
        //에러처리
        console.log(e);
    }
    // const result1 = await f1();
    // const result2 = await f2(result1);
    // const result3 = await f3(result2);
    // console.log(result3);
    console.log('종료');
}
order();

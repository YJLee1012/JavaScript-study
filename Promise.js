//작업이 완료되거나 실패했을때 알려주는 promise

//resolve는 성공, reject는 실패
const pr = new Promise((resolve, reject) => {

});
/*
new Promise객체가 반환하는 프로미스 개체는 state와 result
처음에 state:pending(대기), result : undefined
resolve(value)호출되면(성공시) state:fulfilled ,result:value
reject(error)호출되면(실패시) satate:rejected(거부됨), result:error
*/

const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('OK')
    },3000)
});
//3초 후에 state:fufilled, result:'OK'

pr.then(
    function(result){
        console.log(reulst + ' 가지러 가자.');
    },//이행되었을때 실행 result:'OK'
    function(err){
        console.log('다시 주문해주세요..');
    }//거부되었을 때 실행
);

//then 이외에 catch사용 가능 단, catch는 에러에만 사용할 수 있다.
//finally는 이행이든 거부든 완료되면 실행됨
pr.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('---주문 끝---')
})


//콜백지옥예시
//Promise안쓰고 계속 콜백호출
const f1 = (callback)=>{
    setTimeout(function(){
        console.log("1번 주문 완료");
        callback();
    },1000);
};
const f2 = (callback)=>{
    setTimeout(function(){
        console.log('2번 주문 완료');
        callback();
    },2000);
};
const f3 = (callback)=>{
    setTimeout(function(){
        console.log('3번 주문 완료');
        callback();
    },3000);
};

console.log('시작');
f1(function(){
    f2(function(){
        f3(function(){
            console.log("끝");
        });
    });
});

//콜백함수 사용하지 않고
//Promise로 구현!
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
            res('2번 주문 완료');
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

//프로미스가 연결연결되는것을
//프로미스 체이닝(Promise chaning)이라고 함
console.log('시작');
f1()
.then((res)=>f2(res))
.then((res)=>f3(res))
.then((res)=>console.log(res))
.catch(console.log)
.finally(()=>{
    console.log('끝');
});

//Promise.all //배열사용
//한번에처리 //시간 절약 가능
//하지만 하나라도 누락되면 아예안보여줌.
//다 보여주거나 다 안보여줄때 사용함
Promise.all([f1(),f2(),f3()])
.then(res =>{
    console.log(res);
})

//Promise.race //하나라도 완료되면 끝내버림
Promise.race([f1(),f2(),f3()])
.then(res =>{
    console.log(res);
})
//ES2021

//1. String.replaceAll
const str1 = "Hello World";
console.log(str1.repalceAll("l","~"));
//He~~o Wor~d

//원래는 정규식 사용함
console.log(str1.replace(/l/g,"~"));
//특수문자 들어가면 더 복잡
console.log(str1.replace(/\[/g,"~"));


//2. Promise.any
const rejPromise = new Promis((res,rej)=>{
    setTimeout(()=>{
        rej('fail')
    },1000)
})
const resPromise = new Promis((res,rej)=>{
    setTimeout(()=>{
        res('success')
    },2000)
})
//Promise.race는 프로미스 중에 가장 먼저 완료된 결과값으로 이행/거부
//이행/거부 상관없이 가장 빨리 처리된 프로미스 반환
Promise.race([rejPromise,resPromise])
.then(()=>console.log('성공'))
.catch(e=>console.log(e));
//fail출력

//Promise.any는 프로미스 중에 가장 먼저 이행된 객체 반환
Promise.any([rejPromise,resPromise])
.then(()=>console.log('성공'))
.catch(e=>console.log(e));
//성공출력
//모두 거부될때 fail반환됨

//3. Logical assignment Operators (논리 할당 연산자)
/*
||=
+=
&&=
??=(??는 null병합 연산자: ??앞의 값이 null이거나 undefined일때 ??뒤 코드 실행)
*/

let num = 0;
let a = num || 3;
a //3
let b = num ?? 3;
b //0 //num이 null 또는 undefined가 아니기때문

//4. 숫자 구분자
//,대신 _를 구분자로 사용
//실제 사용되는 수는 구분자 없이 사용됨
let billion = 1_000_000_000

//5. WeakRef
/*약한 참조 = 가비지 컬렉터 대상
가비지 컬렉터 : 사용하지 않는 객체를 자동으로 메모리에서 해제해줌
그래서 참조가 있으면 메모리에서 제거가 되지 않아
하지만 약한 참조는 언제든지 가비지 컬렉터가 객체를 없앨 수 있다. 
*/
let user = {name:'Mike', age:30}
const weakUser = new WeakRef(user);

user = null;//참조 끝어줌

const timer = setInterval(()=>{
    const wUser = weakUser.deref();//deref는 참조에 접근하기위해 사용
    if(wUser){
        console.log(wUser.name);
    }else{
        console.log('제거 되었습니다.');
        clearInterval(timer)
    }
},1000)


//약한 참조
//특정개체를 일정시간만 캐시하도록 사용 가능
class MyCadhe{
    constructor(){
        this.cache = {}
    }
    add(key,obj){
        this.cache[key] = new WeakRef(obj)//약한 참조
        // this.cache[key] = obj//강한 참조 //가비지 컬렉터 대상 아님
        //전달해준 객체가 사라진다고 하더라도 가바지 컬렉터는 캐시의 키를 가비지로 인식하지 못함
    }
    get(key){
        let cachedRef = this.cache[key].deref()
        //지워졌을수도 있으니 있는지 없는지 확인
        if(cachedRef){
            return cachedRef;
        }else{
            return false;
        }
    }
}


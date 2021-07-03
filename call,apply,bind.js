/**
 * call,apply,bind : 함수 호출 방식과 관계없이 this를 지정할 수 있음
 */
//call
//call메서드는 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정 가능

const mike = {
    name : 'Mike',
}
const tom = {
    name:"Tom",
}
function showThisName(){
    console.log(this.name);
}
showThisName();//아무것도 안나옴 
showThisName.call(mike);

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};
//this로 사용할 mike전달
update.call(mike, 1999, 'student');
console.log(mike);


//apply
/*
apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.
*/
update.apply(mike, [1999, 'student']);
console.log(mike);
//결과는 동일

const nums = [3,10,1,6,4];
const minNum = Math.min(...nums);
const maxNum = Math.max(...nums);
//apply는 배열 매개변수를 함수 매개변수로 사용할 때 유용
//두번째 인자부터 배열
const minNum = Math.min.apply(null,nums);
const maxNum = Math.max.apply(null,nums);
//위에랑 같다

//call사용시 
const maxNum = Math.max.call(null, ...nums);

console.log(minNum);
console.log(maxNum);


//bind
/**
 * 함수의 this값을 영구히 바꿀 수 있다.
 */
const updateMike = update.bind(mike);
//updateMike는 항상 this를 mike로 받음
updateMike(1999,'student');
console.log(mike);

const user = {
    name:'Mike',
    showName:function(){
        console.log(`hello, ${this.name}`);
    }
};
//.앞에 있는것이this
user.showNmae();//hello,Mike

let fn = user.showName;//fn을 할당할때 this를 잃어버림
fn();//hello, //this는 아무것도 없음

fn.call(user);//hello, Mike
fn.apply(user);//hello, Mike

let boundFn= fn.bind(user);
boundFn();//hello, Mike

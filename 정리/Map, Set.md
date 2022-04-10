# Map & Set

Map, Set은 ES6에서 새로 도입한 자료구조이다.

## ✅ Map, Set이 필요한 이유

- object는 문자열과 심볼만 키값으로 들어갈 수 있다.
- 객체의 프로퍼티 개수(사이즈)를 알아야 할 경우 object는 직접 판별해야하지만 map,set은 size 속성을 이용해 쉽게 얻을 수 있다.
- object는 for-of, forEach, spread syntax로 접근이 힘들다.(iterable (x))  대신 for-in가능.

## Map

- Map객체는 키-값을 저장한다.
- key는 자료형을 구분한다.
- key를 사용해서 값을 get, set 할 수 있다.
- key들은 중복될 수 없다.

```jsx
let me = new Map(); //{}
me.set('name', 'YJ'); //{'name'=>'YJ'}
me.set('age',20);//{'age'=>20}
console.log(me.get('age')); //20

//한꺼번에 
let you = new Map().set('name', 'paul').set('age', 34);
console.log(you.get('name')); // 'paul'

//has() : 주어진 key가 존재하는지 확인한다.
console.log(me.has('name')); //true

//size : map에 담겨진 엔트리의 개수를 조회한다.
console.log(me.size); //2

//delete(key) : 엔트리를 삭제한다.
me.delete('age');
console.log(me.has('age')); //false

//clear() : 모든 엔트리를 삭제한다.
me.clear();
console.log(me.size); //0

let myMap = new Map(['name', 'kyle'], ['city', 'seoul']); //{"name" => "kyle", "city" => "seoul"}

//map.keys(), map.values()
let me = new Map().set('a', 1).set('b', 2);
console.log([...me.keys()]); // ['a', 'b']
console.log([...me.values()]); // [1, 2]

//map.entries()
let you = new Map().set('Seoul', 28).set('Tokyo', 26);
let iterObj = you.entries();
console.log(iterObj.next()); // {value: ['Seoul', 28], done: false}
console.log(iterObj.next()); // {value: ['Tokyo', 26], done: false}
console.log(iterObj.next()); // {value: undefined, done: true}

let we = new Map().set('car', 30).set('bus', 45);
// for-of 로 map 순회하기
for (let [key, value] of we) {
  console.log(key + '^' + value);
}
// 차례대로 'car^30', 'bus^45' 출력

// forEach 로 map 순회하기
we.forEach((value, key, map) => {
  console.log(key + '$' + value);
});
// 차례대로 'car$30', 'bus$45' 출력
```

## Map과 Object비교

- Object의 key는 string과 symbol만 가능하지만, Map은 key에 어떤 값도 가능하고 서로 구분된다.
- Map은 데이터의 순서를 보존하지만 Object는 그렇지 않다.
- Object에서는 크기를 추적해서 알 수 있지만, Map은 손쉽게 얻을 수 있다.(Map에서는 size이용)
- Map은 Object의 인스턴스이지만 Object는 그렇지 않다.
- Map은 get메서드를 이용해서 요소값에 접근한다. 반면 Object는 obj.key 또는 obj[’key’]로 접근한다.
- Map은 has메서드를 이용해 key값의 존재 유무를 확인 할 수 있다. 반면 Object는 hasOwnProperty()를 이용해 존재유무를 확인 할 수 있다.
- Map은 iterable하다. `for of`,`forEach` 로 접근할 수 있다. `for of` 로 접근할 때 for (const [key, value] of map) 으로 해서 key, value 따로접근할 수 도 있다. `forEach`도 같다.
- Object는 `for in` 으로 접근가능하다. (not iterable)

## Set

- Set()은 value들로 이루어진 컬렉션이다.(집합)
- Array와는 다르게 Set은 같은 value를 중복으로 포함할 수 없다.( 이미 존재하는 값을 추가하려고 하면 아무일도 없다.)
- 키는 존재하지 않고 값만 존재하지만 map 객체와 동일하게 동작한다.

```jsx
let set = new Set();
let set2 = new Set().add('a').add('b');
set2.add('c');
console.log(set2.size);//2

console.log(set2.has('b'));//true

set2.delete('b');//삭제
console.log(set2.has('b'));//false

set2.clear();//안의 모든 데이터들을 제거
console.log(set2.size); //0

//set.values()
let setA = new Set();
setA.add('a');
setA.add('b');
setA.add('a');//아무변화 없음
//Map 오브젝트와 동일하게 동작하기 때문에 Set.prototype.keys() 는 Set.prototype.values() 와 같은 결과
console.log([...setA.keys()]); // ['a', 'b']
console.log([...setA.values()]); // ['a', 'b']

//set.entries()
let setB = new Set();
setB.add('Korea');
setB.add('Japan');
setB.add('China');
let entries = setB.entries();
console.log(entries.next()); 
// {value: ['Korea', 'Korea'], done: false}
console.log(entries.next()); 
// {value: ['Japan', 'Japan'], done: false}
console.log(entries.next()); 
// {value: ['China', 'China'], done: false}
console.log(entries.next()); 
// {value: undefined, done: true}

//for-of, forEach
let setC = new Set();
setC.add('Korea');
setC.add('Japan');
setC.add('China');
for (let key of setC) {
  console.log(key);
}
// 차례대로 'Korea', 'Japan', 'China' 출력
setC.forEach((v, k) => {
  console.log(v);
})
// 차례대로 'Korea', 'Japan', 'China' 출력

```

그렇다면 어떨 때 무엇을 써야 하는 걸까요?

Object

- 데이터를 저장하기 위한 간단한 구조이며, Key가 String이거나 integer(또는 Symbol)인 경우 : Map을 생성하는 것보다 기본 오브젝트를 생성하는 데 훨씬 적은 시간이 걸리기 때문.
- 각각의 property/element가 별도의 로직이 적용되어야 하는 경우
- JSON으로/에서 변환해야 하는 경우(Map은 현재 지원하지 않음)

Map

- 키의 추가/삭제가 빈번한 경우 : Map은 순수한 Hash이고, Object는 그보다 복잡하기 때문에 속도가 Map이 더 뛰어남. 또한 Object property를 삭제하는 delete 연산은 몇 가지 성능 이슈가 존재함
- 키의 순서가 보장되어야 할 때 : Map은 iteration 기반으로 만들어졌기 때문에 기본적으로 순서를 유지
- 데이터의 크기가 클 때 : 더 나은 성능을 보임
- 런타임 시점까지 key가 정해지지 않은 경우
- key와 value가 각각 같은 타입일 경우

출처:

[https://kellis.tistory.com/129](https://kellis.tistory.com/129)

[Flying Whale]

추가로 보면 좋은 참고 : [https://kellis.tistory.com/129](https://kellis.tistory.com/129)

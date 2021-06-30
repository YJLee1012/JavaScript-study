str.indexOf(text);//몇번째 위치하는지 알려줌//없으면 -1
str.slice(n,m)//인덱스n~m-1까지 반환
str.substring(n,m)//n~m-1까지 문자열 반환 //n과 m을 바꿔도 동작함
str.substr(n,m)//n부터 시작해서 m개를 가져옴
str.trim()//앞 뒤 공백 제거
str.repeat(n)//n번 반복
str.toUpperCase()//대문자
str.toLowerCase()//소문자

//문자->아스키코드
"a".codePointAt(0);//97
//아스키코드->문자
String.fromCodePoint(97)//"a"

//예제
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];
let newList = [];

for(let i=0;i<list.length;i++){
    //index 4부터 끝까지 push
    newList.push(list[i].slice(4));
}
console.log(newList);

//금칙어 : 콜라
function hasCola(str){
    if(str.indexOf('콜라')>-1){//꼭 >-1 체크해야함
        console.log('금칙어가 있습니다.');
    }else{
        console.log('통과');
    }
}
hasCola('와 사이다가 짱이야!');//-1
hasCola('무슨소리, 콜라가 최고');
hasCola('콜라'); //0

//includes
//문자가 있으면 true
//없으면 false반환
function hasCola(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.');
    }else{
        console.log('통과');
    }
}
hasCola('와 사이다가 짱이야!');//-1
hasCola('무슨소리, 콜라가 최고');
hasCola('콜라'); //0
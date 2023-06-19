const time = 0;
const salartElem = document.getElementById('salary')
//최저시급값 컨텐츠값
let salary = parseInt(salartElem.textContent);
//결과 DOM
const resultElem = document.getElementById('result')
//결과 컨텐츠 값
let result = resultElem.textContent;

//console.log(result)
//근무시간//


//계산버튼
const actionElem = document.getElementById('action')
actionElem.addEventListener('click', () => {
  /*result = time * parseInt(salary);
  console.log()
  console.log(result)
  resultElem.textContent =result*/
})
//근무시간
const timeElem = document.getElementById('time')
//숫자일 경우 +를 붙일경우 string -> number 형변환
//parseInt(value) string*//
let timeValue = +timeElem.value
console.log('time.value')
//결과 계산, 근무시간, 최저시급
result = timeValue * salary;
console.log(result)
resultElem.textcontent = result

//전 펑션
//ECMA 6 :자바스크립트를 관리하는 단체
//요즘은 ES6+/ESNEXT:요즘 자바스크립트 
//var:예기치 못한 상황을 유발하기때문에 숙련되지 못한 경우에는 오류가 쉽게 발생할수있어
//점차 추세하지않는쪽으로 나감
//let,const
//let:변할수있는 값,내용
//const:변할수없는값들
//console.log():내가 가져온 값을 실질적으로 제대로 불러오고 있는지 확인
//console.log(typeof:변수명):EX)number,string,boolean 등 타입체크
//타입자료형-자료의형태-number,string,boolean,object....
//addEventlistener:이벤트를 청취,관찰하겠다는 의미
//사용자 특정 동작을 했다.
//addEventlistener('click',functino(){})
//mousemove,scroll,resize(자바스크립트에서 반응형을 변경해줄수있는 변수),mouseover,mouseleave,mouseenter/
//touch event:(주로 모바일때 많이 쓰는 변수)


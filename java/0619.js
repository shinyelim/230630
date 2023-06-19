//scope:변수가 어디에서 쓸지하는 범위를 의미
//ES6:Ja 최신버젼//
//scope는 consoloe안에있을때 작동된다. 
/*var text = "text content"
var apple = document.getElementById('apple')
apple.textContent = text;*/

//버튼을 눌렀을대, 값이증가/버튼을 변수저장
//num id = 엘리먼트 변수저장
const btnInc = document.getElementById('increase')
const btnDec = document.getElementById('decrease')

const content = document.getElementById('content')
//초기화 된 숫자값
let originnumber = 0

const money = 100
btnInc.addEventListener('click', () => {
 Inc(originnumber,content,true) 
  
}
)
btnDec.addEventListener('click', () => {
Dec(originnumber,content,false)
})

//onebtn(number,contnet)

function Inc(number,content,check){
  if(check === true){
  number = number + money;
  }else{
    number = number -1;
  }
  if(number > 0 ){
    number = number - money; 
  }
  //content에 변화한 매개변수값 삽입
  content. textContent  = number
  return originnumber = number
}
//console.log(originnumber)
//개발자도구에서 상세히 나와서 많이 쓰인다.//
/*one(number)*/

//btnDec. addEventListener('click', function(){}
 /* incnum = incnum - 1;
 num.textContent =incnum*/

/* btnhec.addEventListener('click', function(){
  incnum = incnum - 1;
  num.textContent = incnum
}
)*/
//const func2 () =>{} 요즘에는 func을 이렇게 쓰임//
//함수정의//



  




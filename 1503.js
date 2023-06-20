const images = document.querySelector('.images')
const main = document.querySelector('main')
console.log(images)
//클래스를 하나만 찾을때는 querySelector 을 쓴다.
//클래스를 찾을때는 (.'')처럼 .을 붙여주면 된다. 참고로 id는 앞에 점대신 #을 붙여야한다.
//태그 이름으로도 찾을 수 있다.
const item =  Array.from(images.querySelectorAll('.image-item'))
console.log(item)
//items라는 배열을 반복문을 실행
//forEach = for문의 축약형,배열길이 감지, index값도 알아서 증가
//배열의 길이 100개건, 10개건 알아서 길이에 맞게 반복
item.forEach((item) => {
  item.addEventListener('click', () => {
    //만약에 현재 클릭한 요소에 active 있다면
    //classlist.contains()메소드는 현재 해당 클래스를 보유하는지 판단 -true/false
    if(item.classList.contains('click')){
      item.classList.remove('active')
    }else{

    }
    item.forEach(items => item.classList.remove('active'))
    item.classList.add('active')
    //console.log(item)
  })
})


const list = document.querySelector('.list')
const listitem = list.querySelectorAll('.list-item')
//onsole.log(listitem)
listitem.forEach(item => {
  item.addEventListener('click',()=>{
    //1.일단 모든 요소에서 active 클래스를 삭제(remove)함
    listitem.forEach(item => item.classList.remove('active'))
    //2.현재 누른 버튼을 active 클래스를 추가해줌
    item.classList.add('active')
  })
})
/*classList:무언가 있는지 판단할때는 classList contains()
class+:class.add
class제거:remove
class
*/ 
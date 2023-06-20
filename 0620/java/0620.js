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
/*forEach는 자바스크립트에서 젤로 많이 쓰인다.*/ 
/*const Fruit = document.querySelector('.Fruit')
const Fruitchild = Fruit.querySelectorAll('.Fruith-child')
console.log(Fruitchild)
Fruitchild.forEach(child => {
child.addEventListener('click',()=>{
  Fruitchild.forEach(child => child.classList.remove('active')) 
  child.classList.add('active')
})
})*/ 




/*console.log(list)
listitem.forEach(item => console.log(item))*/
/*const char = ['a','b','c','d']
for(let i = 0; i < 4; i ++){
  console.log(i)('for문으로 돌린 결과'+char[i])
}

char.forEach((i) => {
  console.log("for문으로 돌린 결과 + i")
})*/

//querySelecto에서 ('.00')처럼 클래스에 css에 한것처럼 점을 붙여야지 자바가 인정을 함//

  


let firstBasket = document.querySelector(".basket-1-apples")
let secondBasket = document.querySelector(".basket-2-apples")

let leftArrow = document.querySelector(".left-arrow")
let rightArrow = document.querySelector(".right-arrow")


const totalApple = 10
let secondBasketApleCount = 0;
let firstBasketAppleCount = totalApple - secondBasketApleCount


firstBasket.innerText = firstBasketAppleCount
secondBasket.innerText = secondBasketApleCount

rightArrow.addEventListener('click', ()=>{
  if(firstBasketAppleCount > 0){
    firstBasketAppleCount--
    firstBasket.innerText = firstBasketAppleCount
    secondBasketApleCount++
    secondBasket.innerText = secondBasketApleCount
  }



})


leftArrow.addEventListener('click', ()=>{
  if(secondBasketApleCount > 0){
    firstBasketAppleCount++
    firstBasket.innerText = firstBasketAppleCount
    secondBasketApleCount--
    secondBasket.innerText = secondBasketApleCount
  }



})
// Swipe items in list
export function swipe(){
  function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  
  var startY;
  var moveY; 

  function myFunction2(){
    startY = event.touches[0].clientY;
  }

  function  myFunction(){
    moveY = event.touches[0].clientY;
  }

var swipeAmounth = 0;
const ul = document.querySelector('ul');
const listItems = ul.getElementsByTagName('li');

  async function myFunction3(){
    if(startY-100 > moveY){
      swipeAmounth++;
        // Loop through the NodeList object.
        for (let i = 0; i <= listItems.length - 1; i++) {
            listItems[i].style.marginBottom = ""+(swipeAmounth * 100)+"vh";
        }
    }
    if(startY+100 < moveY){
      swipeAmounth--;
      for (let i = 0; i <= listItems.length - 1; i++) {
        listItems[i].style.marginBottom = ""+(swipeAmounth * 100)+"vh";
    }
    }
  }

  document.querySelector("ul").ontouchmove = myFunction;
  document.querySelector("ul").ontouchstart = myFunction2;
  document.querySelector("ul").ontouchend = myFunction3;

}
// Swipe items in list (swipe up and down)
export function swipe(){
  function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  
  var startY;
  var moveY; 
  var swipeAmounth = 0;
  const ul = document.querySelector('ul');
  const listItems = ul.getElementsByTagName('li');

  function myFunction2(){
    startY = event.touches[0].clientY;
  }

  function  myFunction(){
    moveY = event.touches[0].clientY;

  }

  async function myFunction3(){
    if((startY-100 > moveY) && (swipeAmounth < listItems.length-1)){
      swipeAmounth++;
        // Loop through the NodeList object.
        for (let i = 0; i <= listItems.length - 1; i++) {
            listItems[i].style.marginBottom = ""+(swipeAmounth * 100)+"vh";
        }
    }
    if((startY+100 < moveY) && (swipeAmounth > 0)){
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

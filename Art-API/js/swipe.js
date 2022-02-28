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

  async function myFunction3(){
    if(startY-100 > moveY){
        console.log("test");
        document.querySelector("ul > li").style.bottom = "100vh";
        await delay(2);
        document.querySelector("ul > li:first-child").style.zIndex = "1";
        document.querySelector("ul > li:nth-child(2)").style.zIndex = "2";
        document.querySelector("ul > li").remove();
    }
  }

  document.body.ontouchmove = myFunction;
  document.body.ontouchstart = myFunction2;
  document.body.ontouchend = myFunction3;

}
fetch('https://www.rijksmuseum.nl/api/nl/collection/?key=hkKbTt5W').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
    artList = data.artObjects;
    for (var key in artList) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        document.querySelector("ul").appendChild(li);
        img.src = data.artObjects[key].webImage.url.slice(0, -3)+"=s1000";
        li.appendChild(img);
        var title = document.createElement("h1");
        li.appendChild(title);
        title.innerHTML = data.artObjects[key].title;
      }
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});



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
  

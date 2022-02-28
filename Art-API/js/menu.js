import {getData} from './getData.js' 
import {makeList} from './makeList.js'

export function menu(){
    const menuButton = document.querySelector(".menuButton");
    const menu = document.querySelector(".menu");
    menuButton.addEventListener("click", function(){ 
        menu.classList.toggle("menuShow");
        menuButton.classList.toggle("iconSwitch");
    });
}

export function filter(){
    document.querySelector(".filter").addEventListener("click", function(){
        getData("key=hkKbTt5W&involvedMaker=Rembrandt+van+Rijn").then(data=>{
            makeList(data);
          })
    });
document.querySelector(".menu p").style.backgroundColor = "red";
}
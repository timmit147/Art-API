import {getData} from './getData.js' 
import {makeList} from './makeList.js'
import {swipe} from './swipe.js'
import {menu,filter} from './menu.js'

// Open close menu
menu();
filter();

// Get API data and place it in list
getData().then(data=>{
  makeList(data);
})

swipe();
import {getData} from './getData.js' 
import {makeList} from './makeList.js'
import {swipe} from './swipe.js'

// Get API data and place it in list
getData().then(data=>{
  makeList(data);
  swipe();
})
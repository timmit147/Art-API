import {getData} from './getData.js' 
import {makeList} from './makeList.js'
import {swipe} from './swipe.js'
import {menu} from './menu.js'
import {filterArtist} from './filter.js'

// Open close menu
menu();

// Get API data and place it in list
getData().then(data=>{
  makeList(data);
})

swipe();

filterArtist();
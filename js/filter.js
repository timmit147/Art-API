import {getData} from './getData.js' 
import {makeList} from './makeList.js'

// Get API data from rijksmuseum
export  function filterArtist(filter) {
   return fetch('https://www.rijksmuseum.nl/api/nl/collection/?key=hkKbTt5W&ps=99').then(function (response) {
        // The API call was successful!
        return response.json();
    })
    .then(function (data) {
        // This is the JSON from our response'

        let allPainters = [];

        data.artObjects.forEach(item => {
            allPainters.push(item.principalOrFirstMaker)
        })

        let unique = [...new Set(allPainters)];

        document.getElementById('selectNumber').addEventListener('change', function() {
            console.log('You selected: ', this.value);
            getData("key=hkKbTt5W&ps=100&involvedMaker="+this.value.replace(/\s+/g, '+')).then(data=>{
                makeList(data);
            })
          });


        for(var i = 0; i < unique.length; i++) {
            var opt = unique[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            document.getElementById("selectNumber").appendChild(el);
        }

    })
    .catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    
}
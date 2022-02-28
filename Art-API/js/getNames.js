// Get API data from rijksmuseum
export  function getNames(filter) {
   return fetch('https://www.rijksmuseum.nl/api/nl/collection/?key=hkKbTt5W&ps=999').then(function (response) {
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

        // console.log(unique);

        
        var select = document.getElementById("selectNumber");

        for(var i = 0; i < unique.length; i++) {
            var opt = unique[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
            el.classList.add("artist"+i);
                document.querySelector(".artist"+i).addEventListener("change", function(){ 
                    console.log("test");
                //     // getData("key=hkKbTt5W&involvedMaker=Rembrandt+van+Rijn").then(data=>{
                //     //     makeList(data);
                //     //   })
                });
        }

    })
    .catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    
}
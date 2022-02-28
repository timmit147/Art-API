// Get API data from rijksmuseum
export  function getData(filter) {
    var Addfilter;
    if(filter == undefined){
        Addfilter = "key=hkKbTt5W";
    }
    else{
        Addfilter = filter;
    }
   return fetch('https://www.rijksmuseum.nl/api/nl/collection/?'+Addfilter+'').then(function (response) {
        // The API call was successful!
        return response.json();
    })
    .then(function (data) {
        // This is the JSON from our response'

        let allPainters = [];

        console.log(data)

        data.artObjects.forEach(item => {
            allPainters.push(item.principalOrFirstMaker)
        })

        let unique = [...new Set(allPainters)];

        console.log(unique);
            return data;
    })
    .catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
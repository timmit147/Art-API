// function getAndRenderData () {
//     const getURL = 'https://tribe.api.fdnd.nl/v1'
//     fetch(getURL).then(response => response.json())
//     .then(response => {
//         console.log(response);
//         console.log(response.paths.list.get.description);
//         response.data.forEach(member => {
//             document.body.insertAdjacentHTML('beforebegin',`<p>${member.memberName}</p>`)
//         })
//     }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
// }

// getAndRenderData();

var locationZ = 1;

document.getElementById(1).addEventListener('click', event => {
  document.querySelector('.html').style.zIndex = locationZ;
  locationZ = locationZ + 1;
});


document.getElementById(2).addEventListener('click', event => {
  document.querySelector('.css').style.zIndex = locationZ;;
  locationZ = locationZ + 1;
});

document.getElementById(3).addEventListener('click', event => {
  document.querySelector('.js').style.zIndex = locationZ  ;
  locationZ = locationZ + 1;
});

document.getElementById(4).addEventListener('click', event => {
  document.querySelector('.sporten').style.zIndex = locationZ  ;
  locationZ = locationZ + 1;
});

document.getElementById(5).addEventListener('click', event => {
  document.querySelector('.schaak').style.zIndex = locationZ  ;
  locationZ = locationZ + 1;
});

document.getElementById(6).addEventListener('click', event => {
  document.querySelector('.ik').style.zIndex = locationZ  ;
  locationZ = locationZ + 1;
});

document.getElementById(7).addEventListener('click', event => {
  document.querySelector('.stage').style.zIndex = locationZ  ;
  locationZ = locationZ + 1;
});

document.getElementById(10).addEventListener('click', event => {
  document.querySelector('.cmd').style.zIndex = locationZ  ;
  locationZ = locationZ + 1;
});

document.getElementById(11).addEventListener('click', event => {
  document.querySelector('.gamen').style.zIndex = locationZ  ;
  locationZ = locationZ + 1;
});


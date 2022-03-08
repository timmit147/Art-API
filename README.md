##### Table of Contents  
* Hoe instaleer je dit project
* Breakdown-graph
* User flow
* UI-Stack
* Problemen
* Activity diagram
* To do list

# Kunst API 2021 - 2022

Voor deze opdracht heb ik gebruik gemaakt van de rijksmuseum API. Met de API kan je informatie opvragen over schilderijen zoals: titels, datums, afbeeldingen etc. Ik heb een app gemaakt waarbij je kan swipen door verschillede schilderijen van het rijksmuseum. Een functionaliteit die ik heb toegevoegd is dat je de schilderijen kan filteren op kunstenaar.

![image](https://user-images.githubusercontent.com/29665951/157015442-395de83e-26c5-4157-ad50-831a6b8ef4ff.png)

Wanneer je de app wil bekijken kan je kliken op de ondersstande link.

https://timmit147.github.io/Art-API/

Gebruikten API
https://data.rijksmuseum.nl/object-metadata/api/

## Hoe instaleer je dit project
Copy de repository url "https://github.com/timmit147/Art-API.git".

![image](https://user-images.githubusercontent.com/29665951/157016002-1572df15-011f-4e27-860c-4c8c84b2d490.png)

Clone de git repository via visual studio code of een andere editor.

![image](https://user-images.githubusercontent.com/29665951/157016318-513200fd-4ca9-410f-b3f9-2e1c38f902ce.png)

Begin met aanpassen.



## Breakdown-graph

Home page

![iPhone 12 Pro Max – 7](https://user-images.githubusercontent.com/29665951/157004752-3c801788-6f47-47fa-b8a7-d2d3fe369745.png)

Menu

![iPhone 12 Pro Max – 8](https://user-images.githubusercontent.com/29665951/157004750-fb5224d2-521b-41ac-9e5a-833e762f575f.png)

## User flow

![iPhone 12 Pro Max – 9](https://user-images.githubusercontent.com/29665951/157010201-88c27901-29a6-426e-863d-ccc4cf6b251d.png)

## UI-Stack

![iPhone 12 Pro Max – 11](https://user-images.githubusercontent.com/29665951/157010196-4e008f8f-5b54-4892-ad3d-213f0eeb31f0.png)

## Problemen

### Probleem 1
Ik had een probleem dat op mobiel 100vh niet werkten en de navigatie van de mobiel over de body van de app wordt geplaatst. De oplossing die ik heb gevonden is op de body en html een min-height: -webkit-fill-available; te geven en het probleem is opgelost.

![image](https://user-images.githubusercontent.com/29665951/157239967-feca4920-9765-482c-b1cc-36b0d73c6b0f.png)

### Probleem 2

API afbeelding te groot opgehaald

**Oplossing**

img.src = data.artObjects[0].webImage.url.slice(0, -3)+"=s1000";
 
**Uitleg code**

Wanneer je de url hebt van een afbeelding eindigt dit met =s0.
s0: de grootste afbeelding
s1000: normaal formaat
 
url.slice(0, -3) zorgt er voor dat de laatste letters van de url verwijdert worden en + "=s1000" plaatst tekst achter de url.

## Activity diagram

![iPhone 12 Pro Max – 14](https://user-images.githubusercontent.com/29665951/157256361-36206d8b-1d18-40d3-a1a6-cb8bef519d48.png)

## To do list

- [x] API data ophalen
- [x] API dat omzetten naar html
- [x] Stijlen van pagina
- [x] Filteren op kunstenaar
- [x] Swipen van lijst
- [X] Modules toevoegen
- [x] Filter lijst reset swipe
- [x] Filter aanpassen dat het routes gebruikt
- [x] Loading, Error, Empty state toevoegen
- [ ] Swipen smooth maken
- [ ] Filter op jaar toevoegen
- [ ] Filters combineren
- [ ] Loop terug naar het begin
- [ ] Nieuwe reeks toevoegen wanneer je bij 100 bent


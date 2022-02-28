// Make a list with art
export function makeList(data) {
    const artList = data.artObjects;
    for (var key in artList) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        document.querySelector("ul").appendChild(li);
        img.src = data.artObjects[key].webImage.url.slice(0, -3)+"=s3000";
        li.appendChild(img);
        const title = document.createElement("h1");
        li.appendChild(title);
        title.innerHTML = data.artObjects[key].title;
    }
}
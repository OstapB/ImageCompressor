fetch('./data/pictures.json')
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    console.log('parsed json', json)
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })
var pictures = {
  name: "picture.jpg",
  originalSize : "3mb",
  compressedSize : "200kb",
};
var x = anyList;
document.write(pictures.originalSize);
var sasha = document.createElement("td");
sasha.innerHTML = document.write(pictures.originalSize);
x.insertBefore(sasha,x.children[1]);





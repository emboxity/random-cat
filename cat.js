
function catFunction() {
  const cat = document.getElementById("cat-img");
  fetch('https://api.thecatapi.com/v1/images/search?size=full')
  .then(response => response.json())
  .then(data => cat.src = data[0].url);
}

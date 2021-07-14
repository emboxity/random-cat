document.querySelector('button').addEventListener('click', catFunction(), {passive: true});

function catFunction(){
  let xhr = new XMLHttpRequest();

  xhr.open('GET','https://api.thecatapi.com/v1/images/search?size=full');

  xhr.send();

  console.log(xhr);
  console.log(xhr.response.id);

}

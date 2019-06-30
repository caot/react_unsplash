const numItemsToGenerate = 20; //how many gallery items you want on the screen
const numImagesAvailable = 242; //how many total images are in the collection you are pulling from
const imageWidth = 240; //your desired image width in pixels
const imageHeight = 240; //desired image height in pixels
const collectionID = 1163637; //the collection ID from the original url
const $galleryContainer = document.querySelector('#root');

function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`) 
    .then((response)=> {    
      let galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      galleryItem.innerHTML = `
        <img class="gallery-image" src="${response.url}" alt="gallery image"/>
      `
      $galleryContainer.appendChild(galleryItem);
    })
}

{
  let set = new Set([])
  for(let i = 0; i < numItemsToGenerate; i++) {
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);

    if (set.has(randomImageIndex)) {
      i--;
      continue;
    }

    // console.log(randomImageIndex);
    set.add(randomImageIndex);
     
    renderGalleryItem(randomImageIndex);
  }
}

{
  let e = document.createElement('br');
  e.setAttribute("style", "clear: left;");
  $galleryContainer.appendChild(e);
}

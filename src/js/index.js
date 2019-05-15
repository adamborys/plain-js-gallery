const Http = new XMLHttpRequest();
const url = 'http://www.splashbase.co/api/v1/images/search?query=tree';

let gallery;
let loadMoreBtn;
let imagesDataArr;

function loadMore() {
  console.log(imagesDataArr);
  const nextArr = imagesDataArr.splice(0, 10);
  const imageList = document.createElement('UL');
  imageList.className = 'gallery__images';
  const len = nextArr.length;
  for (let i = 0; i < len; i += 1) {
    const listItem = document.createElement('LI');
    const newFigure = document.createElement('FIGURE');
    const newImage = new Image();
    newImage.src = nextArr[i].url;
    newFigure.appendChild(newImage);
    listItem.appendChild(newFigure);
    imageList.appendChild(listItem);
  }
  gallery.appendChild(imageList);
  console.log(imagesDataArr);
}

window.onload = () => {
  gallery = document.getElementById('gallery');
  loadMoreBtn = document.getElementById('more-btn');
  Http.send();
};

Http.open('GET', url);

Http.onerror = (e) => {
  alert(`Wystąpił błąd zapytania: ${e.target.status}`);
};
Http.onprogress = (e) => {
  console.log(e.loaded / e.total);
};
Http.onload = () => {
  console.log('loaded');
};
Http.onreadystatechange = function loadImages() {
  console.log(`${this.readyState} ${this.status}`);
  if (this.readyState === 4 && this.status === 200) {
    imagesDataArr = JSON.parse(this.responseText).images;
    loadMoreBtn.onclick = loadMore;
    loadMore();
  }
};

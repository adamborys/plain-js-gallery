const Http = new XMLHttpRequest();
const url = 'http://www.splashbase.co/api/v1/images/search?query=tree';

let gallery;

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
    const imagesDataArr = JSON.parse(this.responseText).images;
    imagesDataArr.forEach((imageData) => {
      const newImage = new Image();
      newImage.src = imageData.url;
      const newFigure = document.createElement('FIGURE');
      newFigure.appendChild(newImage);
      gallery.appendChild(newFigure);
    });
  }
};

window.onload = () => {
  gallery = document.getElementById('gallery');
  Http.send();
};

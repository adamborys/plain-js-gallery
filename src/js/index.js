const Http = new XMLHttpRequest();
const url = 'http://www.splashbase.co/api/v1/images/search?query=tree';

let imageList;

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
    for (let i = 0; i < 10; i += 1) {
      const listItem = document.createElement('LI');
      const newFigure = document.createElement('FIGURE');
      const newImage = new Image();
      newImage.src = imagesDataArr[i].url;
      newFigure.appendChild(newImage);
      listItem.appendChild(newFigure);
      imageList.appendChild(listItem);
    }
  }
};

window.onload = () => {
  imageList = document.getElementById('images');
  Http.send();
};

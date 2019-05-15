const Http = new XMLHttpRequest();
const url = 'http://www.splashbase.co/api/v1/images/search?query=tree';

let gallery;
let loadMoreBtn;
let btnPanel;
let imgDataArr;
let chosenImgDataArr;
const sitesArr = [];

function loadMore() {
  console.log(chosenImgDataArr);
  const nextArr = chosenImgDataArr.splice(0, 10);
  const len = nextArr.length;
  if (len > 0) {
    const imageList = document.createElement('UL');
    imageList.className = 'gallery__images';
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
  }
}

function chooseSite() {
  this.className = 'checked-btn';
  for (let i = 0, len = btnPanel.children.length; i < len; i += 1) {
    if (btnPanel.children[i].id !== this.id) btnPanel.children[i].className = 'unchecked-btn';
  }
  if (this.id > 0) {
    chosenImgDataArr = imgDataArr.filter(imageData => imageData.site === sitesArr[this.id - 1]);
  } else chosenImgDataArr = [...imgDataArr];
  while (gallery.children[2]) {
    gallery.removeChild(gallery.children[2]);
  }
  loadMore();
}

window.onload = () => {
  gallery = document.getElementById('gallery');
  loadMoreBtn = document.getElementById('more-btn');
  btnPanel = document.getElementById('btn-panel');
  Http.send();
};

Http.open('GET', url);

Http.onerror = (e) => {
  alert(`Wystąpił błąd zapytania: ${e.target.status}`);
};
Http.onreadystatechange = function loadImages() {
  if (this.readyState === 4 && this.status === 200) {
    imgDataArr = JSON.parse(this.responseText).images;
    imgDataArr.forEach((imageData) => {
      if (sitesArr.indexOf(imageData.site) === -1) sitesArr.push(imageData.site);
    });
    chosenImgDataArr = [...imgDataArr];

    const showAllBtn = document.createElement('BUTTON');
    showAllBtn.textContent = 'show all';
    showAllBtn.className = 'checked-btn';
    showAllBtn.id = '0';
    showAllBtn.onclick = chooseSite;
    btnPanel.appendChild(showAllBtn);

    for (let i = 1, len = sitesArr.length; i <= len; i += 1) {
      const siteBtn = document.createElement('BUTTON');
      siteBtn.textContent = sitesArr[i - 1];
      siteBtn.className = 'unchecked-btn';
      siteBtn.id = i.toString();
      siteBtn.onclick = chooseSite;
      btnPanel.appendChild(siteBtn);
    }
    console.log(sitesArr);
    loadMoreBtn.onclick = loadMore;
    loadMore();
  }
};

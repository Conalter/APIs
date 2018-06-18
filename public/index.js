var app = function(){
  // const url ="https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=04tUsMoILpGuMAAiX2Zu6kyzfry2GJAE&limit=20";
  const url ="http://api.giphy.com/v1/gifs/search?q=american+psycho&api_key=dc6zaTOxFJmzC&limit=10";
  makeRequest(url, requestComplete);
};

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function() {
  if (this.status !== 200) return;
  const gifs = JSON.parse(this.response);
  populateList(gifs);
  // populationDropDown(gifs);
  const select = document.querySelector('select');
  select.addEventListener('change', handleSelectChange);
};

const populateList = function(gifs) {
  const ul = document.querySelector('#gif');
  console.log(gifs);
  gifs.data.forEach(function(gif){
    const newImg = document.createElement('iframe');
    newImg.src = gif.embed_url;
    newImg.width = 480;
    newImg.height = 270;
    newImg.frameBorder = 0;
    ul.appendChild(newImg);
  });
}

// <iframe src="https://giphy.com/embed/qxEFIR0MHmU6I" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href=
//"https://giphy.com/gifs/cheezburger-cat-slow-motion-majestic-qxEFIR0MHmU6I">via GIPHY</a></p>

// const populationDropDown = function(gif){
//   const dropdown = document.querySelector('#gif');
//   gif.forEach(function(gif){
//     const option = document.createElement('option');
//     option.value = JSON.stringify(gif);
//     option.textContent = gif.name;
//     dropdown.appendChild(option);
//   });
// }

const handleSelectChange = function() {
  const gif = JSON.parse(this.value)
  const ul = document.querySelector('#gif');
}


window.addEventListener('load', app);

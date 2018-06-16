var app = function(){
  const url ="http://api.giphy.com/v1/gifs/translate";
  makeRequest(url, requestComplete);
};

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("api_key", "04tUsMoILpGuMAAiX2Zu6kyzfry2GJAE");
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function() {
  if (this.status !== 200) return;
  const gifs = JSON.parse(this.response);
  populateList(gifs);
  populationDropDown(gifs);
  const select = document.querySelector('select');
  console.log(select);
  select.addEventListener('change', handleSelectChange);
};

const handleSelectChange = function() {
  const beers = JSON.parse(this.value)
  const ul = document.querySelector('#gifs');
}

window.addEventListener('load', app);

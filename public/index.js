var app = function(){
  const url ="https://api.giphy.com/v1/gifs/trending?api_key=04tUsMoILpGuMAAiX2Zu6kyzfry2GJAE&limit=40";
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

const populateList = function(gifs) {
  const ul = document.querySelector('#gifs');
  gifs.forEach(function(gifs){
    const li = document.createElement("li");
    li.textContent = gif.name;
    ul.appendChild(li);
  });
}

const populationDropDown = function(beers){
  const dropdown = document.querySelector('#gifs');
  gifs.forEach(function(gif){
    const option = document.createElement('option');
    option.value = JSON.stringify(gifs);
    option.textContent = gifs.name;
    dropdown.appendChild(option);
  });

const handleSelectChange = function() {
  const gifs = JSON.parse(this.value)
  const ul = document.querySelector('#gifs');
}
}

window.addEventListener('load', app);

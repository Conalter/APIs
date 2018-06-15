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

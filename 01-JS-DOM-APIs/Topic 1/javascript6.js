function setTrue(){
	document.getElementById('test').hidden = true;
};

function hide(){
    document.getElementById('test').hidden = false;
	setTimeout("setTrue()",3000);
};

function loadXMLDoc() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for older browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(xmlhttp.responseText);
    }
  };

  function callback(respString) {
            var joke = getJoke(respString);
            var quoteList = document.getElementById("joke").innerHTML = joke;
}

function getJoke(respString) {
    var obj = JSON.parse(respString);
    return obj.value.joke;
}

  xmlhttp.open("GET", "http://api.icndb.com/jokes/random", true);
  xmlhttp.send();
};
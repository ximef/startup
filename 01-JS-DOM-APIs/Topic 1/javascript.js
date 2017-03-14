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

// We removed the callback parameter cause we don't need it anymore
function getData(url) {
    
    // Return a new promise and wrap the previous logic into the anonymous function
    return new Promise(function(callback, reject) {
        var req = new XMLHttpRequest();
    
        req.open("GET", url);
        
        req.onreadystatechange = function() {
            if (req.status !== 200) {
                // Instead of the callback we're calling the reject callback of the promise
                reject(new Error("Status code wasn't 200"));
                return;
            }
            
            callback(req.responseText);
        }
        
        req.onerror = function() {
            // We're rejecting the promise here cause an error occured
            reject(new Error("Network error"));
        }
        
        req.send();
    });
    
}

// A typical call looks like this
getData('product.json').then(function(result) {
    console.log('Success!', result)
}, function(err) {
    console.error('Failed!', err);
});
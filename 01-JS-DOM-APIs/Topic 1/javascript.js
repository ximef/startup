function setTrue(){
	document.getElementById('test').hidden = true;
}

function hide(){
    document.getElementById('test').hidden = false;
	setTimeout("setTrue()",3000);
}

function getData(){

    var promise = new Promise(function(resolve, reject) {
        
        var req = new XMLHttpRequest();
    
        req.open("GET", "http://api.icndb.com/jokes/random");
        
        req.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
               resolve(req.responseText);
            }
            else {
                // Instead of the callback we're calling the reject callback of the promise
                reject(new Error("Status code wasn't 200"));
            }
        }
        
        req.onerror = function() {
            // We're rejecting the promise here cause an error occured
            reject(new Error("Network error"));
        }
        
        req.send();
    });

  promise.then(function(data){
    console.log('Got data! Promise fulfilled.');
    document.getElementById('joke').innerHTML = JSON.parse(data).value.joke;
  }, function(error){
    console.log('Promise rejected.');
    console.log(error.message);
    document.getElementById("joke").innerHTML = "Error";
  });

}
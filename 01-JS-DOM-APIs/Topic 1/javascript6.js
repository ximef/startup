function hide(){
	document.getElementById('test').hidden = true;
};

  function callback(data) {
            console.log(data);
            var joke = getJoke(data);
}

function getJoke(data) {
    var obj = JSON.parse(data); 
    let i, j, x= "";
    x +="<ol>"
    for(i in obj.items) {
      x += "<li>" + obj.items[i].full_name + "</li>";

    }
    x +="</ol>"
   document.getElementById("joke").innerHTML = x;
}

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
      callback(xmlhttp.response);
    
    }
    else{
      console.log('Error');
    }
  };

 

  xmlhttp.open("GET", "https://api.github.com/search/repositories?q=netbeast+language:javascript", true);
  xmlhttp.send();
};
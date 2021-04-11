// Layer Function with XMLHttpRequest //

 
  let layertxt = document.getElementById("layertxt")
  let httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE){
  
          if(httpRequest.status === 200){
             
            layertxt.innerText = httpRequest.responseText;
          } else { 
            console.log("Erreur de chargement");
          }
          } else {
            console.log("En attente de réponse");
      }
  }
  
  httpRequest.open("GET", "securite.txt", true);
  httpRequest.send();

// Hide the layer after"click" //

 let hiddenLayer = document.getElementById("butn");
 let layer = document.getElementById("layer");
 hiddenLayer.addEventListener("click", function(){
    layer.style.display = "none";
  });
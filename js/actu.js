

let actutxt = document.getElementById("actutxt")
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
           // actutxt.innerText = httpRequest.responseText;
            //console.log(actutxt.innerText);
            //for(let i=0; i<actutxt.innerText.length;i++){
              let dataActu = JSON.parse(httpRequest.responseText); 
              
              

                
                
              
            }


    } else { 
        console.log("Erreur de chargement");
        }
    } else {
        console.log("En attente de réponse");
    }


httpRequest.open("GET", "actu.txt", true);
httpRequest.send();
actutxt.style.background = "red"
         
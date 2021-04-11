 // Non Fonctionnel 

let actutxt = document.getElementById("actutxt")
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
           actutxt.innerText = httpRequest.responseText;
            console.log(actutxt.innerText);
              let dataActu = JSON.parse(httpRequest.responseText); 
              
            //for(let i=0; i<actutxt.innerText.length;i++){
             actutxt.innerText = answerRequest;      
              
            }


    } else { 
        console.log("Erreur de chargement");
        }
    } ;

httpRequest.open("GET", "actu.txt", true); // fichier txt en test
httpRequest.send();
actutxt.style.background = "orange"
         
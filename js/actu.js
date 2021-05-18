function acturequest(actutxt){
    for(key of actutxt){
        console.log(key);
        console.log(actutxt);
    }



}


let actutxt = document.getElementById("actutxt")
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){
        if(httpRequest.status === 200){
         let actutxt = httpRequest.responseText;
            console.log(actutxt);
              let dataActu = JSON.parse(httpRequest.responseText); 
               acturequest(actutxt)
            //for(let i=0; i<actutxt.innerText.length;i++){
             actutxt.innerText = answerRequest;      
              
            }


    } else { 
        console.log("Erreur de chargement");
        }
    } ;

httpRequest.open("GET", "actu.json", true); // fichier txt en test
httpRequest.send();
actutxt.style.background = "orange"
         
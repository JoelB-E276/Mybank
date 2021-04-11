  
  
  let blogtxt = document.getElementById("blogtxt")
  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE){
  
          if(httpRequest.status === 200){
            let answerRequest = JSON.parse(httpRequest.responseText) ;
            console.log(answerRequest) ; 
            blogtxt.innerText = answerRequest;
            console.log(blogtxt.innerText) ;
            
            }
           
        } else {
              
              console.log("Erreur de chargement");
          }

      } else {
         
          console.log("En attente de réponse");
      }
  
  ;
  
//httpRequest.open("GET", "https://oc-jswebsrv.herokuapp.com/api/articles", true);
  httpRequest.send();  




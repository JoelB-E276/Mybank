   // Non Fonctionnel 
  
  function dispCard(datas){
    
     for(let i=0;i<datas.length;i++){

    console.log(datas[i].id);
    let dataId = document.getElementById('blog')
    console.log(dataId);
    dataId.innerHTML += '<div class="col-md-4"><div class="card" style="widht: 18rem;"><div class="card-body"><h5 class="card-title">'+ datas[i].id + '</h5><h6 class="cardsubtitle mb-2 text-muted">' + datas[i].titre +'</h6><p class="card-text">'+ datas[i].contenu +'</p></div></div></div></div>'; 

    
    
}
     }
  



  let blogtxt = document.getElementById("blogtxt")
  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE){
  
          if(httpRequest.status === 200){
            let datas = JSON.parse(httpRequest.responseText) ;
            
            dispCard(datas)
             }
                    
            } else {
         
          console.log("En attente de réponse");
      }
    };
  
  
  
httpRequest.open("GET", "https://oc-jswebsrv.herokuapp.com/api/articles", true);
httpRequest.send();  


/* 
 



function makeCol(article) {
  // Create a col element from Bootstrap
  let col = document.createElement("div");
  col.classList.add("col-12", "col-md-6", "col-lg-4");
  // Create also an article as a card
  let card = document.createElement("article");
  card.classList.add("card", "my-4")
  // Use the ES6 syntax and innerHTML to add all the HTML content at once
  card.innerHTML =
  `
    <div class="card-header">
      ${article.id}
    </div>
    <div class="card-body">
      <h5 class="card-title">${article.titre}</h5>
      <p class="card-text">${article.contenu}</p>
      <a href="#" class="btn btn-info">En savoir plus</a>
    </div>
  `
  ;
  col.appendChild(card);
  // Return the full column
  return col;
}

// Function to display on the html page a serie of articles in JSON format
function showArticles(articles) {
  // Get the row where articles will be stored
  let articleContainer = document.getElementById("articleContainer");
  // Loop through each article of the JSON array and create an html article
  for(const article of articles) {
    let col = makeCol(article);
    articleContainer.appendChild(col);
    console.log(article);
  }
}

// Start the AJAX request
httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      // Turn the response into an array of JSON objects
      let articles = JSON.parse(httpRequest.responseText);
      showArticles(articles);
    }
    else {
      let articleContainer = document.getElementById("articleContainer");
      articleContainer.innerHTML = "<div class='alert alert-danger'>Une erreur est survenue, nous ne pouvons pas afficher les articles</div>";
    }
  }
};
httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
httpRequest.send(); */
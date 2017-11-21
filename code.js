function renderMovie(movie){
    document.getElementById("myImage").src = movie.img;
    document.getElementById("myH1").innerText = movie.title;
    document.getElementById("myP").innerText = movie.description;
    
    var html = "";
    
    for (let i = 0; i < movie.actors.length; i++) {
        
        html += "<li>" + movie.actors[i] + "</li>";
        
    }
    document.getElementById("myUl").innerHTML = html;
}

function changeStarRating(rating){
    for(let i=1; i<=5; i++){
        let star = document.getElementById("star" + i);
        if (i <= rating){
          star.classList.add("filled");
        } else {
          star.classList.remove("filled");
        }
      }
    }
      
    for(let i=1; i<=5; i++){
        let star = document.getElementById("star" + i);
        star.addEventListener("click", function(){
          changeStarRating(i);
        });
  
    }
    
renderMovie(movieData);

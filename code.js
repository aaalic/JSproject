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

renderMovie(movieData);
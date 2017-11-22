import { Review } from "./interfaces";
import {movieData} from "./data";
import * as $ from "jquery";

function renderMovie(movie: Review){
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
    $(".filled").removeClass("filled");
    for(let i = 1; i <= rating; i++){
      $("[data-rating-id=" + i + "]").addClass("filled");
    }
  }
  
  $(".stars").on("click", "span", (e) => {
    let star = $(e.target);
    let rating = parseInt(star.attr("data-rating-id"));
    changeStarRating(rating);
  });

renderMovie(movieData);

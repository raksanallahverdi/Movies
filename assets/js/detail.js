import { getDataById } from "./helpers.js";
const url = "http://localhost:3000/movies";
const movieCard=document.querySelector(".movie-wrapper");

document.addEventListener("DOMContentLoaded",async ()=>{
    const id = new URLSearchParams(location.search).get("id");
    const movies=await getDataById(url,id);
    const movie=movies[0];
    movieCard.innerHTML+=`<div class="movie_card">
    <div class="my_image-wrapper">
        <img src="${movie.imageSrc}" alt="">
    </div>
    <div class="contents">
        <h2>${movie.name}</h2>
        <h3>${movie.releaseYear}</h3>
        <h3>${movie.genre}</h3>
        <h3>${movie.imdb}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, animi exercitationem laudantium incidunt est sed consectetur atque magnam natus laborum a, quis voluptatibus illum! Odit, quos mollitia temporibus doloremque nostrum distinctio accusamus perspiciatis aut dolores praesentium qui, dignissimos sed quibusdam officiis architecto consequuntur laboriosam! Quae sapiente a, mollitia magnam ullam quibusdam nobis minus, reiciendis soluta, voluptatum molestiae nihil ipsa culpa quod dolor veniam perspiciatis placeat rerum? Quos cumque quis porro perferendis soluta delectus consequatur, sunt doloremque odit eligendi dignissimos libero maxime quasi dolorem voluptatibus explicabo adipisci ab rerum alias corporis, deserunt veritatis non illo expedita. Odio, neque quos! Sed, quia.</p>
    </div>`;
    
    
})
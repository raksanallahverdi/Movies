const url = "http://localhost:3000/movies";
import {getAllData} from "./helpers.js";
let localCards = JSON.parse(localStorage.getItem("card")) || [];
const cardsContainer=document.querySelector(".cardsWrapper")

console.log(localCards);
const movies=await getAllData(url);
movies.forEach((card,idx) => {
  if(localCards.includes(card.id)){
    cardsContainer.innerHTML+= `
    <div data-id="${card.id}" class="movie">
       <div class="image-wrapper">
            <img src="${card.imageSrc}" alt=""></div>
            <i class="fa-solid fa-xmark deleteIcon"></i>
            <div class="movie-data"> <h1>${card.name}</h1>
       <h3>Release Year: ${card.releaseYear}</h3>
       <h3>Genre: ${card.genre}</h3>
       <h3>Imdb: ${card.imdb}</h3> </div>
        
   </div>  ` 
    
  }
});
const deleteBtns=document.querySelectorAll(".deleteIcon");
deleteBtns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
  
  const id=e.target.parentElement.getAttribute("data-id");
  console.log(id);
  const newLocal=localCards.filter(item => item != id);
  localStorage.setItem("card", JSON.stringify(newLocal));
  location.reload()
  
  
  
})
})
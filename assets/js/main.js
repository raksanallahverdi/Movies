const url = "http://localhost:3000/movies";
let localCards = JSON.parse(localStorage.getItem("card")) || [];
const searchInput = document.querySelector(".searchForm input");
const cardsContainer=document.querySelector(".cards-wrapper")
import {getAllData} from "./helpers.js";
import { updateDataById } from "./helpers.js";
document.addEventListener("DOMContentLoaded",async()=>{
    const movies=await getAllData(url);
    movies.forEach((movie) => {
        cardsContainer.innerHTML+= `
         <div data-id="${movie.id}" class="card">
            <div class="image-wrapper">
                 <img src="${movie.imageSrc}" alt=""></div>
                 <i class="fa-regular fa-pen-to-square editIcon"></i>
            <i class="fa-regular fa-heart wished likeIcon"></i>
            <h2>${movie.name}</h2>
            <h3><span>Year :<span/> ${movie.releaseYear}</h3>
            <h3><span>Genre :<span/> ${movie.genre}</h3>
           <h3><span>Imdb :<span/> ${movie.imdb}</h3>
             <a href="detail.html?id=${movie.id}"> <button class="getDetail">Get Details</button>  </a>
                 
        </div>  `
        
    });
    const likeIcons=document.querySelectorAll(".likeIcon")

    likeIcons.forEach((btn)=>{
      btn.addEventListener("click",()=>{
        const card=btn.closest(".card");
        const cardId=btn.closest(".card").getAttribute("data-id");
        
        if(btn.classList.contains("fa-regular") && btn.classList.contains("fa-heart")){
          btn.classList.add("fa-solid");
          btn.classList.remove("fa-regular");
          if (!localCards.includes(cardId)) {
            localCards.push(cardId);
            localStorage.setItem("card", JSON.stringify(localCards));
          }
        }
        else if(btn.classList.contains("fa-solid") && btn.classList.contains("fa-heart")){
          btn.classList.remove("fa-solid");
          btn.classList.add("fa-regular");
          localCards = localCards.filter((id) => id !== cardId);
          localStorage.setItem("card", JSON.stringify(localCards));   
         }  }) 
        })
    const allCards=document.querySelectorAll(".card")
    allCards.forEach((card)=>{
      const theCardId=card.getAttribute("data-id");
      if(localCards.includes(theCardId)){
        const cardIcon=card.children[2];
        cardIcon.classList.add("fa-solid");
        cardIcon.classList.remove("fa-regular");
        
      }
      
      
    })
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredMovies = movies.filter(movie => 
          movie.name.toLowerCase().includes(searchTerm)
      );
      cardsContainer.innerHTML = "";
      filteredMovies.forEach((movie) => {
        cardsContainer.innerHTML+= `
         <div data-id="${movie.id}" class="card">
            <div class="image-wrapper">
                 <img src="${movie.imageSrc}" alt=""></div>
            <i class="fa-regular fa-heart wished likeIcon"></i>
            <h2>${movie.name}</h2>
            <h3>Year: ${movie.releaseYear}</h3>
            <h3>Genre: ${movie.genre}</h3>
            <h3>Imdb:${movie.imdb}</h3>
            <button class="getDetail">Get Details</button>        
        </div>  `
        
    });
  });
  const editIcons=document.querySelectorAll(".editIcon");
  editIcons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
      const movieId = e.target.parentElement.getAttribute("data-id");
      
      const newDiv = document.createElement("div");
      newDiv.classList.add("modal");
      
      newDiv.innerHTML+=`
        <i class="fa-solid fa-xmark removeIcon"></i>
        <h2>Edit Movie Data</h2>
        <input id="editName" type="text" value="${e.target.parentElement.children[3].innerHTML}">
        <input id="editYear" type="text" value="${e.target.parentElement.children[4].children[0].children[0].innerText}">
        <input id="editGenre" type="text" value="${e.target.parentElement.children[5].children[0].children[0].innerText}">
        <input id="editImdb" type="text" value="${e.target.parentElement.children[6].children[0].children[0].innerText}">
        <input id="editImageSrc" type="text" value="${e.target.parentElement.children[0].children[0].getAttribute("src")}">
        <button id="submitEdit">Submit</button>
     `
     cardsContainer.appendChild(newDiv);
     const removeIcon=document.querySelector(".removeIcon");
     removeIcon.addEventListener("click",(e)=>{
       newDiv.remove();
    })
    const submitBtn = document.querySelector("#submitEdit");
    submitBtn.addEventListener("click", async () => {
      
        const updatedMovie = {
            name: document.getElementById("editName").value,
            releaseYear: document.getElementById("editYear").value,
            genre: document.getElementById("editGenre").value,
            imdb: document.getElementById("editImdb").value,
            imageSrc: document.getElementById("editImageSrc").value,
        };

        await updateDataById(url, movieId, updatedMovie);

        newDiv.remove();
        window.location.reload(); 
  
    })
  })
  })
 


})





















// swiper 
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 1600,
        disableOnInteraction: false, 
      },
    });

  
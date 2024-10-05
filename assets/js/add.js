const url = "https://json-server-theta-pink-37.vercel.app/api/movies";
import { getAllData } from "./helpers.js";
const success=document.querySelector(".success-alert");
success.classList.add("displayNone");
import { addData } from "./helpers.js";
const submitButton=document.querySelector(".submitBtn");

const addForm=document.querySelector(".addForm")
addForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const allMovies=await getAllData(url);
const newName=e.target.children[2].value;
const newYear=e.target.children[4].value;
const newGenre=e.target.children[6].value;
const newImdb=e.target.children[8].value;
const newImg=e.target.children[10].value;
if (newName,newYear,newGenre,newImdb){
    const newMovie = {
        id:String(allMovies.length+1),
        name:newName,
        releaseYear:Number(newYear),
        genre:newGenre,
        imdb:parseFloat(newImdb),
        imageSrc:newImg
    }
    setTimeout(() => {
    
    addData(url,newMovie);
    }, 1300);

    success.classList.remove("displayNone");
    success.classList.add("displayFlex");
    

   
}
else{
    Swal.fire("Empty input");
}

 
   
   
    
})

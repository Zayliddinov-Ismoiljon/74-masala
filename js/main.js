const elAnimation= document.querySelector(".animation");
const elDemo= document.querySelector(".demo");
const elCard= document.querySelector(".card");
const elButton= document.querySelector("button");

elButton.addEventListener("click", evt=>{
    elDemo.style.width="100%";
    elCard.style.width="500px";
})


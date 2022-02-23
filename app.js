let btn = document.querySelector(".btn");
let closeBtn = document.querySelector(".close-btn");
let modalOverlay = document.querySelector(".modal-overlay")

btn.addEventListener("click", function(){
modalOverlay.classList.add("open-modal")
})

closeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal")
})
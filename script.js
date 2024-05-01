let image = document.getElementById("bg-img");

window.addEventListener("scroll", ()=>{
    updateImage();
})

function updateImage(){
    // image.style.opacity = 1 - window.pageYOffset / 800;
    image.style.backgroundSize = 100 - window.pageYOffset/50 + "%"
}

// let taste = document.getElementById("pick");

// Element.addEventListener('touchmove', ()=>{
//     updateTaste();
// })

// function updateTaste(){
//     taste.style.backgroundSize = 80 + Element.pageXOffset/10 + "%"
// }

// let imgcontainer = document.querySelector(".section2");

// let btnEl = document.querySelector(".loading");

// btnEl.addEventListener("click", () => {
//     newImg = 10;
//     updateImage();
// })

// function updateImage(){
//     for (let index = 0; index < newImg; index++) {
//         let newImgEl = document.createElement("img");
//         newImgEl.src = `https://picsum.photos/400?random=${Math.floor(Math.random()*2000)}`;
//         imgcontainer.appendChild(newImgEl);
//     }
// }
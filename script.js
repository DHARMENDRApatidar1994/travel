const menu = document.querySelector(".mobile-nav");
// const close = document.querySelector(".mobile-nav");
const mobile= document.querySelector(".mob");

menu.addEventListener("click", function () {
    mobile.style.transform = "translateX(20%)"
});

// close.addEventListener("click", function () {
//     mobile.style.transform = "translateX(-115%)"
// });
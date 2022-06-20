// // Scroll iocn fade ---------------------------------------
// $('body').scroll(function(){
//     $('#menu').fadeOut();

//     var scrollA = $('body').scrollTop();

//     setTimeout(function(){
//         if(scrollA == $('body').scrollTop()){
//             $('#menu').fadeIn();
//         }
//     }, 200);
// })
// // ==========================================================

const hamburger = document.querySelector(".hamburger");
const headerleft = document.querySelector(".header-left");
const body = document.querySelector("body");


hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    headerleft.classList.toggle("active");
    body.classList.toggle("active");

    
}) 

// document.querySelectorAll(".menu-link").forEach(n => n.
// addEventListener("click",() => {
//     hamburger.classList.remove("active");
//     headerleft.classList.remove("active");
//     body.classList.remove("active");

// }))
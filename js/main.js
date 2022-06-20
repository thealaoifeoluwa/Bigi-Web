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



hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    headerleft.classList.toggle("active");

    
}) 

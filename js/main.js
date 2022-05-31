// Scroll iocn fade ---------------------------------------
$('body').scroll(function(){
    $('#menu').fadeOut();

    var scrollA = $('body').scrollTop();

    setTimeout(function(){
        if(scrollA == $('body').scrollTop()){
            $('#menu').fadeIn();
        }
    }, 200);
})
// ==========================================================

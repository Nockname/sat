window.setInterval(function(){
    if ($(window).scrollTop() <= $(".banner").height()){
        $(".menu").marginTop = 0;
    }
    else{
    $(".menu").css({"margin-top": ($(window).scrollTop()) - 1.5 * $(".banner").height() + "px", "margin-left":($(window).scrollLeft()) + "px"});
    }
}, 1);
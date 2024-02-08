$(function () {
    
    $('.top').hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 2000){
            $('.top').fadeIn(200);
        }
        else{
            $('.top').fadeOut(200);
        }
    })
    $('.top').click(function(){
        $('html, body').animate({scrollTop:0}, 2000)
    })
})
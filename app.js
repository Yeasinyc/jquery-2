$(function(){
    
    $('.slick-parent').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="left"><i class="fa-solid fa-arrow-left"></i></i></span>',
    nextArrow: '<span class="right"><i class="fa-solid fa-arrow-right"></i></i></span>'
    });


    new VenoBox({
        selector: '.my-video-links',
    });

 mixitup('.test',{
    "animation": {
        "duration": 500,
        "nudge": true,
        "reverseOut": false,
        "effects": "fade translateZ(-45px)"
    }
});
    
 
 AOS.init();

})





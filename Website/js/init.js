//The 'slick' script for defining and animating the carousel (quick note: using fade or swipe in the same settings with the initialisation script will cause the 'slidesToShow' function to break and only ever display the default number of '1'; i fixed this by creating 2 different init scripts inside the function).
$(document).ready(function(){
    $("#carousel").slick({
        mobileFirst:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:   true,
        prevArrow: false,
        nextArrow: false,
        centerMode:true,
        centerPadding: '40px',


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode:true,
                    centerPadding: '60px',

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    centerMode:true,
                    centerPadding: '40px'


                }
            }
        ]
    });
    $("#carousel").slick({
        fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    swipe: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    swipe: true
                }
            }
        ]
    });
});


//The Script for revealing the answer using a button
function reveal(id){
    var ans = document.getElementById(id);
    if(ans.style.display == 'block')
        ans.style.display = 'none';
    else
        ans.style.display = 'block';
}


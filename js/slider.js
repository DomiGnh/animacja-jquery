'use strict';

$(function(){
   
    /*zmienne*/
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    
    /*szerokość kontenera*/
    slideShow.css('width', slideCount * 100 + '%');
    console.log(slideCount);
});






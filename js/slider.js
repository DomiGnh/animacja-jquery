'use strict';

/*SLIDER */


$(function(){
   
    /*zmienne*/
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100/slideCount;
    var slideIndex= 0;
    
    /*funckja slide*/
    function slide(newSlideIndex){
        if(newSlideIndex <0 || newSlideIndex >= slideCount){
            return
        }
        
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
     
        slideShow.animate({'margin-left': marginLeft}, 800, function(){
        slideIndex = newSlideIndex;
        
    });
        
    }
    

    
    
    
    /*szerokość kontenera*/
    slideShow.css('width', slideCount * 100 + '%');
    console.log(slideCount);
    

    
    
    /*szerokość i położenie pojdynczego slidu - marginesy*/
    
    $('.single-slide').each(function(index){
       $(this).css({'width': slideWidth + '%', 'margin-left': index * slideWidth + '%'});
    })
    
    
    /*przesuwanie slidów - obsługa eventu , onclick starzłaka w lewo i w prawo*/
    //w mowemcie klikniecia starzłki index zwiększa sie o 1, margin mnożymy , parametr + 1, pzrsyniecie o - 100%.
    
    
    
    /*pierwsza starzłka*/
//    $('.prev-slide').click(function(){
//        var newSlideIndex = slideIndex - 1;
//        
//          if(newSlideIndex < 0){
//            return; 
//        }
//        
//        var marginLeft = (newSlideIndex * (-100)) + '%';
//        
//     
//        slideShow.animate({'margin-left': marginLeft}, 800, function(){
//        slideIndex = newSlideIndex;
//        
//    });
//        
//});
//        
        
    /*druga starzłka */
    
//    $('.next-slide').click(function(){
//       var newSlideIndex = slideIndex + 1;
//        
//      /*zatrzymanie slidowania na ostatnim slide, return zatrzymuje funkcje*/ 
//        if(newSlideIndex >= slideCount) {
//            return; 
//        }
//        
//    /*szerokość przesunięcia*/
//       var marginLeft = (newSlideIndex * (-100)) + '%';
//        
//    
//   /*efelkt przejscia- metoda animate*/
//       slideShow.animate({'margin-left': marginLeft}, 800, function(){
//        slideIndex = newSlideIndex;
//        
//        
//    });
//});
    
    
    
    /* kliknięcia w strzałki, za pomocą funkcji-
    funkcja zdefiniowana na górze*/
    
    $('.prev-slide').click(function(){
        slide(slideIndex -1);
    });
    
    
    $('.next-slide').click(function(){
        slide(slideIndex +1);
    });
        
    
    
                          
    
        
        
    
    
});









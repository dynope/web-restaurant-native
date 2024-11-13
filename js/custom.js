
AOS.init({
    duration: 700,
    easeing: 'ease',
});

(function(){
 
    'use strict';

    

    new CircleType(document.getElementById('circle-type'));

    var circleText = document.getElementById('circle-type');
    window.addEventListener('scroll', function() {
        circleText.style.transform = "rotate("+window.pageYOffset+"deg)";
    });

    var tinslider = function() {
      var el = document.querySelectorAll('.testimonial-slider')

      if ( el.length > 0 ) {
           var slider = tns({
            'container': '.testimonial-slider',
            'items':1,
            'center': true,
            'loop': false,
            'mouseDrag': true,
            'slideBy': 1,
            'axis': 'horizontal',
            'swipeAngle': true,
            'speed':700,
            'nav': true,
            'controls': false,
            'responsive': {
                '900':{
                    'edgePadding'
                }
            }         
           });
      }
    }
    tinslider(){

    }
})();
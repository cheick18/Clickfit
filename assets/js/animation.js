
$(document).ready(function() {
  /*Backround animation */
  var speed = 0.5; 
  var positionX = 0;  
   
    function moveBackground() {
      positionX += speed; 
  
      if (positionX >= 100) {
        positionX = 0;
      }
  
      $('.hero').css('background-position', positionX + 'px 0');
    }
  
    setInterval(moveBackground, 16);
    $('.hero-title').fadeIn(1000); 
  
  
    setTimeout(function() {
      $('.hero-description').fadeIn(1000);
    }, 1500); 
    setTimeout(function() {
        $('.contactbutton').fadeIn(1000);
      },)
/* Carousel configuration using owl carousel plugin */
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        Infinity:true,
        autoplay: true, 
        autoplayTimeout: 3000, 
        autoplayHoverPause: true,
         
        responsive: {
          0: {
            items: 1
          },
          700: {
            items: 3 
          },
          1000: {
            items: 3 
          }
        }
      });
 /* animation du contenu du carousel */
 $(".image-item").hover(
  function() {
      $(this).find(".image-item-content").stop(true, true).fadeIn(500);
  },
  function() {
      $(this).find(".image-item-content").stop(true, true).fadeOut(500); 
  }
);


});






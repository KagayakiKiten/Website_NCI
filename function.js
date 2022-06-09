
  // INITIALIZATION OF SLICK
  // =======================================================
  function myFunction(x) {
        if (x.matches) { // If media query matches
          $('.testimoni-map').slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            speed: 400,
            arrows:false,
            prevArrow:'<button type="button" class="slick-prev"></button>',
            nextArrow:'<button type="button" class="slick-next"></button>',
          });
        } else {
          $('.testimoni-map').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 400,
            arrows:false,
          });
        }
      }
      var x = window.matchMedia("(max-width: 768px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
    

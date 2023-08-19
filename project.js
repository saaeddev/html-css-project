document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-carousel', {
          fixedWidth: 100,
          gap       : 10,
          rewind    : true,
          pagination: false,
    } ).mount();
  } );
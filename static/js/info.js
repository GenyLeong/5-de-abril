var ancho = window.innerWidth;
var altura = window.innerHeight;

$(window).load(function() {
    if (ancho>768){
       $("#canvasWrapper").css({
        height: altura+170 + "px"
    })  
   } 

  // if (ancho<769){
  //   $("#canvasWrapper").css({
  //       height: 600 + "px"
  //   }) 
  // }

  // else if (ancho<421){
  //   $("#canvasWrapper").css({
  //       height: 500 + "px"
  //   }) 
  // }

  // else if (ancho<361){
  //   $("#canvasWrapper").css({
  //       height: 400 + "px"
  //   }) 
  // }

})
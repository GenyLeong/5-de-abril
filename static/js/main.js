// $(document).ready(function() {
	// $('.carousel.carousel-slider').carousel({
	// 	fullWidth: false,
	// 	interval:5000,
 //    	transition:800
	// });
	// autoplay()   
	// function autoplay() {
	//     $('.carousel').carousel('next');
	//     setTimeout(autoplay, 4500);
	// }
	
// })
var ancho = window.innerWidth;
var altura = window.innerHeight;

function maquina(e, n, a, i) {
    var t = n.length,
        r = document.getElementById(e),
        o = 0,
        s = setInterval(function() {
            r.innerHTML = r.innerHTML.substr(0, r.innerHTML.length - 1) + n.charAt(o) + "_", o >= t ? (clearInterval(s), r.innerHTML = r.innerHTML.substr(0, t), i && i()) : o++
        }, a)
}
function bounce(){
		$(".btn-indice").addClass("zoomIn");
}

function video(){
  var alt_video = document.getElementsByClassName('altura_video')
    var altura_desc = document.getElementsByClassName('altura_desc')
    for (var i = 0; i <alt_video.length ; i++) {
      altura_desc[i].style.height = alt_video[i].offsetHeight + "px";
      if(ancho<600){
        altura_desc[i].style.height = "" 
    }
    }  ;


}
$(document).ready(function() {

    var e = $(window).height();
    var mobile_demo = document.getElementById('slide-out') 
    mobile_demo.style.height = e + 'px';  
    
   $('.button-collapse').sideNav({
      menuWidth: 400, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
	$('.collapsible-header').click(function(){
		$(".collapsible-body").toggle();
	})
 $('.dropdown-button').dropdown({
    }
  );

   $('.smooth').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });

 $("#contenedor").css({
        height: e + "px"
    })

  $('.slider').slider({
    full_width: false,
    interval:4000,
    transition:800
  });

}), $(window).load(function() {      
    $("#contenedor").hide(), $("#contenido").css({
        display: "block" }), maquina("maquinas", texto[0], 160), console.log("ready"), setTimeout(bounce, 7200), video(), 
     if (ancho>768){
       $("#canvasWrapper").css({
        height: altura+170 + "px"
    })  
   } 
});

var texto = ["La historia contada por sus protagonistas"];


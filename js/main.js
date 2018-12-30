
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;

	
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

    //-------- Active Sticky Js ----------//
     $(".sticky-header").sticky({topSpacing:0});
     
    // -------   Active Mobile Menu-----//

     $(".mobile-btn").on('click', function(e){
        e.preventDefault();
        $(".main-menu").slideToggle();
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

     $(".main-menu li a").on('click', function(e){
        e.preventDefault();
        $(".mobile-menu").slideUp();
        $(".mobile-btn span").toggleClass("lnr-menu lnr-cross");
    });
     
    var mixer = mixitup('#filter-content');
    $(".controls .filter").on('click', function(event){
        $(".controls .filter").removeClass('active');
        $(this).addClass('active');
    });
    

    // Add smooth scrolling to Menu links
         $(".main-menu li a, .smooth").on('click', function(event) {
                if (this.hash !== "") {
                  event.preventDefault();
                  var hash = this.hash;
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top - (-10)
                }, 600, function(){
                 
                    window.location.hash = hash;
                });
            } 
        });

    $('.active-testimonial-carousel').owlCarousel({
        loop:true,
        dots: false,
        items: 3,
        margin: 5,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        responsive:{
            0:{
                items: 1,
            },
            900:{
                items: 2,
            },
            1400:{
                items: 3,
            },
            1600:{
                items: 4,
            }
        }
    })
     

     // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); 
        var submit = $('.submit-btn'); 
        var alert = $('.alert'); 

       form.on('submit', function(e) {
            e.preventDefault(); 

            $.ajax({
                url: 'mail.php', 
                type: 'POST', 
                dataType: 'html', 
                data: form.serialize(), 
                
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); 
                },

                success: function(data) {
                    alert.html(data).fadeIn(); 
                    form.trigger('reset'); 
                    submit.html(''); 
                },
                
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });

 });


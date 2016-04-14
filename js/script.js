//LOADER/SPINNER
$(window).bind("load", function() {

  "use strict";

  $(".spn_hol").fadeOut(1000);
});


//MENU APPEAR AND HIDE
$(document).ready(function() {

  "use strict";

  $(window).scroll(function() {

    "use strict";

    if ($(window).scrollTop() > 80) {
      $(".navbar").css({
        'margin-top': '0px',
        'opacity': '1'
      })
      $(".navbar-nav>li>a").css({
        'padding-top': '15px'
      });
      $(".navbar-brand img").css({
        'height': '35px'
      });
      $(".navbar-brand img").css({
        'padding-top': '0px'
      });
      $(".navbar-default").css({
        'background-color': 'rgba(59, 59, 59, 0.7)'
      });
    } else {
      $(".navbar").css({
        'margin-top': '-100px',
        'opacity': '0'
      })
      $(".navbar-nav>li>a").css({
        'padding-top': '45px'
      });
      $(".navbar-brand img").css({
        'height': '45px'
      });
      $(".navbar-brand img").css({
        'padding-top': '20px'
      });
      $(".navbar-default").css({
        'background-color': 'rgba(59, 59, 59, 0)'
      });
    }
  });
});




 // MENU SECTION ACTIVE
 $(document).ready(function() {

  "use strict";

  $(".navbar-nav li a").click(function() {

    "use strict";

    $(".navbar-nav li a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
});



// Hilight MENU on SCROLl

$(document).ready(function() {

  "use strict";

  $(window).scroll(function() {

    "use strict";

    $(".page").each(function() {

      "use strict";

      var bb = $(this).attr("id");
      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;
      if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
        var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
      } else {
        var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
      }
    });
  });
});



//SMOOTH MENU SCROOL


$(function() {
	
	"use strict";

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// FIX HOME SCREEN HEIGHT
$(document).ready(function() {

  "use strict";

  setInterval(function() {

    "use strict";

    var widnowHeight = $(window).height();
    var containerHeight = $(".home-container").height();
    var padTop = widnowHeight - containerHeight;
    $(".home-container").css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    });
  }, 10)
});



//PARALLAX
$(document).ready(function() {

  "use strict";

  $(window).bind('load', function() {
    "use strict";
    parallaxInit();
  });

  function parallaxInit() {
    "use strict";
    $('.home-parallax').parallax("30%", 0.1);
    $('.subscribe-parallax').parallax("30%", 0.1);
    $('.ourTeam').parallax("10%", 1);
    /*add as necessary*/
  }
});

//WOW JS
$(document).ready(function() {

  "use strict";

  new WOW().init();
});

/// SMOOTH SCROLL           

$(document).ready(function() {

  "use strict";

  var scrollAnimationTime = 1200,
  scrollAnimation = 'easeInOutExpo';
  $('a.scrollto').bind('click.smoothscroll', function(event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function() {
      window.location.hash = target;
    });
  });
  });

    //Skills charts
    
$(document).ready(function() {
  var offset=$(window).height()*0.5;
    $(window).scroll(function(){
      var scrolltop = $(this).scrollTop();
      $('.service').each(function(){
        if(scrolltop >= $(this).offset().top - offset) {
          $(function() {
            $('.chart1').easyPieChart({
              animate: { duration: 5500, enabled: true },
              easing: 'easeOutElastic',
              delay: 3000,
              barColor: '#2AA2C7',
              trackColor: '#C2C2C2',
              scaleColor: '#728686',
              lineWidth: 5,
              trackWidth: 5,
              scaleLength:6,
              size:'140',
              lineCap: 'butt',
              onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
              }
            });
          });
          $(function() {
            $('.chart2').easyPieChart({
              animate: { duration: 5500, enabled: true },
              easing: 'easeOutElastic',
              delay: 3000,
              barColor: '#2ABA97',
              trackColor: '#C2C2C2',
              scaleColor: '#728686',
              lineWidth: 5,
              trackWidth: 5,
              scaleLength:6,
              size:'140',
              lineCap: 'butt',
              onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
              }
            });
          });
          $(function() {
            $('.chart3').easyPieChart({
              animate: { duration: 5500, enabled: true },
              easing: 'easeOutElastic',
              delay: 3000,
              barColor: '#BEDB39',
              trackColor: '#C2C2C2',
              scaleColor: '#728686',
              lineWidth: 5,
              trackWidth: 5,
              scaleLength:6,
              size:'140',
              lineCap: 'butt',
              onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
              }
            });
          });
          $(function() {
            $('.chart4').easyPieChart({
              animate: { duration: 5500, enabled: true },
              easing: 'easeOutElastic',
              delay: 3000,
              barColor: '#E91E63',
              trackColor: '#C2C2C2',
              scaleColor: '#728686',
              lineWidth: 5,
              trackWidth: 5,
              scaleLength:6,
              size:'140',
              lineCap: 'butt',
              onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
              }
            });
          });
          $(function() {
            $('.chart5').easyPieChart({
              animate: { duration: 5500, enabled: true },
              easing: 'easeOutElastic',
              delay: 3000,
              barColor: '#FFE11A',
              trackColor: '#C2C2C2',
              scaleColor: '#728686',
              lineWidth: 5,
              trackWidth: 5,
              scaleLength:6,
              size:'140',
              lineCap: 'butt',
              onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
              }
            });
          });
          $(function() {
            $('.chart6').easyPieChart({
              animate: { duration: 5500, enabled: true },
              easing: 'easeOutElastic',
              delay: 3000,
              barColor: '#FD7400',
              trackColor: '#C2C2C2',
              scaleColor: '#728686',
              lineWidth: 5,
              trackWidth: 5,
              scaleLength:6,
              size:'140',
              lineCap: 'butt',
              onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
              }
            });
          });
        }
      });
    });
  });

// OWL CAROUSEL

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4,
            dots:false
        }
      }
  });
});

$(document).ready(function(){

  // mobile menu
  $('.menu-toggle').on("click",function(){
    $('.menu-toggle').toggleClass('active');
    $('.menu-mobile-items').slideToggle(800).toggleClass('show');
  });

  // about sectio slide up effect
  // $('.about-content')
  //   .velocity("transition.slideUpIn", { stagger: 200, duration: 800 }
  // );
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    if ( y >= 30 ) {
      $('.navbar').removeClass('navbar-color').addClass('navbar-transparent');
      $('.about-content').addClass('slide-up-in');
    } else {
      $('.navbar').removeClass('navbar-transparent').addClass('navbar-color');
    }
  })

});
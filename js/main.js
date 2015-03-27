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
    if ( y >= 200 ) {
      // $('.about-content').css('top', 0);
      $('.about-content').addClass('slide-up-in');
      console.log("test");
    }
  })

});
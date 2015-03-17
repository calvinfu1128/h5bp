$(document).ready(function(){
  $('.menu-toggle').on("click",function(){
    $('.menu-toggle').toggleClass('active');
    $('.menu-mobile-items').slideToggle(800).toggleClass('show');
  });
});
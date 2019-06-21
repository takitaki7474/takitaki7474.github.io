
var windowHeight = $(window).height();
var proTableTop = $('.programming-experience').offset().top
var confTableTop = $('.conference-experience').offset().top
var projectMainTop = $('.project-main').offset().top
var contactMainTop = $('.contact-main').offset().top


$('.home-main').animate({opacity:1},2000);

$(window).scroll(function() {

  if (($(this).scrollTop() + windowHeight*5/6) > proTableTop) {
    $('.programming-experience').animate({opacity:1},2000);
  }
  if (($(this).scrollTop() + windowHeight*5/6) > confTableTop) {
    $('.conference-experience').animate({opacity:1},2000);
  }
  if (($(this).scrollTop() + windowHeight*5/6) > projectMainTop) {
    $('.project-main').animate({opacity:1},2000);
  }
  if (($(this).scrollTop() + windowHeight*5/6) > contactMainTop) {
    $('.contact-main').animate({opacity:1},2000);
  }
})

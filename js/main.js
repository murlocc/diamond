$(document).ready(function() {
  $('.hamburger').click(function() {
    $('.header-nav-wrap').addClass('active');
  });

  $('.header-close').click(function() {
    $('.header-nav-wrap').removeClass('active');
  });
})
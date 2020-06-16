$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        auto:true,
        slideWidth: 1300
      });
      $('.menu-toggler').on('click',function(){
        $('mainav').slideToggle('fast');
        $(this).toggleClass('active');
      });
});
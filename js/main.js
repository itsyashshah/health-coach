$(document).ready(function() {
  if($('body').is('.PT-INDEX')){
    $('.circle').removeClass("hide").addClass('animated rollIn');
    $('.facts1').removeClass("hide").addClass('animated fadeInRight');
    $('.facts2').removeClass("hide").addClass('animated fadeInRight');
    $('.facts3').removeClass("hide").addClass('animated fadeInRight');
  }
  if($('body').is('.PT-FOODLIST')){
    $('.alertBlue').removeClass("hide").addClass('animated fadeInUp');
    $('.foodlist').removeClass("hide").addClass('animated fadeInUp');
    $('.querySelector').removeClass("hide").addClass('animated fadeInLeft');
  }
  if($('body').is('.PT-CALCULATOR')){
    $('.calculatorBlock').removeClass("hide").addClass('animated fadeInUp');
  }
});

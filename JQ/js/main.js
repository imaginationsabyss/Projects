// JavaScript Document$(document).ready(function() {
    // run function on initial page load



$( selector ).mouseenter( handlerIn ).mouseleave( handlerOut );
    // run function on resize of the window
    $(window).resize(function() {
       
    });
    // run function on scroll
    $(window).scroll(function() {
 
    }); 
$("#h2,p1").click(function() {
  alert( "Handler for .click() called." );
});
function mouseEvent() {
    $('.h3, p2').mouseenter(function(){
        $('.h3, p2').addClass('bgColor');
        console.log('mouse enter .h3, p2');
    });
    $('.h4, p3').mouseleave(function(){
        $('.h4, p3').removeClass('bgColor');
        console.log('mouse enter .square');
    });
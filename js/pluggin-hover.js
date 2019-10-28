// JavaScript Document
$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $(".thumbnail-image").hover(
        function(){
            $(".thumbnail-image").find('.caption').fadeIn(250)
        },
        function(){
            $(".thumbnail-image").find('.caption').fadeOut(205)
        }
    ); 
});
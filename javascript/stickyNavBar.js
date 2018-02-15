$(document).ready(function(){

    // Get the offset position of the navbar
    var navbarOffset = jQuery("#navigationBar").offset().top;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    jQuery(window).scroll(function(){
    	var scrollPos = jQuery(window).scrollTop();

    	if (scrollPos >= navbarOffset) {
    		jQuery("#navigationBar").addClass("sticky");
    	} else {
    		jQuery("#navigationBar").removeClass("sticky");
    	}
    });
});
// Close Announcement box with cookie.

//Author : Aakash Chakravarthy (www.aakashweb.com)
//Email : aakash.19493@gmail.com

var expDate = new Date();
expDate.setDate(expDate.getDate()+365);
(function($){
jQuery(document).ready(function(){
	if(jQuery('#announcer_box').length > 0){
	
		
		
		// Check for cookie
		if(announcer_cookie() == 'hidden'){
			jQuery('#announcer_box').hide();
			jQuery('#floating-phone').fadeIn();
		}else{
			document.cookie = "floating-phone=visible; expires=" + expDate.toGMTString()+"; path=/";
			jQuery('#announcer_box').fadeIn();
			jQuery('#floating-phone').hide();
		}
		
		// Close button on click
		jQuery('.announcer_closebt').click(function(){
			jQuery('#floating-phone').fadeIn();
			document.cookie = "floating-phone=hidden; expires=" + expDate.toGMTString()+"; path=/";
			/* jQuery(this).parent().slideUp(function(){
				jQuery('body').css('margin', 0);
			}); */
			
			jQuery(this).parent().effect('transfer', { to: "#floating-phone" },1000);
			jQuery('#announcer_box').hide();
			
			
		});
		// Open button on click
		jQuery('.announcer_openbt').click(function(){
		jQuery('#floating-phone').fadeOut();
			document.cookie = "floating-phone=visible; expires=" + expDate.toGMTString()+"; path=/";
			jQuery('#announcer_box').slideDown(function(){
				jQuery('body').css('margin', 0);
			});
			
		});
		
		jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 150) {
            jQuery('#back-top').fadeIn();
			if(announcer_cookie() == 'hidden'){
				jQuery('#announcer_box').hide();
				jQuery('#floating-phone').fadeIn();
			}
			else {
			jQuery('#floating-phone').fadeOut();
			jQuery('#announcer_box').slideDown(function(){
				jQuery('body').css('margin', 0);});
			}
			//jQuery('#floating-phone-inner').html('<a>test</a>');
        } else {
            jQuery('#back-top').fadeOut();
			jQuery('#announcer_box').fadeOut();
			jQuery('#floating-phone').fadeOut();
        }
    });
jQuery('.back-to-top').click(function () {
    jQuery('html, body').animate({
        scrollTop: 0
    }, 'slow');
});		
		jQuery('.announcer_content_inner').html(jQuery('.header-insideLeftElse').html());
		jQuery("#back-top").hide();
		jQuery("#announcer_box").hide();
		jQuery('#floating-phone').hide();
	}
});
})(jQuery);
function announcer_cookie(){
	var nameEQ = 'floating-phone=';
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0){ 
			return c.substring(nameEQ.length,c.length);
		}
	}
}

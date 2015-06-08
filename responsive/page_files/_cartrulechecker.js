jQuery.noConflict(); 
jQuery(document).ready(function() {
/*	
	jQuery('#product_addtocart_form').each(function(){	// change the submit function for productAddToCartForm
        productAddToCartForm.submit = function(button, url) {

            if (this.validator.validate()) {
                var form = this.form;
                var oldUrl = form.action;

                if (url) {
                   form.action = url;
                }
                var e = null;
                try {
                	// start of check cart rules
                	if(!checkCartRules(oldUrl)) return false;
                	// end of check cart rules
                    this.form.submit();
                } catch (e) {
                }
                this.form.action = oldUrl;
                if (e) {
                    throw e;
                }

                if (button && button != 'undefined') {
                    button.disabled = true;
                }
            }
        }.bind(productAddToCartForm);
	});
*/	
	jQuery('.actions .btn-cart').each(function(){	// change links with addToCart setLocation(...)
		clickAttr = "";
		for(i=0;i<this.attributes.length;i++){
			if(this.attributes[i].nodeName=='onclick'){
				clickAttr = this.attributes[i].nodeValue;
				break;
			}
		}
		warr = clickAttr.split("'");
		jQuery(this).removeAttr('onclick');
		var button = this;
		jQuery(this).bind('click', {url:warr[1]}, function(event){
			try{
				checkCartRulesLocation(event, button);
			} catch(e){alert(e)}
		});
	});
	jQuery('.actions .btn-cart').each(function(){	// change links with addToCart setLocation(...)
		jQuery(this).after("<span id='ajax_loader' style='display:none'><img src='http://newver.togas.ru/skin/frontend/default/blank/images/opc-ajax-loader.gif'/></span>");
//		jQuery(this).after("<div style='display:none'><div id='ajax_loader'><img src='http://newver.togas.ru/skin/frontend/default/blank/images/opc-ajax-loader.gif'/></div></div>");
	});
	jQuery('.add-to-cart .btn-cart').each(function(){	// change links with addToCart setLocation(...)
		if(jQuery(this).hasClass('quickorder')) return;
		jQuery(this).after("<div id='ajax_loader' style='display:none'><img src='http://newver.togas.ru/skin/frontend/default/blank/images/opc-ajax-loader.gif'/></div>");
//		jQuery(this).after("<div style='display:none'><div id='ajax_loader'><img src='http://newver.togas.ru/skin/frontend/default/blank/images/opc-ajax-loader.gif'/></div></div>");
	});
	
//*	This is working for product page
	jQuery('#product_addtocart_form').find(".btn-cart").each(function(){
		//if(jQuery.browser.msie) return;
		if(jQuery(this).hasClass('quickorder')) return;
		html = jQuery(this).parent().html();//.html();
		html = html.replace('productAddToCartForm.submit(this)', '"if(!checkCartNewRules(this)) return false;productAddToCartForm.submit(this)"');
		html = html.replace('""','"');
		parnt = jQuery(this).parent();
		parnt.empty();
		parnt.html(html);
	});
//*/ 

});
/*
*	check when form submit from product's page
*/
function checkCartNewRules(btn){
//	if(jQuery.browser.msie) alert("Check from product page "+btn);
	var form = btn.form;
	var url = form.action;
	if(checkRules(url))	return true;
	return false;
}
function checkCartRules(url){
	if(checkRules(url))	return true;
	return false;
}
/*
*	check when addToCart link clicked
*/
function checkCartRulesLocation(e, button){
	if(checkRules(e.data.url, button)){
		setLocation(e.data.url);
		return true;
	}
	e.stopPropagation();
	e.preventDefault();
	return false;
}
function checkRules(url, button){
	// replace checkout/cart/add by cartrulechecker/check
	if(url.lastIndexOf("checkout/cart/add")==-1) return true;
	url = url.replace("checkout/cart/add", "cartrulechecker/check");
	// create url for ajax request from "uenc/...../product/id/
	chunks = url.split("/");
	url = "";
	idData = "";
	for(i=0;i<chunks.length;i++){
		if(chunks[i]=="uenc"){
			url += "/product";
			idData = "id="+chunks[i+3];
			break;
		}
		url += (url.length>0?"/":"")+chunks[i];
	}
	// show ajax loader image
	var mask = null;
	if(button!=null){
		var mask = jQuery(button).parent().find('#ajax_loader')
		mask.show();
		if(jQuery.browser.msie) jQuery(mask).css('visibility','inline');
	} else {
		var mask = jQuery('.add-to-cart .btn-cart').parent().find('#ajax_loader')
		mask.show();
		if(jQuery.browser.msie) jQuery(mask).css('visibility','inline');
	}
//if(jQuery.browser.msie){
/*
	jQuery(mask).css('display','block');
	var iemask = jQuery('#ajax_loader').fancybox({'modal' : true});
	iemask.showActivity();
*/	
//	iemask.open();
//}
	res = false;
	try {
		jQuery.ajax({
			url: url,
			dataType: 'json',
			type : 'post',
			async: false,
			data: idData,
			success: function(data){
				if(data.status=="OK") res = true;
				else {
					alert("Answer:" + ": " + data.status+'\n'+
							"Title:"+'\n'+data.title+'\n'+
							"Message:"+'\n'+data.message);	// show error message
				}
				mask.hide();
				mask = null;
//if(jQuery.browser.msie){
//	iemask.close();
//	iemask = null;
//}
			},
			error: function(jqXHR, textStatus, errorThrown){
				jQuery('#ajax_loader').hide();	// hide loader icon
				alert(textStatus+'\n'+errorThrown);
			}
		});
	} catch (e) {
		alert(e);
	}
	return res;
}
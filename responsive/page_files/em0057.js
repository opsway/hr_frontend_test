/**
 * Javascript library for template ExtremeMagento
 * @copyright 2007 Quick Solution LTD. All rights reserved.
 * @author Giao L. Trinh <giao.trinh@quicksolutiongroup.com>
 */

(function() {
	
// EM.tools {{{
	
if (typeof BLANK_IMG == 'undefined') 
	var BLANK_IMG = '';

// declare namespace() method
String.prototype.namespace = function(separator) {
  this.split(separator || '.').inject(window, function(parent, child) {
    var o = parent[child] = { }; return o;
  });
};


'EM.tools'.namespace();


// EM0057 {{{

function menu()
{
	var Width_ul=670;
	var Width_li=0;
	var Width_before=0;
	var Width_div=0;
	var Width=0;
	
	$$("#nav").each(function(elem) {
	elem.childElements().each(function(li) {
		li.addClassName('submenu');
	});
		
	});
	
	
    $$(".menu").each(function(elem) {
		elem.childElements().each(function(li) {
			li.addClassName('submenu');
            Width_li=li.getWidth();
			Width=Width_ul-Width_before;
			Width_before+=Width_li;
			$div=li.select('div')[0];
			if(typeof $div != 'undefined'){
				Width_div=$div.getWidth();
				sub=Width_div-Width;
				if(sub>0){
					$div.addClassName(' position-right')
					li.addClassName('position-right-li')
				}
			}
        });
		
	});
}


function resetTinyScrollbarWhenMoved() {
	var $ = jQuery;
	$('#scrollbar1, #scrollbar2').each(function() {
		var sb = this;
		var last_parent = $(sb).parents();
		$(sb).mouseup(function() {
			setTimeout(function() {
				var current_parent = $(sb).parents();
				
				if (last_parent.length == current_parent.length) {
					for (var i = 0; i < last_parent.length; i++)
						if (last_parent[i] != current_parent[i]) {
							reset();
							break;
						}
				}
				else 
					reset();
			}, 500);
		});
		
		function reset() {
			$(sb).tinyscrollbar({ axis: 'x', scroll: true,size:'auto',sizethumb: "auto"});
			last_parent = $(sb).parents();
		}
	});
}

document.observe("dom:loaded", function() {
	menu();
	resetTinyScrollbarWhenMoved();
});

// }}}

})();
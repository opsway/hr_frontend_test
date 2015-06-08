
var lz_poll_server = "http://www.togas.ru/livezilla/";
var lz_poll_url = "http://www.togas.ru/livezilla/server.php";
var lz_poll_website = "";
var lz_poll_frequency = 90;
var lz_poll_file_chat = "chat.php";
var lz_window_width = "590";
var lz_window_height = "760";
var lz_area_code = "";
var lz_user_name = "";
var lz_user_email = "";
var lz_user_company = "";
var lz_user_question = "";
var lz_user_phone = "";
var lz_user_customs = new Array('','','','','','','','','','');
var lz_user_language = "";
var lz_user_header = "";
var lz_user_website = "";
var lz_get_parameters = "fbpos=MTI_&fbml=MA__&fbmt=MA__&fbmr=MA__&fbmb=MA__&fbw=MzI_&fbh=MTEy";

var lz_alert_html = 'PGRpdiBpZD0ibHpfY2hhdF9hbGVydF9ib3giIHN0eWxlPSJiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cDovL3d3dy50b2dhcy5ydS9saXZlemlsbGEvaW1hZ2VzL2NoYXRfYmdfZm9vdGVyLmdpZicpOyI+CgogICAgPHRhYmxlIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iOTUlIj4KCQk8dHI+CgkJCTx0ZCBoZWlnaHQ9IjIwIiBzdHlsZT0iZm9udC1mYW1pbHk6aGVsdmV0aWNhLGFyaWFsLHZlcmRhbmE7Zm9udC1zaXplOjEwcHg7Y29sb3I6I0ZGRkZGRjtmb250LXdlaWdodDpib2xkO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTsiIGNvbHNwYW49IjIiPiZuYnNwO3d3dy50b2dhcy5ydTwvdGQ+CgkJPC90cj4KCQk8dHI+CgkJCTx0ZCBpZD0ibHpfY2hhdF9hbGVydF9pY29uIiB3aWR0aD0iMzIiIGFsaWduPSJjZW50ZXIiIHZhbGlnbj0idG9wIj48aW1nIHNyYz0iaHR0cDovL3d3dy50b2dhcy5ydS9saXZlemlsbGEvaW1hZ2VzL2ljb25faW5mby5naWYiIGFsdD0iIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGJvcmRlcj0iMCIgc3R5bGU9Im1hcmdpbjoxNXB4OyI+PC90ZD4KCQkJPHRkIGlkPSJsel9jaGF0X2FsZXJ0X2JveF90ZXh0Ij48L3RkPgoJCTwvdHI+CgkJPHRyPgoJCQk8dGQgaGVpZ2h0PSI0MCIgdmFsaWduPSJ0b3AiIGFsaWduPSJjZW50ZXIiIGNvbHNwYW49IjIiPjxpbnB1dCB0eXBlPSJidXR0b24iIGNsYXNzPSJsel9mb3JtX2J1dHRvbiIgaWQ9Imx6X2NoYXRfYWxlcnRfYnV0dG9uIiB2YWx1ZT0iT0siPjwvdGQ+CgkJPC90cj4KCTwvdGFibGU+CjwvZGl2Pgo8ZGl2IGlkPSJsel9jaGF0X2FsZXJ0X2JnIj48L2Rpdj4KCgo=';
var lz_is_ie = false;

var lz_overlay_chat_available = false;
var lz_overlays_possible = true;

var lz_geo_error_span = 45;
var lz_geo_data_count = 6;
var lz_geo_resolution = null;
var lz_geo_resolution;
var lz_geo_resolution_needed = false;
var lz_user_id = "68e3a4ad11";
var lz_browser_id = "9ce8844620";
var lz_server_id = "5448e";
var lz_geo_url = "?aid=&sid=NWRhYmU3NDE=&dbp=0";
var lz_mip = "212.59.13.xxx";
var lz_oak = '';
var lz_is_tablet = false;



var lz_resources = new Array(false,false,false,false,false,false);
createCSSCheck("csschktr");

LazyLoad=function(x,h){function r(b,a){var c=h.createElement(b),d;for(d in a)a.hasOwnProperty(d)&&c.setAttribute(d,a[d]);return c}function k(b){var a=i[b],c,d;if(a){c=a.callback;d=a.urls;d.shift();l=0;if(!d.length){c&&c.call(a.context,a.obj);i[b]=null;j[b].length&&m(b)}}}function w(){if(!e){var b=navigator.userAgent;e={async:h.createElement("script").async===true};(e.webkit=/AppleWebKit\//.test(b))||(e.ie=/MSIE/.test(b))||(e.opera=/Opera/.test(b))||(e.gecko=/Gecko\//.test(b))||(e.unknown=true)}}function m(b,
a,c,d,s){var n=function(){k(b)},o=b==="css",f,g,p;w();if(a){a=typeof a==="string"?[a]:a.concat();if(o||e.async||e.gecko||e.opera)j[b].push({urls:a,callback:c,obj:d,context:s});else{f=0;for(g=a.length;f<g;++f)j[b].push({urls:[a[f]],callback:f===g-1?c:null,obj:d,context:s})}}if(!(i[b]||!(p=i[b]=j[b].shift()))){q||(q=h.head||h.getElementsByTagName("head")[0]);a=p.urls;f=0;for(g=a.length;f<g;++f){c=a[f];if(o)c=r("link",{charset:"utf-8","class":"lazyload",href:c,rel:"stylesheet",type:"text/css"});else{c=
r("script",{charset:"utf-8","class":"lazyload",src:c});c.async=false}if(e.ie)c.onreadystatechange=function(){var t=this.readyState;if(t==="loaded"||t==="complete"){this.onreadystatechange=null;n()}};else if(o&&(e.gecko||e.webkit))if(e.webkit){p.urls[f]=c.href;u()}else setTimeout(n,50*g);else c.onload=c.onerror=n;q.appendChild(c)}}}function u(){var b=i.css,a;if(b){for(a=v.length;a&&--a;)if(v[a].href===b.urls[0]){k("css");break}l+=1;if(b)l<200?setTimeout(u,50):k("css")}}var e,q,i={},l=0,j={css:[],js:[]},
v=h.styleSheets;return{css:function(b,a,c,d){m("css",b,a,c,d)},js:function(b,a,c,d){m("js",b,a,c,d)}}}(this,this.document);

LazyLoad.js([lz_poll_server + "templates/jscript/jsbox.js",lz_poll_server + "templates/jscript/jsglobal.js",lz_poll_server + "templates/jscript/jstrack.js"], function () {lz_resources[0]=true;lz_resources[1]=true;lz_resources[2]=true;});

if(lz_overlay_chat_available)
{
	createCSSCheck("csschkoc");
	LazyLoad.css(lz_poll_server + "templates/overlays/chat/style.css", function (arg) {}, '');
	LazyLoad.js(lz_poll_server + "templates/overlays/chat/jscript/jsextern.js", function () {lz_resources[4]=true;});
}

LazyLoad.css(lz_poll_server + "templates/style.css", function (arg) {}, '');

lz_tracking_start_system();
function lz_tracking_start_system()
{
	if(!lz_resources[5] && getStyle(document.getElementById("csschktr"),"display") === "none")
		lz_resources[5]=true;
		
	if(lz_overlay_chat_available && !lz_resources[3] && getStyle(document.getElementById("csschkoc"),"display") === "none")
		lz_resources[3]=true;

	if(!lz_resources[0] || !lz_resources[1] || !lz_resources[2] || !lz_resources[5] || (lz_overlay_chat_available && (!lz_resources[3] || !lz_resources[4])))
	{	
		setTimeout(lz_tracking_start_system, 50);
		return;
	}
	lz_geo_resolution = new lz_geo_resolver();
	window.onerror=lz_global_handle_exception;
	
	if(location.search.indexOf("lzcobrowse") != -1)
		return;
		
	lz_session = new lz_jssess();
	lz_session.Load();
	
	try
	{
		if(window.opener != null && typeof(window.opener.lz_get_session) != 'undefined')
		{
			lz_session.UserId = window.opener.lz_get_session().UserId;
			lz_session.GeoResolved = window.opener.lz_get_session().GeoResolved;
		}
	}
	catch(ex)
	{
		// ACCESS DENIED
	}
	
	lz_session.Save();
	if(!lz_tracking_geo_resolute())
		lz_tracking_poll_server();
}

function getStyle(_elem,_prop)
{
	if(lz_is_ie)
		return _elem.currentStyle[_prop];
	else
	{
		var cs=document.defaultView.getComputedStyle(_elem,null);
		return cs.getPropertyValue(_prop);
	}
}

function createCSSCheck(_id)
{
	var lz_css_check = document.createElement('div');
	lz_css_check.id = _id;
	lz_css_check.style.visibility = 'hidden';
	document.body.appendChild(lz_css_check);
}

(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? 'images/pasted-image-69.png' : 'images/pasted-image-69.png');
$('.js2').attr('src', (dpi>1) ? 'images/pasted-image-69.png' : 'images/pasted-image-69.png');}else if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/pasted-image-69.png' : 'images/pasted-image-69.png');
$('.js2').attr('src', (dpi>1) ? 'images/pasted-image-69.png' : 'images/pasted-image-69.png');}else{$('.js').attr('src', (dpi>1) ? 'images/pasted-image-69.png' : 'images/pasted-image-69.png');
$('.js2').attr('src', (dpi>1) ? 'images/pasted-image-69.png' : 'images/pasted-image-69.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});
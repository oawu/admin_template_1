!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){t.fn.extend({OAdropUploadImg:function(e){var i={},n=function(e){a(e),t(this).attr("data-loading","讀取中..").removeClass("no")},a=function(e){t(this).removeAttr("data-loading").addClass("no"),e.attr("src","")},h=function(t,e,i){var n=new Image;n.src=t.target.result,n.onload=function(){_vmxw=1024;var t=document.createElement("canvas");6==i||8==i?(t.height=n.width,t.width=n.height):(t.width=n.width,t.height=n.height),Math.max(t.width,t.height)>_vmxw&&(t.width>t.height?(t.height=_vmxw/t.width*t.height,t.width=_vmxw):(t.width=_vmxw/t.height*t.width,t.height=_vmxw)),3==i?(t.getContext("2d").transform(-1,0,0,-1,t.width,t.height),t.getContext("2d").drawImage(n,0,0,t.width,t.height)):6==i?(t.getContext("2d").transform(0,1,-1,0,t.width,0),t.getContext("2d").drawImage(n,0,0,t.height,t.width)):8==i?(t.getContext("2d").transform(0,-1,1,0,0,t.height),t.getContext("2d").drawImage(n,0,0,t.height,t.width)):t.getContext("2d").drawImage(n,0,0,t.width,t.height),e(t)}},r=function(t,e){var i=new FileReader;i.onload=function(t){var i=new DataView(t.target.result);if(65496!=i.getUint16(0,!1))return h(this,e,-2);for(var n=i.byteLength,a=2;n>a;){var r=i.getUint16(a,!1);if(a+=2,65505==r){if(1165519206!=i.getUint32(a+=2,!1))return h(this,e,-1);var o=18761==i.getUint16(a+=6,!1);a+=i.getUint32(a+4,o);var d=i.getUint16(a,o);a+=2;for(var g=0;d>g;g++)if(274==i.getUint16(a+12*g,o))return h(this,e,i.getUint16(a+12*g+8,o))}else{if(65280!=(65280&r))break;a+=i.getUint16(a,!1)}}return h(this,e,-1)}.bind(this),i.readAsArrayBuffer(t.slice(0,65536))},o=function(e,i){var n=t(this),a=new FileReader;a.onload=function(t){r.bind(t,i,function(t){e.attr("src",t.toDataURL()).load(function(){n.removeAttr("data-loading")})})()},a.readAsDataURL(i)},d=function(){var e=t(this),i=e.find("img"),h=e.find('input[type="file"]').change(function(){n.bind(e,i)(),t(this).val().length&&t(this).get(0).files&&t(this).get(0).files[0]?o.bind(e,i,t(this).get(0).files[0])():a.bind(e,i)(),t(this).css({top:0,left:0})});i.attr("src").length||e.addClass("no"),e.bind("dragover",function(e){e.stopPropagation(),e.preventDefault(),t(this).addClass("ho"),h.offset({top:e.originalEvent.pageY-15,left:e.originalEvent.pageX-10})}).bind("dragleave",function(e){e.stopPropagation(),e.preventDefault(),t(this).removeClass("ho")}).bind("drop",function(){t(this).removeClass("ho")})};return t(this).each(function(){d.bind(t(this))(t.extend(!0,i,e))}),t(this)}})});
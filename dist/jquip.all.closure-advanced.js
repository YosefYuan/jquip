var p=void 0,s=!0,t=null,x=!1;
window.$=window.jquip=function(){function b(a,d,e){if(a===d)return e;for(a=a.nextSibling;a;){if(a===d)return-1;a=a.nextSibling}return 1}function c(a,d){return new r(a,d)}function r(a,d){for(var e,i=0,v=O.length;i<v;i++)if(O[i].apply(this,arguments))return this;if(!a)return this;if("function"==typeof a)return y("require docready"),this;if(I(a))return this.make(a);if(a.nodeType||K(a))return this.make([a]);if("body"==a&&!d&&u.body)return this.context=a.context,this[0]=u.body,this.length=1,this.selector=
a,this;if(a.selector!==p)return this.context=a.context,this.selector=a.selector,this.make(a);a=j(a)&&"<"===a.charAt(0)?(e=pa.exec(a))?(a=[u.createElement(e[1])])&&P(d)?c.h.Q.call(a,d)&&a:a:Q(a).childNodes:m(a,d);return this.make(a)}function z(a,d,e){d=d||0;return A(d)?C(a,function(a,v){return!!d.call(a,v,a)===e}):d.nodeType?C(a,function(a){return a===d===e}):j(d)?C(a,function(a){return a.parentNode&&0<=F(m(d,a.parentNode),a)}):C(a,function(a){return 0<=F(d,a)===e})}function f(a,d){for(var d=" "+d+
" ",e=0,i=a.length;e<i;e++)if(1===a[e].nodeType&&-1<(" "+a[e].className+" ").replace(W," ").indexOf(d))return s;return x}function k(a,d,e){d=d||u;e=e||[];1==d.nodeType&&a(d)&&e.push(d);for(var d=d.childNodes,i=0,v=d.length;i<v;i++){var b=d[i];1==b.nodeType&&k(a,b,e)}return e}function m(a,d,e){if(a&&j(a)){d instanceof c&&(d=d[0]);var d=d||u,e=e||c.query,i=a.charAt(0),v=a.substring(1),b=qa.test(v),g;try{return b?G.call(e(a,d)):b?G.call(e(a,d)):"#"==i?(g=u.getElementById(v))?[g]:X:G.call("."==i?d.getElementsByClassName(v):
d.getElementsByTagName(a))}catch(h){y(h)}}return 1==a.nodeType||9==a.nodeType?[a]:X}function D(a,d,e){var i=u.head||u.getElementsByTagName("head")[0]||R,v=u.createElement("script"),b;if(e)v.async="async";v.onreadystatechange=function(){if(!(b=v.readyState)||"loaded"==b||"complete"==b)v.onload=v.onreadystatechange=t,i&&v.parentNode&&i.removeChild(v),v=p,d&&d()};v.onload=d;v.src=a;i.insertBefore(v,i.firstChild)}function y(){console&&console.warn(arguments)}function w(a,d,e){if(a!=t)if(Y&&a.forEach===
Y)a.forEach(d,e);else if(a.length===+a.length)for(var i=0,b=a.length;i<b&&!(i in a&&d.call(e,a[i],i,a)===Z);i++);else for(i in a)if(L.call(a,i)&&d.call(e,a[i],i,a)===Z)break}function F(a,d){if(a==t)return-1;var e,i;if(aa&&a.indexOf===aa)return a.indexOf(d);for(e=0,i=a.length;e<i;e++)if(a[e]===d)return e;return-1}function E(a,d,e){for(var i=[],a=a[d];a&&9!==a.nodeType&&(e===p||1!==a.nodeType||!c(a).V(e));)1===a.nodeType&&i.push(a),a=a[d];return i}function B(a,d,e){for(var d=d||1,i=0;a&&!(1===a.nodeType&&
++i===d);a=a[e]);return a}function o(a,d){for(var e=[];a;a=a.nextSibling)1===a.nodeType&&a!==d&&e.push(a);return e}function C(a,d,e){for(var i=[],b,e=!!e,g=0,j=a.length;g<j;g++)b=!!d(a[g],g),e!==b&&i.push(a[g]);return i}function H(a,d,e){var i,b,g=[],j=0,h=a.length;if(a instanceof c||"number"==typeof h&&(0<h&&a[0]&&a[h-1]||0===h||I(a)))for(;j<h;j++)i=d(a[j],j,e),i!=t&&(g[g.length]=i);else for(b in a)i=d(a[b],b,e),i!=t&&(g[g.length]=i);return g.concat.apply([],g)}function g(a,d,e){if(!a)return{};if(d&&
e)return a.setAttribute(d,e),t;var i={};w(n(a),function(a,d){0===d.indexOf("data-")&&a&&(i[d.substr(5)]=a)});return j(d)?i[d]:i}function n(a){for(var d={},e=0,a=a.attributes,i=a.length;e<i;e++)d[a.item(e).nodeName]=a.item(e).nodeValue;return d}function h(a){return a==t?""+a:ba[ra.call(a)]||"object"}function j(a){return"string"==typeof a}function A(a){return"function"==typeof a||"function"===h(a)}function I(a){return"array"===h(a)}function K(a){return a&&"object"==typeof a&&"setInterval"in a}function P(a){if(!a||
"object"!==h(a)||a.nodeType||K(a))return x;try{if(a.constructor&&!L.call(a,"constructor")&&!L.call(a.constructor.prototype,"isPrototypeOf"))return x}catch(d){return x}for(var e in a);return e===p||L.call(a,e)}function J(a,d){var e=a.length,i=0;if("number"==typeof d.length)for(var b=d.length;i<b;i++)a[e++]=d[i];else for(;d[i]!==p;)a[e++]=d[i++];a.length=e;return a}function ca(){var a,d,e,i,b,g=arguments,j=g[0]||{},h=1,c=g.length,n=x;"boolean"==typeof j&&(n=j,j=g[1]||{},h=2);"object"!=typeof j&&!A(j)&&
(j={});c===h&&(j=this,--h);for(;h<c;h++)if((a=g[h])!=t)for(d in a)e=j[d],i=a[d],j!==i&&(n&&i&&(P(i)||(b=I(i)))?(b?(b=x,e=e&&I(e)?e:[]):e=e&&P(e)?e:{},j[d]=ca(n,e,i)):i!==p&&(j[d]=i));return j}function S(a,d){var e=d||[];if(a!=t){var i=h(a);a.length==t||"string"==i||"function"==i||"regexp"===i||K(a)?da.call(e,a):J(e,a)}return e}function Q(a,d,e){d=d||u||d.ownerDocument||d[0]&&d[0].ownerDocument||u;e=e||d.createDocumentFragment();if(!j(a)&&"number"==typeof a.length){var i=e,b=[],g,h;for(g=0;(h=a[g])!=
t;g++)j(h)&&(h=ea(h,d)),h.nodeType?b.push(h):b=J(b,h);if(i)for(g=0;g<b.length;g++)b[g].nodeType&&i.appendChild(b[g]);return b&&e}for(a=ea(a);a.firstChild;)e.appendChild(a.firstChild);return e}function ea(a,d){var e=(d||u).createElement("div"),i=(sa.exec(a)||["",""])[1].toLowerCase(),i=fa[i]||fa.j,b=i[0];for(e.innerHTML=i[1]+a+i[2];b--;)e=e.lastChild;return e}function ga(a){if(T&&(M=ta,a.sort(T),M))for(var d=1;d<a.length;d++)a[d]===a[d-1]&&a.splice(d--,1);return a}function ua(){if(!u.body)return t;
var a=u.createElement("div");u.body.appendChild(a);a.style.width="20px";a.style.padding="10px";var d=a.offsetWidth;u.body.removeChild(a);return 40==d}var N=window,u=document,R=u.documentElement,va=/Until$/,wa=/,/,xa=/^(?:parents|prevUntil|prevAll)/,sa=/<([\w:]+)/,W=/[\n\t\r]/g,ha=/\s+/,ya=/\d/,za=/\r\n/g,pa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ia=/\r?\n/g,Aa=/^(?:select|textarea)/i,Ba=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ja=String.prototype.trim,
U,ka=/^\s+/,la=/\s+$/,V,T,Ca={children:s,T:s,next:s,ba:s},ra=Object.prototype.toString,ba={},M=x,ta=s,fa={Z:[1,"<select multiple='multiple'>","</select>"],W:[1,"<fieldset>","</fieldset>"],fa:[1,"<table>","</table>"],ga:[2,"<table><tbody>","</tbody></table>"],ea:[3,"<table><tbody><tr>","</tr></tbody></table>"],S:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],P:[1,"<map>","</map>"],j:[0,"",""]},qa=/[,\s.\[]/,X=[],Z={},q=Array.prototype,L=Object.prototype.hasOwnProperty,G=q.slice,da=q.push,
ma=q.indexOf,Y=q.forEach,na=q.filter,aa=q.indexOf;/\S/.test("\u00a0")&&(ka=/^[\s\xA0]+/,la=/[\s\xA0]+$/);var O=[],Da=0,q=c.fn=c.prototype={constructor:c,selector:"",d:function(a,d,e){var i;if((a=a[0])&&this[0])if(i=(d=a&&a.parentNode)&&11===d.nodeType&&d.childNodes.length===this.length?d:Q(a),a=i,d=a.firstChild,1===a.childNodes.length&&(a=d),d)for(d=0,l=this.length;d<l;d++)e.call(this[d],a);return this},a:function(a,d,e){var i=this.constructor();I(a)?da.apply(i,a):J(i,a);i.ca=this;i.k=this.k;if("find"===
d)i.f=this.f+(this.f?" ":"")+e;else if(d)i.f=this.f+"."+d+"("+e+")";return i}};q.make=function(a){this.length=a&&a.length||0;if(0!=this.length)for(var d=0,e=a.length;d<e;d++)this[d]=a[d];return this};q.toArray=function(){return G.call(this,0)};q.get=function(a){return a==t?this.toArray():0>a?this[this.length+a]:this[a]};q.add=function(a,d){return this.make(c(a,d))};q.each=function(a){if(!A(a))return this;for(var d=0,e=this.length;d<e;d++)a.call(this[d],d,this[d]);return this};q.attr=function(a,d){var e=
this[0];return j(a)&&d===p?e&&"INPUT"===e.nodeName&&"text"===e.type&&"value"===a?this.val():e?e.getAttribute(a)||(a in e?e[a]:p):t:this.each(function(e){var b=this.nodeType;if(3!==b&&8!==b&&2!==b)if("object"==typeof a)for(var g in a)d===t?this.removeAttribute(a):this.setAttribute(g,a[g]);else this.setAttribute(a,A(d)?d.call(this,e,this.getAttribute(a)):d)})};q.removeAttr=function(a){return this.each(function(){this.removeAttribute(a)})};q.data=function(a,d){return g(this[0],a,d)};q.append=function(){return this.d(arguments,
s,function(a){1===this.nodeType&&this.appendChild(a)})};q.prepend=function(){return this.d(arguments,s,function(a){1===this.nodeType&&this.insertBefore(a,this.firstChild)})};q.before=function(){return this.d(arguments,x,function(a){this.parentNode.insertBefore(a,this)})};q.after=function(){this[0]&&this[0].parentNode&&this.d(arguments,x,function(a){this.parentNode.insertBefore(a,this.nextSibling)});return this};q.hide=function(){this.each(function(){this.style.display="none"})};q.show=function(){this.each(function(){this.style.display=
"block"})};q.toggle=function(){this.each(function(){this.style.display="none"===this.style.display?"block":"none"})};q.eq=function(a){return-1===a?this.slice(a):this.slice(a,+a+1)};q.first=function(){return this.eq(0)};q.last=function(){return this.eq(-1)};q.slice=function(){return this.a(G.apply(this,arguments),"slice",G.call(arguments).join(","))};q.map=function(a){return this.a(H(this,function(d,e){return a.call(d,e,d)}))};q.find=function(a){var d=this,e,i;if(!j(a))return c(a).filter(function(){for(e=
0,i=d.length;e<i;e++)if(V(d[e],this))return s});var b=this.a("","find",a),g,h,n;for(e=0,i=this.length;e<i;e++)if(g=b.X,J(b,c(a,this[e])),0==e)for(h=g;h<b.length;h++)for(n=0;n<g;n++)if(b[n]===b[h]){b.splice(h--,1);break}return b};q.not=function(a){return this.a(z(this,a,x),"not",a)};q.filter=function(a){return this.a(z(this,a,s),"filter",a)};q.indexOf=function(a){return F(this,a)};q.is=function(a){return 0<this.length&&0<c(this[0]).filter(a).length};q.remove=function(){for(var a=0,d;(d=this[a])!=t;a++)d.parentNode&&
d.parentNode.removeChild(d);return this};q.val=function(a){return a==t?this[0]&&this[0].value||"":this.each(function(){this.value=a})};q.html=function(a){return a==t?this[0]&&this[0].innerHTML||"":this.each(function(){this.innerHTML=a})};q.text=function(a){var d=this[0],e;return"undefined"==typeof a?d&&(e=d.nodeType)?1===e||9===e?"string"==typeof d.textContent?d.textContent:d.innerText.replace(za,""):3===e||4===e?d.nodeValue:t:t:this.empty().append((d&&d.ownerDocument||u).createTextNode(txt))};q.empty=
function(){for(var a=0,d;(d=this[a])!=t;a++)for(;d.firstChild;)d.removeChild(d.firstChild);return this};q.addClass=function(a){var d,e,b,g,h,n,o;if(A(a))return this.each(function(d){c(this).addClass(a.call(this,d,this.className))});if(a&&j(a)){d=a.split(ha);for(e=0,b=this.length;e<b;e++)if((g=this[e])&&1===g.nodeType)if(!g.className&&1===d.length)g.className=a;else{h=" "+g.className+" ";for(n=0,o=d.length;n<o;n++)~h.indexOf(" "+d[n]+" ")||(h+=d[n]+" ");g.className=U(h)}}return this};q.removeClass=
function(a){var d,e,b,g,h,n,o;if(A(a))return this.each(function(d){c(this).removeClass(a.call(this,d,this.className))});if(a&&j(a)||a===p){d=(a||"").split(ha);for(e=0,b=this.length;e<b;e++)if(g=this[e],1===g.nodeType&&g.className)if(a){h=(" "+g.className+" ").replace(W," ");for(n=0,o=d.length;n<o;n++)h=h.replace(" "+d[n]+" "," ");g.className=U(h)}else g.className=""}return this};q.hasClass=function(a){return f(this,a)};q.fadeIn=function(){this.each(function(){c(this).show()})};q.fadeOut=function(){this.each(function(){c(this).hide()})};
q.serializeArray=function(){return this.map(function(){return this.elements?S(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Aa.test(this.nodeName)||Ba.test(this.type))}).map(function(a,d){var e=c(this).val();return e==t||I(e)?H(e,function(a){return{name:d.name,value:a.replace(ia,"\r\n")}}):{name:d.name,value:e.replace(ia,"\r\n")}}).get()};r.prototype=q;c.hasClass=f;c.walk=k;c.$$=m;c.setQuery=function(a){c.query=function(d,e){return m(d,e,a||function(a,d){return d.querySelectorAll(a)})}};
var oa=N.Sizzle||N.qwery;c.setQuery(oa||function(a,d){return u.querySelectorAll?(d||u).querySelectorAll(a):[]});c.loadScript=D;c.each=function(a,d,e){var b,g=0,h=a.length,j=h===p||A(a);if(e){if(j)for(b in a)if(d.apply(a[b],e)===x)break;else for(;g<h&&!(d.apply(a[g++],e)===x););}else if(j)for(b in a)if(d.call(a[b],b,a[b])===x)break;else for(;g<h&&!(d.call(a[g],g,a[g++])===x););return a};c._each=w;c._indexOf=F;c._defaults=function(a){w(G.call(arguments,1),function(d){for(var e in d)a[e]==t&&(a[e]=d[e])});
return a};c._filter=function(a,d,e){var b=[];if(a==t)return b;if(na&&a.filter===na)return a.filter(d,e);w(a,function(a,g,h){d.call(e,a,g,h)&&(b[b.length]=a)});return b};c.proxy=function(a,d){if("string"==typeof d)var e=a[d],d=a,a=e;if(A(a)){var b=G.call(arguments,2),e=function(){return a.apply(d,b.concat(G.call(arguments)))};e.i=a.i=a.i||e.i||Da++;return e}};c.dir=E;c.nth=B;c.sibling=o;c.grep=C;c.map=H;c.data=g;c.attrs=n;c.eqSI=function(a,d){return!a||!d?a==d:a.toLowerCase()===d.toLowerCase()};c.trim=
U=ja?function(a){return a==t?"":ja.call(a)}:function(a){return a==t?"":a.toString().replace(ka,"").replace(la,"")};c.indexOf=c.inArray=function(a,d){if(!d)return-1;if(ma)return ma.call(d,a);for(var e=0,b=d.length;e<b;e++)if(d[e]===a)return e;return-1};w("Boolean Number String Function Array Date RegExp Object".split(" "),function(a){ba["[object "+a+"]"]=a.toLowerCase();return this});c.type=h;c.isFunction=A;c.isArray=Array.isArray||I;c.isWindow=K;c.isNaN=function(a){return a==t||!ya.test(a)||isNaN(a)};
c.merge=J;c.extend=c.fn.extend=ca;c.makeArray=S;c.htmlFrag=Q;V=c.contains=R.contains?function(a,d){return a!==d&&(a.contains?a.contains(d):s)}:function(){return x};T=R.compareDocumentPosition?(V=function(a,d){return!!(a.compareDocumentPosition(d)&16)})&&function(a,d){return a===d?(M=s,0):!a.compareDocumentPosition||!d.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(d)&4?-1:1}:function(a,d){if(a===d)return M=s,0;if(a.sourceIndex&&d.sourceIndex)return a.sourceIndex-
d.sourceIndex;var e,g,h=[],j=[];e=a.parentNode;g=d.parentNode;var n=e;if(e===g)return b(a,d);if(e){if(!g)return 1}else return-1;for(;n;)h.unshift(n),n=n.parentNode;for(n=g;n;)j.unshift(n),n=n.parentNode;e=h.length;g=j.length;for(n=0;n<e&&n<g;n++)if(h[n]!==j[n])return b(h[n],j[n]);return n===e?b(a,j[n],-1):b(h[n],d,1)};c.unique=ga;w({parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:t},parents:function(a){return E(a,"parentNode")},parentsUntil:function(a,d,e){return E(a,"parentNode",e)},
next:function(a){return B(a,2,"nextSibling")},prev:function(a){return B(a,2,"previousSibling")},nextAll:function(a){return E(a,"nextSibling")},prevAll:function(a){return E(a,"previousSibling")},nextUntil:function(a,d,e){return E(a,"nextSibling",e)},prevUntil:function(a,d,e){return E(a,"previousSibling",e)},siblings:function(a){return o(a.parentNode.firstChild,a)},children:function(a){return o(a.firstChild)},contents:function(a){return"iframe"===a.nodeName?a.contentDocument||a.contentWindow["document "]:
S(a.childNodes)}},function(a,d){c.fn[d]=function(e,b){var g=H(this,a,e),h=G.call(arguments);va.test(d)||(b=e);b&&j(b)&&(g=m(b,g));g=1<this.length&&!Ca[d]?ga(g):g;if((1<this.length||wa.test(b))&&xa.test(d))g=g.reverse();return this.a(g,d,h.join(","))}});(function(){var a=document.createElement("div");a.style.display="none";a.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";a=a.getElementsByTagName("a")[0];c.support={R:t,opacity:/^0.55$/.test(a.style.opacity),
cssFloat:!!a.style.cssFloat};var a=/(opera)(?:.*version)?[ \/]([\w.]+)/,d=/(msie) ([\w.]+)/,e=/(mozilla)(?:.*? rv:([\w.]+))?/,b=navigator.userAgent.toLowerCase(),a=/(webkit)[ \/]([\w.]+)/.exec(b)||a.exec(b)||d.exec(b)||0>b.indexOf("compatible")&&e.exec(b)||[];(c.browser={version:a[2]||"0"})[a[1]||""]=s})();c.init=x;c.onload=function(){if(!c.init)try{c.support.boxModel=ua(),!oa&&!u.querySelectorAll&&D("http://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js",function(){c.setQuery=N.Sizzle||
N.qwery}),c.init=s}catch(a){}};if(u.body&&!c.init)c.onload();c.hook=function(a){O.push(a)};c.plug=function(a,d){d=A(a)?a:d;if(!A(d))throw"Plugin fn required";d(c)};return c}();
$.plug("ajax",function(b){var c=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("MSXML2.XMLHTTP.3.0")},function(){return new ActiveXObject("MSXML2.XMLHTTP")}],r=t;b.xhr=function(){if(r!=t)return r();for(var b=0,f=c.length;b<f;b++)try{var k=c[b],m=k();if(m!=t)return r=k,m}catch(D){}return function(){}};b._xhrResp=function(b,c){c=c||b.getResponseHeader("Content-Type").split(";")[0];switch(c){case "text/xml":return b.responseXML;
case "json":case "text/json":case "application/json":case "text/javascript":case "application/javascript":case "application/x-javascript":return window.JSON?JSON.parse(b.responseText):eval(b.responseText);default:return b.responseText}};b.formData=function(b){var c=[],k=/%20/g,m;for(m in b)c.push(encodeURIComponent(m).replace(k,"+")+"="+encodeURIComponent(b[m].toString()).replace(k,"+"));return c.join("&")};b.ajax=function(c){var f=f(),k,m=0,c=b._defaults(c,{userAgent:"XMLHttpRequest",lang:"en",type:"GET",
data:t,contentType:"application/x-www-form-urlencoded",dataType:"application/json"});c.timeout&&(k=setTimeout(function(){f.abort();c.s&&c.s(c.url)},c.timeout));f.onreadystatechange=function(){4==f.readyState?(k&&clearTimeout(k),300>f.status?c.g&&c.g(_xhrResp(f,c.dataType)):c.error&&c.error(f,f.status,f.statusText),c.complete&&c.complete(f,f.statusText)):c.q&&c.q(++m)};var r=c.url,y=t,w="POST"==c.type||"PUT"==c.type;!w&&c.data&&(r+="?"+formData(c.data));f.open(c.type,r);w&&(y=(r=0<=c.dataType.indexOf("json"))?
JSON.stringify(c.data):formData(c.data),f.setRequestHeader("Content-Type",r?"application/json":"application/x-www-form-urlencoded"));f.send(y)};b.getJSON=function(c,f,k,m){b.isFunction(f)&&(m=k,k=f,f=t);ajax({url:c,dataType:"json",data:f,g:k,error:m})};b.get=function(c,f,k,m){b.isFunction(f)&&(m=k,k=f,f=t);ajax({url:c,type:"GET",data:f,g:k,dataType:m||"text/plain"})};b.post=function(c,f,k,m){b.isFunction(f)&&(m=k,k=f,f=t);ajax({url:c,type:"POST",data:f,g:k,dataType:m||"text/plain"})}});
$.plug("css",function(b){function c(b,c){return c.toUpperCase()}function r(g,c,h){var j,A=z(c),f=b.cssHooks[A],c=b.cssProps[A]||A;if(f&&"get"in f&&(j=f.get(g,s,h))!==p)return j;if(o)return o(g,c,A)}function z(b){return b.replace(w,c)}function f(g,c,h,j,o,m){var C=g.length;if("object"===typeof c){for(var k in c)f(g,k,c[k],j,o,h);return g}if(h!==p){j=!m&&j&&b.isFunction(h);for(k=0;k<C;k++)o(g[k],c,j?h.call(g[k],k,o(g[k],c)):h,m);return g}return C?o(g[0],c):p}function k(g){return b.isWindow(g)?g:9===
g.nodeType?g.defaultView||g.parentWindow:x}var m=document,D=/alpha\([^)]*\)/i,y=/opacity=([^)]*)/,w=/-([a-z])/ig,F=/([A-Z])/g,E=/^-?\d+(?:px)?$/i,B=/^-?\d/,o,C,H;b.cssHooks={opacity:{get:function(b,c){if(!c)return b.style.opacity;var h=o(b,"opacity","opacity");return""===h?"1":h}}};b.support.opacity||(b.support.opacity={get:function(b,c){return y.test((c&&b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100+"":c?"1":""},set:function(g,c){var h=g.style;h.zoom=1;var j=
b.isNaN(c)?"":"alpha(opacity="+100*c+")",o=h.filter||"";h.filter=D.test(o)?o.replace(D,j):h.filter+" "+j}});m.defaultView&&m.defaultView.getComputedStyle&&(C=function(g,c,h){var j,h=h.replace(F,"-$1").toLowerCase();if(c=g.ownerDocument.defaultView){if(c=c.getComputedStyle(g,t))j=c.getPropertyValue(h),""===j&&!b.contains(g.ownerDocument.documentElement,g)&&(j=b.style(g,h));return j}});m.documentElement.currentStyle&&(H=function(b,c){var h,j=b.currentStyle&&b.currentStyle[c],o=b.runtimeStyle&&b.runtimeStyle[c],
f=b.style;if(!E.test(j)&&B.test(j)){h=f.left;if(o)b.runtimeStyle.left=b.currentStyle.left;f.left="fontSize"===c?"1em":j||0;j=f.pixelLeft+"px";f.left=h;if(o)b.runtimeStyle.left=o}return""===j?"auto":j});o=C||H;b.fn["css "]=function(b,c){return 2===arguments.length&&c===p?this:f(this,b,c,s,function(b,c,g){return g!==p?style(b,c,g):r(b,c)})};b.cssNumber={zIndex:s,fontWeight:s,opacity:s,zoom:s,lineHeight:s};b.cssProps={"float":b.support.cssFloat?"cssFloat":"styleFloat"};b.style=function(c,o,h,j){if(c&&
!(3===c.nodeType||8===c.nodeType||!c.style)){var f,m=z(o),C=c.style,k=b.cssHooks[m],o=b.cssProps[m]||m;if(h!==p){if(!("number"===typeof h&&isNaN(h)||h==t))if("number"===typeof h&&!b.cssNumber[m]&&(h+="px"),!k||!("set"in k)||(h=k.set(c,h))!==p)try{C[o]=h}catch(H){}}else return k&&"get"in k&&(f=k.get(c,x,j))!==p?f:C[o]}};b.css=r;b.swap=function(b,c,h){var j={},o;for(o in c)j[o]=b.style[o],b.style[o]=c[o];h.call(b);for(o in c)b.style[o]=j[o]};b.camelCase=z;b._each(["Height","Width"],function(c){var o=
c.toLowerCase();b.fn["inner"+c]=function(){var b=this[0];return b&&b.style?parseFloat(r(b,o,"padding")):t};b.fn["outer"+c]=function(b){var c=this[0];return c&&c.style?parseFloat(r(c,o,b?"margin":"border")):t};b.fn[o]=function(h){var j=this[0];if(!j)return h==t?t:this;if(b.isFunction(h))return this.m(function(c){var g=b(this);g[o](h.call(this,c,g[o]()))});if(b.isWindow(j)){var f=j.document.documentElement["client"+c],m=j.document.body;return"CSS1Compat"===j.document.compatMode&&f||m&&m["client"+c]||
f}if(9===j.nodeType)return Math.max(j.documentElement["client"+c],j.body["scroll"+c],j.documentElement["scroll"+c],j.body["offset"+c],j.documentElement["offset"+c]);return h===p?(j=r(j,o),f=parseFloat(j),b.isNaN(f)?j:f):this.U(o,"string"===typeof h?h:h+"px")}});b._each(["Left","Top"],function(c,o){var h="scroll"+c;b.fn[h]=function(c){var g,f;if(c===p){g=this[0];return!g?t:(f=k(g))?"pageXOffset"in f?f[o?"pageYOffset":"pageXOffset"]:b.support.boxModel&&f.document.documentElement[h]||f.document.body[h]:
g[h]}return this.m(function(){(f=k(this))?f.scrollTo(!o?c:b(f).scrollLeft(),o?c:b(f).scrollTop()):this[h]=c})}})});
$.plug("custom",function(b){for(var c={},r=window.location.search.substring(1).split("&"),z=0;z<r.length;z++){var f=r[z].split("=");c[f[0]]=unescape(f[1])}b.queryString=function(b){return c[b]};var k=b.Key=function(b){this.keyCode=b};k.p={u:8,N:9,C:13,M:16,w:17,t:18,K:19,v:20,D:27,J:33,I:34,B:35,F:36,H:37,O:38,L:39,A:40,G:45,z:46};b._each(k.p,function(b,c){k.prototype["is"+c]=function(){return this.keyCode===b}});b.key=function(b){b=b||window.event;return new k(b.keyCode||b.which)};b.cancelEvent=
function(b){if(!b)b=window.event;b.cancelBubble=s;b.returnValue=x;b.stopPropagation&&(b.stopPropagation(),b.preventDefault());return x};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,o:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(c,f){var k=b.templateSettings,k="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+c.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(k.escape,function(b,c){return"',_.escape("+c.replace(/\\'/g,"'")+"),'"}).replace(k.o,
function(b,c){return"',"+c.replace(/\\'/g,"'")+",'"}).replace(k.evaluate||t,function(b,c){return"');"+c.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",r=new Function("obj","_",k);return f?r(f,_):function(b){return r(b,_)}}});
$.plug("docready",function(b){function c(){if(!y){try{f.documentElement.doScroll("left")}catch(b){setTimeout(c,1);return}r()}}function r(c){c===s&&w--;if(!w||c!==s&&!y){if(!f.body)return setTimeout(m,1);y=s;if(!(c!==s&&0<--w)&&D){var k=0,m=D;for(D=t;c=m[k++];)c.call(f,b);b.fn.trigger&&b(f).trigger("ready").unbind("ready")}}}var z=window,f=document,k,m,D=[],y=x,w=1;b.hook(function(b){if("function"==typeof b)return this.da(b),s});b.ready=r;k=f.addEventListener?function(){f.removeEventListener("DOMContentLoaded",
k,x);r()}:function(){"complete"===f.readyState&&(f.detachEvent("onreadystatechange",k),r())};b.bindReady=function(){if(!m){m=s;if("complete"===f.readyState)return setTimeout(r,1);if(f.addEventListener)f.addEventListener("DOMContentLoaded",k,x),z.addEventListener("load",r,x);else if(f.attachEvent){f.attachEvent("onreadystatechange",k);z.attachEvent("onload",r);var b=x;try{b=window.frameElement==t}catch(w){}f.documentElement.doScroll&&b&&c()}}};b.fn.ready=function(c){b.bindReady();y?c.call(f,b):D&&
D.push(c);return this};b.init||b(document).ready(b.onload)});
$.plug("events",function(b){function c(b,c,f){b.addEventListener?b.addEventListener(c,f,x):(b["e"+c+f]=f,b[c+f]=function(){b["e"+c+f](win.event)},b.attachEvent("on"+c,b[c+f]))}function r(b,c,f){b.removeEventListener?b.removeEventListener(c,f,x):(b.detachEvent("on"+c,b[c+f]),b[c+f]=t)}function z(b){b=(""+b).split(".");return{c:b[0],e:b.slice(1).sort().join(" ")}}function f(c,f,k,g){f=z(f);if(f.e)var n=RegExp("(?:^| )"+f.e.replace(" "," .* ?")+"(?: |$)");return b._filter(w[c.b||(c.b=F++)]||[],function(b){return b&&
(!f.c||b.c==f.c)&&(!f.e||n.test(b.e))&&(!k||b.h==k)&&(!g||b.r==g)})}function k(f,k,m,g,n){var h=f.b||(f.b=F++),j=w[h]||(w[h]=[]);b._each(k.split(/\s/),function(h){h=b.extend(z(h),{h:m,r:g,l:n,n:j.length});j.push(h);c(f,h.c,n||m)});f=t}function m(c,k,m,g){var n=c.b||(c.b=F++);b._each((k||"").split(/\s/),function(h){b._each(f(c,h,m,g),function(b){delete w[n][b.n];r(c,b.c,b.l||b.h)})})}function D(c){var f=b.extend({aa:c},c);b._each(E,function(b){f[b]=function(){return c[b].apply(c,arguments)}});return f}
var y=document,w={},F=1;b.bind=c;b.unbind=r;var E=["preventDefault","stopImmediatePropagation","stopPropagation"],B=b.fn;b._each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(b){B[b]=function(c,f){return 0<arguments.length?this.bind(b,c,f):this.trigger(b)}});B.bind=function(b,c){return this.each(function(){k(this,b,c)})};B.unbind=function(b,
c){return this.each(function(){m(this,b,c)})};B.one=function(b,c){return this.each(function(){var f=this;k(this,b,function(){c();m(f,b,arguments.callee)})})};B.delegate=function(c,f,m){return this.each(function(g,n){k(n,f,m,c,function(g){for(var f=g.target,k=b.$$(c,n);f&&0>k.indexOf(f);)f=f.parentNode;f&&f!==n&&f!==document&&m.call(f,b.extend(D(g||window.event),{currentTarget:f,Y:n}))})})};B.undelegate=function(b,c,f){return this.each(function(){m(this,c,f,b)})};B.live=function(c,f){b(y.body).delegate(this.selector,
c,f);return this};B.die=function(c,f){b(y.body).undelegate(this.selector,c,f);return this};B.trigger=function(b){return this.each(function(){var c=y.createEvent("Events");this.dispatchEvent(c,c.initEvent(b,s,s))})};b.init||b(window).bind("load",b.onload)});
define("Placeholders.js/3.0.2/placeholders",[],function(){!function(e){"use strict";function t(e,t,r){return e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent?e.attachEvent("on"+t,r):void 0}function r(e,t){var r,n;for(r=0,n=e.length;n>r;r++)if(e[r]===t)return!0;return!1}function n(e,t){var r;e.createTextRange?(r=e.createTextRange(),r.move("character",t),r.select()):e.selectionStart&&(e.focus(),e.setSelectionRange(t,t))}function a(e,t){try{return e.type=t,!0}catch(r){var n,a=e.outerHTML,u=e.value,i="type="+e.type;a.indexOf(i)<0?(n=document.createElement(a),n.setAttribute("type",t)):(a=a.replace(i,"type="+t),n=document.createElement(a));var l=e.parentElement;return l.removeChild(e),l.appendChild(n),n.value=u,!1}}e.Placeholders={Utils:{addEventListener:t,inArray:r,moveCaret:n,changeType:a}}}(this),function(e){"use strict";function t(){}function r(){try{return document.activeElement}catch(e){}}function n(e,t){var r,n,a=!!t&&e.value!==t,u=e.value===e.getAttribute(P);if((a||u)&&"true"===e.getAttribute(V)){if(e.removeAttribute(V),e.value=e.value.replace(e.getAttribute(P),""),e.className=e.className.replace(R,""),n=e.getAttribute(O),parseInt(n,10)>=0&&(e.setAttribute("maxLength",n),e.removeAttribute(O)),r=e.getAttribute(j),r&&!J.changeType(e,r)){var i=e.getAttribute("id"),l=document.getElementById(i);l.focus(),v(l),l.focus()}return!0}return!1}function a(e){var t,r=e.getAttribute(P);if(""===e.value&&r){if(e.setAttribute(V,"true"),e.value=r,e.className+=" "+k,t=e.getAttribute(O),t||(e.setAttribute(O,e.maxLength),e.removeAttribute("maxLength")),"password"===e.type)if(J.changeType(e,"text"))e.setAttribute(j,"password");else{var n=e.getAttribute("id"),a=document.getElementById(n);v(a),a.setAttribute(j,"password")}return!0}return!1}function u(e,t){var r,n,a,u,i,l,o;if(e&&e.getAttribute(P))t(e);else for(a=e?e.getElementsByTagName("input"):f,u=e?e.getElementsByTagName("textarea"):m,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],t(i)}function i(e){u(e,n)}function l(e){u(e,a)}function o(e){return function(){b&&e.value===e.getAttribute(P)&&"true"===e.getAttribute(V)?J.moveCaret(e,0):n(e)}}function c(e){return function(){a(e)}}function s(e){return function(t){return A=e.value,"true"===e.getAttribute(V)&&A===e.getAttribute(P)&&J.inArray(S,t.keyCode)?(t.preventDefault&&t.preventDefault(),!1):void 0}}function d(e){return function(){n(e,A),""===e.value&&(e.blur(),J.moveCaret(e,0))}}function g(e){return function(){e===r()&&e.value===e.getAttribute(P)&&"true"===e.getAttribute(V)&&J.moveCaret(e,0)}}function p(e){return function(){i(e)}}function v(e){e.form&&(T=e.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(D)||(J.addEventListener(T,"submit",p(T)),T.setAttribute(D,"true"))),J.addEventListener(e,"focus",o(e)),J.addEventListener(e,"blur",c(e)),b&&(J.addEventListener(e,"keydown",s(e)),J.addEventListener(e,"keyup",d(e)),J.addEventListener(e,"click",g(e))),e.setAttribute(U,"true"),e.setAttribute(P,x)}var f,m,b,h,A,y,E,x,L,T,w,B,C,N=["text","search","url","tel","email","password","number","textarea"],S=[27,33,34,35,36,37,38,39,40,8,46],I="#ccc",k="placeholdersjs",R=new RegExp("(?:^|\\s)"+k+"(?!\\S)"),P="data-placeholder-value",V="data-placeholder-active",j="data-placeholder-type",D="data-placeholder-submit",U="data-placeholder-bound",H="data-placeholder-focus",M="data-placeholder-live",O="data-placeholder-maxlength",q=document.createElement("input"),z=document.getElementsByTagName("head")[0],F=document.documentElement,G=e.Placeholders,J=G.Utils;if(G.nativeSupport=void 0!==q.placeholder,!G.nativeSupport){for(f=document.getElementsByTagName("input"),m=document.getElementsByTagName("textarea"),b="false"===F.getAttribute(H),h="false"!==F.getAttribute(M),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+k+" { color:"+I+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),z.insertBefore(y,z.firstChild),C=0,B=f.length+m.length;B>C;C++)w=C<f.length?f[C]:m[C-f.length],x=w.attributes.placeholder,x&&(x=x.nodeValue,x&&J.inArray(N,w.type)&&(v(w),(b||w!==r())&&a(w)));L=setInterval(function(){for(C=0,B=f.length+m.length;B>C;C++)w=C<f.length?f[C]:m[C-f.length],x=w.attributes.placeholder,x?(x=x.nodeValue,x&&J.inArray(N,w.type)&&(w.getAttribute(U)||(v(w),(b||w!==r())&&a(w)),(x!==w.getAttribute(P)||"password"===w.type&&!w.getAttribute(j))&&("password"===w.type&&!w.getAttribute(j)&&J.changeType(w,"text")&&w.setAttribute(j,"password"),w.value===w.getAttribute(P)&&(w.value=x),w.setAttribute(P,x)))):w.getAttribute(V)&&(n(w),w.removeAttribute(P));h||clearInterval(L)},100)}J.addEventListener(e,"beforeunload",function(){G.disable()}),G.disable=G.nativeSupport?t:i,G.enable=G.nativeSupport?t:l}(this)});
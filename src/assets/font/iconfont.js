(function(window){var svgSprite='<svg><symbol id="icon-dianhua" viewBox="0 0 1024 1024"><path d="M626.56 792.32a177.28 177.28 0 1 0 354.56 0 177.28 177.28 0 1 0-354.56 0zM94.72 231.68a177.28 177.28 0 1 0 354.56 0 177.28 177.28 0 1 0-354.56 0z" fill="#515151" ></path><path d="M776.96 786.56a1007.36 1007.36 0 0 1-515.84-554.88H94.72a946.56 946.56 0 0 0 682.24 736z" fill="#515151" ></path></symbol><symbol id="icon-dayinji" viewBox="0 0 1024 1024"><path d="M879.2832 269.63968h-23.45472V125.0048c0-42.99776-39.0912-78.1824-82.08384-78.1824H253.83936c-46.90944 0-82.08896 35.17952-82.08896 78.1824v144.63488H144.384c-46.90944 0-82.08896 35.17952-82.08896 78.1824v312.71936c0 43.00288 39.0912 78.18752 82.08896 78.18752h62.54592v218.90048c0 11.72992 7.81824 19.54304 19.54304 19.54304h566.81472c11.7248 0 19.53792-7.81312 19.53792-19.54304v-218.90048h62.55104c46.90944 0 82.08896-35.18464 82.08896-78.18752V347.82208c3.91168-43.00288-35.17952-78.1824-78.1824-78.1824zM210.83648 125.0048c0-23.45472 19.54304-39.0912 42.99776-39.0912h515.9936c23.45472 0 42.99264 19.54816 42.99264 39.0912v144.63488H210.83648V125.0048z m562.90816 813.08672H249.92768V508.08832h527.7184v429.99808h-3.90144z m148.54144-277.55008c0 23.45472-19.54304 39.09632-42.99776 39.09632H816.7424V488.54528c0-11.72992-7.81312-19.54304-19.54304-19.54304H230.38464c-11.72992 0-19.54304 7.81824-19.54304 19.54304v211.09248H144.384c-23.45472 0-42.99776-19.54304-42.99776-39.09632V347.82208c0-23.45472 19.54304-39.0912 42.99776-39.0912h730.99264c23.45472 0 42.99264 19.54304 42.99264 39.0912v312.71936h3.9168z"  ></path><path d="M726.8352 613.632H296.83712c-11.72992 0-19.54304 7.82336-19.54304 19.55328 0 11.7248 7.81824 19.53792 19.54304 19.53792h429.99808c11.7248 0 19.53792-7.81312 19.53792-19.53792 0-11.72992-7.81312-19.55328-19.53792-19.55328z m0 179.81952H296.83712c-11.72992 0-19.54304 7.81312-19.54304 19.54304 0 11.7248 7.81824 19.54816 19.54304 19.54816h429.99808c11.7248 0 19.53792-7.82336 19.53792-19.54816 0-11.72992-7.81312-19.54304-19.53792-19.54304zM156.1088 386.90816a39.0912 39.0912 0 0 0 78.1824 0.03584v-0.03072c0-21.59104-17.50016-39.0912-39.0912-39.0912s-39.0912 17.50016-39.0912 39.08608z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
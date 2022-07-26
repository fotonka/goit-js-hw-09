const t=document.querySelector("button, [data-start]"),e=document.querySelector("button, [data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval()}));
//# sourceMappingURL=01-color-switcher.5832816c.js.map

const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(d),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}));let d=null;e.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.ae518fdf.js.map

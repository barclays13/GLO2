!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{const e=document.querySelector("menu");document.body.addEventListener("click",t=>{let o=t.target;(!o.closest(".active-menu")||o.closest(".close-btn")||o.href)&&e.classList.remove("active-menu"),o.closest(".menu")&&e.classList.add("active-menu")})};var r=()=>{const e=document.querySelector("a>img");let t;const o=()=>{let e=document.documentElement.scrollTop;t=requestAnimationFrame(o),(e+=20)<=880?document.documentElement.scrollTop=e:cancelAnimationFrame(t)};e.addEventListener("click",(function(){t=requestAnimationFrame(o)}))};var c=()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content");document.querySelectorAll(".popup-btn").forEach(o=>{o.addEventListener("click",()=>{if(screen.width>992){e.style.display="block",t.style.left=0;let o,n=0;const r=()=>{o=requestAnimationFrame(r),++n<38?t.style.left=n+"%":cancelAnimationFrame(o)};o=requestAnimationFrame(r)}else e.style.display="block"})}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"))||(e.style.display="none")})};var l=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;(n=n.closest(".service-header-tab"))&&t.forEach((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var a=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content"));t.insertAdjacentHTML("beforeend",'<ul class="portfolio-dots"></ul>');const o=document.querySelector(".portfolio-dots");for(let t=0;t<e.length;t++)0===t&&o.insertAdjacentHTML("afterbegin",'<li class="dot dot-active"></li>'),t>0&&o.insertAdjacentHTML("beforeend",'<li class="dot"></li>');const n=document.querySelectorAll(".dot");let r,c=0;const l=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(e,c,"portfolio-item-active"),l(n,c,"dot-active"),++c>=e.length&&(c=0),a(e,c,"portfolio-item-active"),a(n,c,"dot-active")},u=(e=3e3)=>{r=setInterval(s,e)};t.addEventListener("click",t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(l(e,c,"portfolio-item-active"),l(n,c,"dot-active"),o.matches("#arrow-right")&&c++,o.matches("#arrow-left")?c--:o.matches(".dot")&&n.forEach((e,t)=>{e===o&&(c=t)}),c>=e.length&&(c=0),c<0&&(c=e.length-1),a(e,c,"portfolio-item-active"),a(n,c,"dot-active"))}),t.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)}),t.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()}),u(1500)};var s=()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day");e.addEventListener("input",()=>{e.value=e.value.replace(/\[0-9]/g,"")}),t.addEventListener("input",()=>{t.value=t.value.replace(/\D/g,"")}),o.addEventListener("input",()=>{o.value=o.value.replace(/\D/g,"")}),document.querySelectorAll(".form-phone").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9+]/,"")})}),document.getElementsByName("user_name").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яё]/iu,"")})}),document.getElementsByName("user_message").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яё\s]/iu,"")})}),document.getElementsByName("user_email").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^a-z0-9+\@\.]/,"")})})};var u=()=>{const e=document.querySelector("#command");let t;e.addEventListener("mouseover",e=>{e.target.src&&(t=e.target.src,e.target.src=e.target.dataset.img)}),e.addEventListener("mouseout",e=>{e.target.src&&(e.target.src=t)})};var i=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("change",t=>{const a=t.target;(a.matches("select")||a.matches("input"))&&(()=>{let t=0,a=1,s=1;const u=o.options[o.selectedIndex].value,i=+n.value;r.value>1&&(a+=(r.value-1)/10),c.value&&c.value<5?s*=2:c.value&&c.value<10&&(s*=1.5),t=u&&i?Math.floor(e*u*i*a*s):0,l.textContent=t})()})};var d=()=>{const e=document.getElementsByName("user_form"),t=document.createElement("div");t.style.cssText="font-size: 2rem",e.forEach(n=>{n.addEventListener("submit",r=>{r.preventDefault(),n!==e[2]?(n.appendChild(t),t.textContent="Загрузка..."):(n.appendChild(t),t.textContent="Загрузка...",t.style.cssText="font-size: 2rem; color: #fff");const c=new FormData(n);let l={};c.forEach((e,t)=>{l[t]=e}),o(l).then(e=>{e.status,t.textContent="Спасибо, мы скоро с вами свяжемся!";n.querySelectorAll("input").forEach(e=>e.value="")}).catch(e=>{t.textContent="Что-то пошло не так...",console.error(e)})})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=document.querySelector(".timer-numbers");function c(e){return e<10?"0"+e:e}const l=()=>{let a=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=c(Math.floor(t%60)),n=c(Math.floor(t/60%60));return{timeRemaining:t,hours:c(Math.floor(t/60/60)%24),minutes:n,seconds:o}}();a.timeRemaining>0?(t.textContent=a.hours,o.textContent=a.minutes,n.textContent=a.seconds,setInterval(l,1e3)):(t.textContent="00",o.textContent="00",n.textContent="00",r.style.color="red")};l(),c()})("30 September 2019"),n(),r(),c(),l(),a(),s(),u(),i(100),d()}]);
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const d=document.querySelectorAll(".js-open-modal"),c=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close"),s=document.querySelector("form"),t=document.querySelector(".scroll-button"),o=document.querySelector("#your-order"),r=document.querySelectorAll(".cookies-close"),u=document.querySelector(".cookies-open"),i=document.querySelector(".backdrop-cookies");r.forEach(function(e){e.addEventListener("click",function(l){l.preventDefault(),i.classList.add("is-hidden"),document.documentElement.style.overflowY="scroll"})}),u.addEventListener("click",function(e){e.preventDefault(),i.classList.remove("is-hidden")}),d.forEach(function(e){e.addEventListener("click",function(l){l.preventDefault();const a=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+a+'"]').classList.add("active"),c.classList.add("active"),document.documentElement.style.overflowY="hidden"})}),n.forEach(function(e){e.addEventListener("click",function(l){this.closest(".modal").classList.remove("active"),c.classList.remove("active"),document.documentElement.style.overflowY="scroll"})}),document.body.addEventListener("keyup",function(e){e.keyCode==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),document.documentElement.style.overflowY="scroll")},!1),c.addEventListener("click",function(e){!e.target.closest(".modal")||e.target.closest("a")||e.target.closest(".btn-close")?(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.documentElement.style.overflowY="scroll"):e.target.closest(".scroll-button")&&(o.scrollIntoView({behavior:"smooth"}),document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.documentElement.style.overflowY="scroll")}),t.addEventListener("click",function(e){o.scrollIntoView({behavior:"smooth"}),e.preventDefault()}),s.addEventListener("submit",function(e){document.querySelector('.modal[data-modal="2"]').classList.add("active"),c.classList.add("active"),s.reset(),e.preventDefault(),document.documentElement.style.overflowY="hidden"})});
//# sourceMappingURL=commonHelpers.js.map

// switch

!function(){var t,e=document.getElementById("darkSwitch");if(e){t=null!==localStorage.getItem("darkSwitch")&&"dark"===localStorage.getItem("darkSwitch"),(e.checked=t)?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme"),e.addEventListener("change",function(t){e.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("darkSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("darkSwitch"))})}}();

//auto expanding contact text area

var autoExpand=function(field){field.style.height='inherit'; var computed=window.getComputedStyle(field); var height=parseInt(computed.getPropertyValue('border-top-width'), 10) + parseInt(computed.getPropertyValue('padding-top'), 10) + field.scrollHeight + parseInt(computed.getPropertyValue('padding-bottom'), 10) + parseInt(computed.getPropertyValue('border-bottom-width'), 10); field.style.height=height + 'px';};document.addEventListener('input', function(event){if (event.target.tagName.toLowerCase() !=='textarea') return; autoExpand(event.target);}, false);
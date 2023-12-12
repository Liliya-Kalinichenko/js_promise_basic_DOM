var e=document.querySelector(".logo"),n=document.querySelector("body"),o=new Promise(function(n){e.addEventListener("click",function(){n()})}),r=new Promise(function(e,n){setTimeout(function(){n(Error())},3e3)});o.then(function(){n.insertAdjacentHTML("beforeend",'<div class="message">\n      Promise was resolved!\n    <div>')}),r.catch(function(){n.insertAdjacentHTML("beforeend",'<div class="error-message message">\n      Promise was rejected!\n    <div>')});//# sourceMappingURL=index.38f1fab2.js.map

//# sourceMappingURL=index.38f1fab2.js.map

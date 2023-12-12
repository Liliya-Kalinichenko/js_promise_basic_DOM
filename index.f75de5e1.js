"use strict";
const logo = document.querySelector(".logo");
const body = document.querySelector("body");
const promise1 = new Promise((resolve)=>{
    logo.addEventListener("click", ()=>{
        resolve();
    });
});
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error());
    }, 3000);
});
promise1.then(()=>{
    body.insertAdjacentHTML("beforeend", `<div class="message">
      Promise was resolved!
    <div>`);
});
promise2.catch(()=>{
    body.insertAdjacentHTML("beforeend", `<div class="error-message message">
      Promise was rejected!
    <div>`);
});

//# sourceMappingURL=index.f75de5e1.js.map

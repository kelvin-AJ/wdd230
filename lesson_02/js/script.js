'use strict'
const footerEl = document.querySelector("footer");

const curDate = new Date();
const year = curDate.getFullYear();
let lastModifiedDate = new Date(document.lastModified);

let modYear = lastModifiedDate.getFullYear();
let modDay = lastModifiedDate.getDay();
let modMonth = lastModifiedDate.getMonth();
let modminute = lastModifiedDate.getMinutes();
let modsecond = lastModifiedDate.getSeconds()
let modhour = lastModifiedDate.getHours(); 


footerEl.insertAdjacentHTML("afterbegin", `
&#169 ${year} | Olamilekan K. Ajibola | Last Updated: ${modMonth}/${modDay}/${modYear} ${modhour}:${modminute}:${modsecond}`);
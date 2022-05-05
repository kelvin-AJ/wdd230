'use strict'

const footerEl = document.querySelector(".footer-grid")

const curDate = new Date();
const year = curDate.getFullYear();

footerEl.insertAdjacentHTML("afterbegin", `
&#169 ${year} | Olamilekan K. Ajibola`)
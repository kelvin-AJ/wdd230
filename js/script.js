'use strict';
const assignmentList = document.querySelector(".work-list");
const footerHead = document.querySelector(".footer-head");
const foooterP = document.querySelector(".footer-p")


const lessons = [{
    number : "02",
    title : "Design Principles",
    href : "lesson_02\\design-principles.html"
},
{
    number : "03",
    title : "Website Planning",
    href : "lesson3\\index.html"
},
{
    number : "04",
    title : "Title",
    href : "#"
},
{
    number : "05",
    title : "Title",
    href : "#"
},
{
    number : "06",
    title : "Title",
    href : "#"
},
{
    number : "07",
    title : "Title",
    href : "#"
},
{
    number : "08",
    title : "Title",
    href : "#"
},
{
    number : "09",
    title : "Title",
    href : "#"
},
{
    number : "10",
    title : "Title",
    href : "#"
},
{
    number : "11",
    title : "Title",
    href : "#"
},
];

// Fill up Asignment List

assignmentList.innerHTML = "";
lessons.forEach(function(lesson){
    assignmentList.insertAdjacentHTML("beforeend", `<li>Lesson ${lesson.number}:  <a href="${lesson.href}">${lesson.title}</a></li>`)
});

// Fill up Footer
const curDate = new Date();
const year = curDate.getFullYear();
let lastModifiedDate = new Date(document.lastModified);

let modYear = lastModifiedDate.getFullYear();
let modDay = lastModifiedDate.getDay();
let modMonth = lastModifiedDate.getMonth();
let modminute = lastModifiedDate.getMinutes();
let modsecond = lastModifiedDate.getSeconds()
let modhour = lastModifiedDate.getHours(); 

footerHead.insertAdjacentHTML("afterbegin", `&#169 ${year} | Olamilekan K. Ajibola | Nigeria`);
foooterP.insertAdjacentHTML("afterbegin", `Last Updated: ${modMonth}/${modDay}/${modYear} ${modhour}:${modminute}:${modsecond} `)
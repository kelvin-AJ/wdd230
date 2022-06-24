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
    title : "Chamber Home Page Build",
    href : "chamber\\index.html"
},
{
    number : "05a",
    title : "DOM Manipulation",
    href : "bom\\bom.html"
},
{
    number : "05b",
    title : "Chamber Home Page complete",
    href : "chamber\\index.html"
},
{
    number : "06",
    title : "Responsive Design",
    href : "chamber\\index.html"
},
{
    number : "07",
    title : "Lazy Loading",
    href : "lesson_07\\lazyload.html"
},
{
    number : "07b",
    title : "Discover Page",
    href : "chamber\\discover.html"
},
{
    number : "08",
    title : "HTML Tables",
    href : "lesson_08\\tablebuild.html"
},
{
    number : "08b",
    title : "HTML Forms",
    href : "chamber\\join.html"
},
{
    number : "09",
    title : "Working with JSON Data and the fetch API",
    href : "lesson_09\\prophets.html"
},
{
    number : "09b",
    title : "The Directory Page",
    href : "chamber\\directory.html"
},
{
    number : "10",
    title : "Weather API",
    href : "lesson_10\\weather-api.html"
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
'use strict';
const assignmentList = document.querySelector(".work-list");
const footerHead = document.querySelector(".foooter-head");
const foooterP = document.querySelector(".footer-p")


const lessons = [{
    number : 2,
    title : "Title",
    href : "####"
},
{
    number : 3,
    title : "Title",
    href : "####"
},
{
    number : 4,
    title : "Title",
    href : "####"
},
{
    number : 5,
    title : "Title",
    href : "####"
},
{
    number : 6,
    title : "Title",
    href : "####"
},
{
    number : 7,
    title : "Title",
    href : "####"
},
{
    number : 8,
    title : "Title",
    href : "####"
},
{
    number : 9,
    title : "Title",
    href : "####"
},
{
    number : 10,
    title : "Title",
    href : "####"
},
{
    number : 11,
    title : "Title",
    href : "####"
},
];

// Fill up Asignment List

assignmentList.innerHTML = "";
lessons.forEach(function(lesson){
    assignmentList.insertAdjacentHTML("beforeend", `<li>Lesson ${lesson.number}: <a href="${lesson.href}">${lesson.title}</a></li>`)
})
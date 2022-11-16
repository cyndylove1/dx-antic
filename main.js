


var pagebody=document.querySelector(".page")
var hamburger=document.querySelector(".hamburger-container")


function add(){
   hamburger.classList.toggle('showbutton') 
}

var mobile=document.querySelector(".mobile")

function add(){
    hamburger.classList.toggle('showbutton')
    mobile.classList.toggle('showmobile')

}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    reset: true

 })
 sr.reveal('.first-div',{delay:350, origin:'leftt'})
 sr.reveal('.first-rightdiv', {delay:350, origin:'right'})
 sr.reveal('.second-div-text, .text-content,.section-text,.swiper-wrapper,.inspire-text', {delay:350, origin:'bottom'})

       
/* ==================== MENU SHOW HIDDEN =====================*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exists */ 
 if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
        navToggle.classList.add('hide-toggle')
        
    })
 }

 /* Hide menu */ 

 if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('hide-toggle')
    })
 }

 /* REMOVE MENU MOBILE */

 const navLink = document.querySelectorAll('.nav__link')

 function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu') 
    navToggle.classList.remove('hide-toggle')
 }

 navLink.forEach(n=> n.addEventListener('click', linkAction))
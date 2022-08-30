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

 /* ================== SKILLS ==================*/ 

 const skillsContent = document.getElementsByClassName('skills__content'),
 skillsHeader = document.querySelectorAll('.skills__header')

 function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0;i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
 }

 skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
 })

 /* ================= QUALIFICATIONS ================*/ 

 const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', ()=> {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/* ================== PROJECTS ==============  */

const modalViews = document.querySelectorAll('.services__modal'),
modalBtns = document.querySelectorAll('.services__button'),
modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* =========== SWIPER ===========*/

let swiperPortfolio = new Swiper(".portfolio__container", {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      });

/* ==================== TESTIMONIAL ===================== */ 

let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor:true,
    loop: true,
    spaceBetween: 48, 
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
    
  });

  /* =================== SCROLL SECTIONS ACTIVE LINK ===================== */ 

  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight 
        const sectionTop = current.offsetTop - 50; 
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
  }
  window.addEventListener('scroll', scrollActive)

  /* =================== CHANGE BACKGROUND HEADER ==================== */ 

  function scrollHeader(){
    const nav = document.getElementById('header')
    // when the scroll is greater than 200 viewport height, add the scroll header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
  }

  window.addEventListener('scroll', scrollHeader)
//Smooth Scroll


const Links= document.querySelectorAll('.nav ul li a');
const service=document.querySelectorAll('.service');
const service_detail=document.querySelector('.services-deatil-content');
const header =document.querySelector('header');
const progresse_bar=document.querySelector('.progresse-bar');
console.log(Links);


// window.onload=()=>{
//     scrollY=0;
// }

for(const link of Links){
    link.addEventListener('click',smoothScroll)
}

function smoothScroll(e){
    e.preventDefault();
    const href=this.getAttribute("href");
    
    document.querySelector(href).scrollIntoView({
        behavior:'smooth'
    });

    
}



window.onscroll=()=>{
    //Animate on scroll
    scrolDisplay();
    //fixed the header 
    headerscroll();
    // Scroll Progrese
    scrollProgresse();


    
}

function scrollProgresse(){
    let top=-document.body.getBoundingClientRect().top;
    let progresseWidth=(top / (document.body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    console.log(" heigth :"+document.body.getBoundingClientRect().height)
    console.log(" top :"+top)
    progresse_bar.style.width=`${progresseWidth}%`
}
function headerscroll(){
    if(scrollY == 0 ){
        header.style.backgroundColor='transparent';
        
    }
    else {
    header.style.backgroundColor='rgb(13, 43, 77)'
    }
}
function scrolDisplay(){
    if(window.innerWidth < 800 && window.innerWidth > 500){
       scrollesize(900);
      
    }
    else if(window.innerWidth < 500){
        
        scrollesize(1500);
    }
    else{
        
        scrollesize(0);
    }
    
}
function scrollesize(size){
    if(scrollY >=300){
        service.forEach(x=>{
            x.classList.add('animateActive')
        })
    }
    if(scrollY >= 800 + size ){
        service_detail.classList.add('animateActive');
        document.querySelector('.more-detail-box').classList.add('animateActive')
    }
    if(scrollY >= 1500 + size){
        document.querySelector('.about-image').classList.add('animateActive')
        document.querySelector('.about-title-more').classList.add('animateActive')
    }
    if(scrollY >= 2400 + size){
        
        document.querySelector('.already-subscriber').classList.add('animateActive')
        document.querySelector('.form-subscribe').classList.add('animateActive')
    }
    if(scrollY >= 2900 + size){
        
        document.querySelector('.latest-work-title').classList.add('animateActive')
        
        
    }
    if(scrollY >= 3100 + size){
        
        document.querySelectorAll('.latest-work-box').forEach(x=>{
            x.classList.add('animateActive');
        })
        
    }
    if(scrollY >= 4000 + size){
        
        document.querySelector('.team-dev-content').classList.add('animateActive')
        
    }
    if(scrollY >= 4250 + size){
        
        document.querySelector('.contact-pr').classList.add('animateActive')
        document.querySelector('.contact-link').classList.add('animateActive')
        
    }
    if(scrollY >= 4650 + size){
        
        document.querySelector('.copyright-and-logo').classList.add('animateActive')
        document.querySelector('.company-link').classList.add('animateActive')
        document.querySelector('.info-contact').classList.add('animateActive')
        
    }
}
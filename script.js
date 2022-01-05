//Smooth Scroll


const Links= document.querySelectorAll('.nav ul li a');
const service=document.querySelectorAll('.service');
const service_detail=document.querySelector('.services-deatil-content');

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
    scrolDisplay();
    console.log(scrollY)
}

function scrolDisplay(){
    if(scrollY >=300){
        service.forEach(x=>{
            x.classList.add('animateActive')
        })
    }
    if(scrollY >= 900){
        service_detail.classList.add('animateActive');
        document.querySelector('.more-detail-box').classList.add('animateActive')
    }
    if(scrollY >= 1500){
        document.querySelector('.about-image').classList.add('animateActive')
        document.querySelector('.about-title-more').classList.add('animateActive')
    }
    if(scrollY >= 2400){
        
        document.querySelector('.already-subscriber').classList.add('animateActive')
        document.querySelector('.form-subscribe').classList.add('animateActive')
    }
    if(scrollY >= 2900){
        
        document.querySelector('.latest-work-title').classList.add('animateActive')
        
        
    }
    if(scrollY >= 3100){
        
        document.querySelectorAll('.latest-work-box').forEach(x=>{
            x.classList.add('animateActive');
        })
        
    }
    if(scrollY >= 4000){
        
        document.querySelector('.team-dev-content').classList.add('animateActive')
        
    }
    if(scrollY >= 4250){
        
        document.querySelector('.contact-pr').classList.add('animateActive')
        document.querySelector('.contact-link').classList.add('animateActive')
        
    }
    if(scrollY >= 4550){
        
        document.querySelector('.copyright-and-logo').classList.add('animateActive')
        document.querySelector('.company-link').classList.add('animateActive')
        document.querySelector('.info-contact').classList.add('animateActive')
        
    }
}
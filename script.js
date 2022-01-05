//Smooth Scroll


const Links= document.querySelectorAll('.nav ul li a')
console.log(Links);




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
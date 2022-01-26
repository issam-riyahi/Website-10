//Smooth Scroll


const Links= document.querySelectorAll('.nav ul li a');
const service=document.querySelectorAll('.service');
const service_detail=document.querySelector('.services-deatil-content');
const header =document.querySelector('header');
const progresse_bar=document.querySelector('.progresse-bar');
console.log(Links);
const background=document.querySelectorAll('.home-background');
const leftSlideBtn = document.getElementById('btn-move-left');
const RightSlideBtn = document.getElementById('btn-move-right');



// Index of Image 
var indexValue=0;
//background fix width 
let eventIn = setInterval(backgroundCheckLeft, 5000);


//function boucle in background 

function backgroundCheckLeft(){
    indexValue = GetCurrentIndex();
    if(indexValue < background.length-1){
        background[indexValue].classList.remove('active');
        indexValue+=1;

    }
    else {
        background[indexValue].classList.remove('active');
        indexValue=0;
    }

    background[indexValue].classList.add('active');
}
background.forEach(x=>{
    x.style.width=`${window.innerWidth}px`
    
})

window.addEventListener('resize',()=>{

    background.forEach(x=>{
        x.style.width=`${window.innerWidth}px`
    })
});

window.addEventListener('load',()=>{

    background.forEach(x=>{
        x.style.width=`${window.innerWidth}px`
    })
})

// window.onload=()=>{
//     scrollY=0;
// }

for(const link of Links){
    link.addEventListener('click',smoothScroll);
    
    
}

function smoothScroll(e){
    e.preventDefault();
    const href=this.getAttribute("href");
    for(const link of Links){
        link.classList.remove('first');

    }
    this.classList.add('first')
    document.querySelector(href).scrollIntoView({
        behavior:'smooth'
    });

    showMenu();
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
    // console.log(" heigth :"+document.body.getBoundingClientRect().height)
    // console.log(" top :"+top)
    progresse_bar.style.width=`${progresseWidth}%`
}
function headerscroll(){
    if(scrollY == 0 ){
        header.classList.remove('fixedMenu')
        
    }
    else if(scrollY >=200) {
    header.classList.add('fixedMenu')
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
    if(scrollY >= 3900 + size){
        
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



leftSlideBtn.addEventListener('click',()=>{
    clearInterval(eventIn);
    showImageLeft();
    // console.log(indexValue)
    // backgroundCheckLeft();
    // setTimeout(() => {
    //     eventIn = setInterval(backgroundCheckLeft,5000);
    // }, 2000);
});

function showImageLeft(){

    if(indexValue < 1 ){
        background[indexValue].classList.remove('active');
        indexValue = background.length-1;
    }
    else {
        background[indexValue].classList.remove('active');
        indexValue--;
    }
    background[indexValue].classList.add('active');
    
}
function showImageright(){

    if(indexValue == background.length-1){
        background[indexValue].classList.remove('active');
        indexValue = 0;
    }
    else {
        background[indexValue].classList.remove('active');
        indexValue++;
    }
    background[indexValue].classList.add('active');
    
}
RightSlideBtn.addEventListener('click',()=>{
    clearInterval(eventIn);
    showImageright();
});



function GetCurrentIndex(){

    for(let i=0 ; i< background.length ; i++){
        if(background[i].classList.contains('active')){
            
           
           return i;
        } 

    }
    
}




//Container Slide 

const rowSlide = document.querySelector('.row-slide');

// Slide parte latest Work 


const slickDote = document.querySelectorAll('.slick-dote ul li');

// Width The Box 

let boxLatest = document.getElementsByClassName('latest-work-box')[0];
let style= getComputedStyle(boxLatest);
let boxWidth = boxLatest.offsetWidth;
let boxMargine =parseInt(style.marginRight) * 2;
var counter = 1 ;
console.log(boxWidth);


console.log(boxMargine);

//Interval Auto Slide 

let slideInterval = setInterval(
    slidebById
,5000);


//access to Slick Dote 

slickDote.forEach(x => {
    x.addEventListener('click',(e)=> {

        clearInterval(slideInterval);

        if(e.target.getAttribute("id") == "1"){
            counter = 0;
            removeActive(slickDote);
            slidebById();
            // rowSlide.style.marginLeft = `${0}px`;
            // e.target.classList.add('active');
        }
        else if(e.target.getAttribute("id") == "2"){
            counter = 1;
            removeActive(slickDote);
            slidebById();
            // rowSlide.style.marginLeft = `${-(boxWidth + boxMargine) }px`;
            // e.target.classList.add('active');
        }
        else if(e.target.getAttribute("id") == "3"){
            counter = 2;
            removeActive(slickDote);
            slidebById();
            // rowSlide.style.marginLeft = `${-(boxWidth + boxMargine) * 2}px`;
            // e.target.classList.add('active');
        }
        else if(e.target.getAttribute("id") == "4"){
            counter = 3;
            removeActive(slickDote);
            slidebById();
            // rowSlide.style.marginLeft = `${-(boxWidth + boxMargine) * 3}px`;
            // e.target.classList.add('active');
        }

        setTimeout(()=>{
            slideInterval = setInterval(
                slidebById
            ,5000)
        },2000)

    });
});



//function remove class Active from collection 

function removeActive(collection){
    collection.forEach(x => {
        x.classList.remove('active')
    })
}


function slidebById(){
    
    counter++;
    if(counter == 1){
        removeActive(slickDote);
        rowSlide.style.marginLeft = `${0}px`;
        slickDote[0].classList.add('active');
    }
    else if(counter == 2 ){
        removeActive(slickDote);
        rowSlide.style.marginLeft = `${-(boxWidth + boxMargine) }px`;
        slickDote[1].classList.add('active');
    }
    else if(counter == 3 ){
        removeActive(slickDote);
        rowSlide.style.marginLeft = `${-(boxWidth + boxMargine) * 2 }px`;
        slickDote[2].classList.add('active');
    }
    else if(counter == 4 ){
        removeActive(slickDote);
        rowSlide.style.marginLeft = `${-(boxWidth + boxMargine) * 3 }px`;
        slickDote[3].classList.add('active');
        counter = 0 ;
    }

    
}


//TEAM DEV PARTE

const teamDevSlide = document.querySelector('.team-dev-slide');
const teamDevContentChild = document.querySelectorAll('.team-dev-content-child');
const leftTeamsBtn = document.getElementById("btn-team-left");
const rigthTeamsBtn = document.getElementById("btn-team-rigth");

let widthTeamdevSlide = teamDevContentChild[0].offsetWidth * teamDevContentChild.length ;

let marginBoxleft = parseInt(getComputedStyle(teamDevContentChild[0]).marginLeft); 
let marginBoxRigth = parseInt(getComputedStyle(teamDevContentChild[0]).marginRight) ;

let marginTeamdevBox = marginBoxRigth + marginBoxleft ;

let widthBoxTeam = teamDevContentChild[0].offsetWidth + marginTeamdevBox; 
var counterBox = 0;

// console.log(widthTeamdevSlide)

teamDevSlide.style.width =`${widthTeamdevSlide + widthBoxTeam}px` ;
//Interval slide Team dev 

let intervalTeamdev = setInterval(() => {
    
    teamDevSlideF(teamDevContentChild.length );
}, 5000);

//Function slide team dev 

function teamDevSlideF(size){
    
    counterBox++;
    
    if(counterBox <= size -1){
        
        
        
        teamDevSlide.style.transition = `all .5s `;
        teamDevSlide.style.transform = `translate3D(${-widthBoxTeam * counterBox}px, 0 , 0)`;
    }
    else{
        counterBox = 0 ;
        
        teamDevSlide.style.transition = "";

        teamDevSlide.style.transform = `translate3D(${-widthBoxTeam * counterBox}px, 0 ,0`;
    }
    

    
    
    
}


// button 
leftTeamsBtn.addEventListener('click',()=>{

    clearInterval(intervalTeamdev);
    
    teamDevSlideFPrev(teamDevContentChild.length);

    intervalTeamdev = setInterval(() => {
    
        teamDevSlideF(teamDevContentChild.length );
    }, 5000);
    
});
rigthTeamsBtn.addEventListener('click',()=>{
    
    clearInterval(intervalTeamdev);
    
    
    teamDevSlideF(teamDevContentChild.length);

    intervalTeamdev = setInterval(() => {
    
        teamDevSlideF(teamDevContentChild.length );
    }, 5000);

});


function teamDevSlideFPrev(size){
    console.log(counterBox)
    if(counterBox <= 0){

        counterBox = size-1 ; 

        teamDevSlide.style.transition = `all .5s `;
        teamDevSlide.style.transform = `translate3D(${-widthBoxTeam * counterBox}px, 0 ,0`;

    }
    else {
        counterBox--;
        teamDevSlide.style.transition = `all .5s `;
        teamDevSlide.style.transform = `translate3D(${-widthBoxTeam * counterBox}px, 0 , 0)`;

    }
}

//Menu bar 

const menuBtn = document.querySelector('.menu-bars');

const menu = document.querySelector('.navigation');


menuBtn.addEventListener('click',showMenu);

function showMenu(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }
    else{
        menu.classList.add('active');
    }
}
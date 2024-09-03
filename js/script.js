const navbar=document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
    if(window.scrollY>=400){
        navbar.classList.add('navbar-scrolled');
    }else{
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('position-fixed');
    }
})
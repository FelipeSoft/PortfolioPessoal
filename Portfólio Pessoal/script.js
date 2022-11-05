var navbar = document.querySelector('header');

document.querySelector('.button-scroll').addEventListener('click', function(){
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
});

window.onload = () => document.querySelector('.button-scroll').style.marginBottom = '-120px';
window.onscroll = () => {
    if(window.scrollY > 0){
        navbar.classList.add('sticky');
        navbar.querySelector('h1 span').style.color = '#f3f3f3';
        if(window.scrollY > 200){
            document.querySelector('.button-scroll').style.marginBottom = '0px';
        } else {
            document.querySelector('.button-scroll').style.marginBottom = '-120px';
        }
    } else  {
        navbar.classList.remove('sticky');
        navbar.querySelector('h1 span').style.color = '#2a8aff';
    }
}
document.querySelector('#bars-menu').addEventListener('click', function(){
    document.querySelector('.menu-mobile').style.marginLeft = '0vw';
});
   
document.querySelector('.menu-mobile i').addEventListener('click', function(){
    document.querySelector('.menu-mobile').style.marginLeft = '100vw';
});
   
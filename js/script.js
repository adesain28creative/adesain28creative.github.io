var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.image-list');
    let contentposition = content.getBoundingClientRect().top;
    let screenposition = window.innerHeight /1.7;
    if(contentposition < screenposition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
});

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.image-list-box');
    let contentposition = content.getBoundingClientRect().top;
    let screenposition = window.innerHeight /1.7;
    if(contentposition < screenposition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
});

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.owner-list');
    let contentposition = content.getBoundingClientRect().top;
    let screenposition = window.innerHeight /1.7;
    if(contentposition < screenposition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
});

window.addEventListener('scroll',()=>{
    let contant = document.querySelector('.service-container ');
    let contantposition = contant.getBoundingClientRect().top;
    let screenposition = window.innerHeight / 1.7;
    if(contantposition < screenposition){
        contant.classList.add('active')
    }else{
        contant.classList.remove('active')
    }
});

window.addEventListener('scroll',()=>{
    let contant = document.querySelector('.partner-list');
    let contantposition = contant.getBoundingClientRect().top;
    let screenposition = window.innerHeight / 1.7;
    if(contantposition < screenposition){
        contant.classList.add('active')
    }else{
        contant.classList.remove('active')
    }
});
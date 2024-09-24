let btnNav=document.querySelector('.btn-nav');
let toggle1=document.getElementsByClassName('nav-togglers')[0]
let toggle2=document.getElementsByClassName('nav-togglers')[1]
let toggle3=document.getElementsByClassName('nav-togglers')[2]
let drop=document.querySelector('.drop')
btnNav.addEventListener('click',()=>{
btnNav.classList.toggle('active-toggle')
drop.classList.toggle('drop-block')
})






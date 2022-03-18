'use strict';

// console.log('Kalp Chaudhary');


const navLinks = document.querySelector('.links');
const btnLogin = document.querySelector('.btn');
const modalContent = document.querySelector('.modal-content');
const arrowDown = document.querySelectorAll('.arrowDown');
// console.log(arrowDown);


console.log(navLinks);

navLinks.addEventListener('click', handleNavLinks)



function handleNavLinks (e) {

    arrowDown.forEach(btn=> {
        if(e.target.id === btn.id){
            btn.classList.toggle('rotate')
        }
    })


    const item = e.target.closest('li');
    if (!item) return;
    
    if(item.id === 'Connect'){
        modalContent.classList.toggle('hidden');
    }
}
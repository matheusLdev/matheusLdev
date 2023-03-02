const mobileBtn = document.getElementById('mobile-btn');
const nav = document.getElementById('navegation');


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

function closeMenu() {
    const checkClass = 'active';
    if(checkClass === 'active'){
        nav.classList.toggle('active');
    }
}

mobileBtn.addEventListener('click', toggleMenu);
mobileBtn.addEventListener('touchstart', toggleMenu);
const mobileBtn = document.getElementById('mobile-btn');


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navegation');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

mobileBtn.addEventListener('click', toggleMenu);
mobileBtn.addEventListener('touchstart', toggleMenu);
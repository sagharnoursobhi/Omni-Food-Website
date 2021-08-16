    let menuTrigger = document.querySelector('.menu-trigger-js');
    let mainOverlay = document.querySelector('.main-overlay-js');
    let body = document.getElementsByTagName('BODY')[0];

    menuTrigger.addEventListener('click' , ()=>{
        body.classList.add('menu-is-active');
    })

    mainOverlay.addEventListener('click' , ()=>{
        body.classList.remove('menu-is-active');
    })

    document.querySelector('.menu-link').addEventListener('click' , ()=>{
        body.classList.remove('menu-is-active');
    })
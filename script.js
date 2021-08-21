    let menuTrigger = document.querySelector('.menu-trigger-js');
    let menuPart = document.querySelector('.menu-js');
    let body = document.getElementsByTagName('BODY')[0];

    menuTrigger.addEventListener('click' , ()=>{
        body.classList.add('menu-is-active');
    })

    menuPart.addEventListener('click' , ()=>{
        body.classList.remove('menu-is-active');
    })

    document.querySelector('.menu-link').addEventListener('click' , ()=>{
        body.classList.remove('menu-is-active');
    })
    //testimonial mouseover mouseout
    [...document.querySelectorAll('.figure')].forEach((item)=>{
        
        item.addEventListener('mouseover' , (e)=>{
            let target =e.target
            while(!target.classList.contains('figure')){
                target = target.parentElement;
            }
            const image1 = target.querySelector('.figure-img');
            let text = target.querySelector('.figure-text');
            image1.style.opacity = '0.5';
            text.style.display = 'block';

            })

        item.addEventListener('mouseout' , (e)=>{
            let target = e.target;
            if(!target.classList.contains('figure')){
                target = target.parentElement;
            }
            const image2 = target.querySelector('.figure-img');
            let text = target.querySelector('.figure-text');
            image2.style.opacity = '1';
            text.style.display = 'none'
        })
    })
        
    
    
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


    //custom smooth scrolling

    
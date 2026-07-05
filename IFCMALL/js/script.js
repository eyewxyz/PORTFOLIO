let t1 = gsap.timeline({defaults: {ease:"SlowMo.easeOut"}});
t1.to(".mainText1", {y: "0%", duration:0.7, stagger:0.2},6);

const logo = document.querySelectorAll("#mainText2 path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}


(function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    })();


new Glide(".image",{
    type:'carousel',
    perView:3,
    focusAt: 'center',
    gap:0,
    breakpoints: {
        1200:{
            perView:3
        },
        800:{
            perView:2
        }
    }
}).mount(); 

/*시계*/
const lang = navigator.language;
        let date = new Date();

        let dayNumber = date.getDate();
        let month = date.getMonth();
        let dayName = date.toLocaleDateString(lang,{weekday: 'long'})
        let monthName = date.toLocaleDateString(lang,{month: 'long'})
        let year = date.getFullYear()

        document.getElementById('monthName').innerHTML = monthName;
        document.getElementById('dayName').innerHTML = dayName;
        document.getElementById('dayNumber').innerHTML = dayNumber;
        document.getElementById('year').innerHTML = year;
/*시계*/



/*메뉴 토글*/
function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const main = document.querySelector('.main');
    toggleMenu.classList.toggle('active'); /*토글지정*/
    main.classList.toggle('active');
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false; 

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
/*메뉴 토글*/


/*텍스트 반응*/
window.addEventListener('scroll', reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');

            for(var i = 0; i < reveals.length; i++){

                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 150;

                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active')
                }
                else{
                    reveals[i].classList.remove('active');
                }
            }
        }
    /*텍스트 반응*/


    
    VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400,
        glare: true,
        "max-glare":1,
	});


    
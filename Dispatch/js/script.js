const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents= document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
} )


function menuToggle(){
    /*const toggleMenu = document.querySelector('.toggle');*/
    const section = document.querySelector('section');
    /*toggleMenu.classList.toggle('active');*/
    section.classList.toggle('active');
}


/*제이쿼리 슬라이드*/
$(document).ready(function () {
            
    setInterval(function(){
        $(".slide>ul").delay("2500");
        $(".slide>ul").animate({marginTop:"-250px"},500);
        $(".slide>ul").delay("2500");
        $(".slide>ul").animate({marginTop:"-500px"},500);
        $(".slide>ul").delay("2500");
        $(".slide>ul").animate({marginTop:"-750px"},500);
        $(".slide>ul").delay("2500");
        $(".slide>ul").animate({marginTop:"-1000px"},500);
        $(".slide>ul").delay("2500");
        $(".slide>ul").animate({marginTop:"0px"},500);
    });
    
    
});  


////////////////////////////////////////////////////////////////////////////////////////////////////  


/*다크모드*/
const right = document.querySelector('.right');
       
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
right.classList.toggle('dark')
});

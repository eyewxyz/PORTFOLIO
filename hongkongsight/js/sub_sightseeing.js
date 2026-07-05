 //Show "arrow up" button when scrolling down
 /*
 const arrowUp = document.querySelector('.arrow-up');


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        arrowUp.style.opacity = '1';
    }
    else{
        arrowUp.style.opacity = '0';
    }
})

arrowUp.addEventListener('click' , () => {
    window.scroll({
        top:0 ,
        behavior: 'smooth'
    })
})
*/
$(function () {
        $(window).scroll(function(){
            
            if($(this).scrollTop() >= 300){
                $('.arrow-up').fadeIn();
            }else{
                $('.arrow-up').fadeOut();
            }
        });
    
    
        $('.arrow-up').click(function(e){
            e.preventDefault();
            $('html, body').stop().animate({scrollTop:0},500);
        })
    });
    
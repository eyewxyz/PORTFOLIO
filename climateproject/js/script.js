
/*기본 제이쿼리*/

$(function(){

var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = './images/logo2.png',
    $smallLogo = './images/logo-shrink2.png';


    $window.scroll(function(){
        if($(this).scrollTop() > 100){
            if(!$mainHeader.hasClass('shrink')){ //메인헤더에 shrink가 없으면
                $mainHeader.addClass('shrink');
                switchImages($smallLogo);
            }
        }else{
            if($mainHeader.hasClass('shrink')){
                $mainHeader.removeClass('shrink');
                switchImages($defaultLogo);
            }
        }
    });
    //switchImages 함수
    function switchImages(newPath){
          var $logo = $('#logo');
          $logo.fadeOut(300, function(){
              //var c = A.attr('src');
              //A.attr('src'. 'c');
              $logo.attr('src', newPath);
              $logo.fadeIn(300);
          });
          $logo.fadeOut();
    }


    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
      });
      
      
      $(".support_left .regular").click(function (){
        $(".support_left .regular").removeClass("on");
        $(this).addClass("on");
    });
    
   


   

  


    
/*애니메이션 기능*/



    
    
    $(".menu-btn").click(function (){
        $("nav").slideToggle();
    });
    



    $(window).resize(function(){
        if($(window).width()>900){
                                //참이면 할일
                                $("nav").show();
        }else{
                                //거짓이면 할일
                                $("nav").hide();
        }
    });

    $(window).resize(function(){
        if($(window).width()<900){
                                //참이면 할일
                                $(".menu-btn").show();
        }else{
                                //거짓이면 할일
                                $(".menu-btn").hide();
        }
    });
    /*var $main = $('.main');*/
    /*var $contents1 = $('#contents1');
    var $contents2 = $('#contents2');
    var $contents3 = $('#contents3');
    var $contents4 = $('#contents4');
    var $contents5 = $('#contents5');*/
    /*var $device = $('.device');*/
    var $features = $('.features');
    var $project = $('.project');
    var $offset = 900;

    /*var $mainOST = $main.offset().top -  $offset;*/
   /* var $contents1OST = $contents1.offset().top -  $offset;
    var $contents2OST = $contents2.offset().top -  $offset;
    var $contents3OST = $contents3.offset().top -  $offset;
    var $contents4OST = $contents4.offset().top -  $offset;
    var $contents5OST = $contents5.offset().top -  $offset;*/

    /*var $deviceOST = $device.offset().top -  $offset;*/
    var $featuresOST = $features.offset().top -  $offset;
    var $projectOST = $project.offset().top -  $offset;

    $(window).scroll(function(){
       
       /* if($(this).scrollTop()> $contents1OST) {
            $contents1.addClass('animate');
        }

        if($(this).scrollTop()> $contents2OST) {
            $contents2.addClass('animate');
        }

        if($(this).scrollTop()> $contents3OST) {
            $contents3.addClass('animate');
        }

        if($(this).scrollTop()> $contents4OST) {
            $contents4.addClass('animate');
        }

        if($(this).scrollTop()> $contents5OST) {
            $contents5.addClass('animate');
        }
        */

        /*if($(this).scrollTop()> $deviceOST) {
            $device.find('img').addClass('animate');
        }*/
        if($(this).scrollTop()> $featuresOST) {
            $features.find('img').addClass('grow-img');
            $features.find('h4').addClass('animate');
        }
        if($(this).scrollTop()> $projectOST) {
            $project.find('.stripe').addClass('animate_down');
            
        }
    });



//////////////////1,000단위 응용 ///////
var $form = $( "#form" );
var $input = $form.find( "input" );

$input.on( "keyup", function( event ) {
 
    // 1.
    var selection = window.getSelection().toString();
    if ( selection !== '' ) {
        return;
    }
 
    // 2.
    if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
        return;
    }
  
    // 3
    var $this = $( this );
    var input = $this.val();
 
    // 4
    var input = input.replace(/[\D\s\._\-]+/g, "");
 
    // 5
    input = input ? parseInt( input, 10 ) : 0;
 
    // 6
    $this.val( function() {
        return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
    });

} );

});





/////////////////////////////////////////////

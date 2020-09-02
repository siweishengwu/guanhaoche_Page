$(function(){
    $(document).on('click', ".gptop", function(event) {
        $("html, body").animate({
            "scroll-top":0
        },"fast");
    });
    setTimeout(function(){
        var url = window.location.href;
        var name = window.location.href.substr(window.location.href.lastIndexOf('/')+1).match(/(\S*).html/)[1];
        switch(name){
            case "index":
              $(".header li:nth-child(1)").addClass('active').siblings().removeClass('active');
              break;
            case "vil":
              $(".header li:nth-child(2)").addClass('active').siblings().removeClass('active');
              break;
            case "ssl":
              $(".header li:nth-child(3)").addClass('active').siblings().removeClass('active');
              break;
            case "ttuo":
              $(".header li:nth-child(4)").addClass('active').siblings().removeClass('active');
              break;
            case "increment":
              $(".header li:nth-child(5)").addClass('active').siblings().removeClass('active');
              break;
            case "about_me":
              $(".header li:nth-child(6)").addClass('active').siblings().removeClass('active');
              $(".header .about .arrow_down").css("background-position","0 -7px");
              break;
            case "partner":
              $(".header li:nth-child(6)").addClass('active').siblings().removeClass('active');
              $(".header .about .arrow_down").css("background-position","0 -7px");
              break;
            case "recruit":
              $(".header li:nth-child(6)").addClass('active').siblings().removeClass('active');
              $(".header .about .arrow_down").css("background-position","0 -7px");
              break;
            case "relation":
              $(".header li:nth-child(6)").addClass('active').siblings().removeClass('active');
              $(".header .about .arrow_down").css("background-position","0 -7px");
              break;
            default:
              break;
        }
    },300);
    if(typeof(Swiper)!="undefined"){  
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay:1000,
        });
        $(".txtbox").each(function(i, el) {
            $(el).find('li').mouseenter(function(event) {
                var index = $(this).index();
                swiper[i].slideTo(index);
            }).mouseleave(function(event) {        
                swiper[i].startAutoplay();
            });
        });
    }
     $(window).scroll(function(){
        var _top=$(window).scrollTop();
        if(_top>200){
            $(".gptop").fadeIn(300);
        }else{
            $(".gptop").hide();
        }
      });
})
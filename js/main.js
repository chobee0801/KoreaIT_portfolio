$(document).ready(function(){

    // 타이핑텍스트 page1
      var typingBool = false;
      var typingIdx = 0;
      var typingTxt = $(".typing-txt").text();
      typingTxt = typingTxt.split("");
      if(typingBool == false) {
         typingBool = true;
         var tyInt = setInterval(typing,150);
       }

       function typing(){
         if(typingIdx<typingTxt.length){
           $(".typing").append(typingTxt[typingIdx]);
           typingIdx++;
         } else{
           clearInterval(tyInt);
         }
       }

    //1page hr
    $('#home hr').delay(200).animate({width: 176},300);

    //특정 페이지로 이동
    $('.read-more').on('click',function(){
      var conTop = $('#about-me').position().top;
      $('html, body').animate({scrollTop: conTop});
    })
    $('#menu ul li a').on('click',function(){
      var pos = $(this).attr('href');
      var contentPos = $(pos).position().top;
      $('html, body').animate({scrollTop: contentPos})
    })
    $('#mobile-menu ul li a').on('click',function(){
      var pos = $(this).attr('href');
      var contentPos = $(pos).position().top;
      $('html, body').animate({scrollTop: contentPos})
    })

    //섹션에 따라 메뉴에 위치 표시
    $(window).on('scroll', function() {
       var sct = $(window).scrollTop()+100;
       var secTop1 = $('#about-me').position().top;
       var secTop2 = $('#practice').position().top;
       var secTop3 = $('#portfolio').position().top;
       var secTop4 = $('#contact').position().top;

     $('.menu-content li a').addClass('col');
     $('.menu-content li a').eq(0).removeClass('col');

         if (sct >= secTop4) {
           $('.menu-content li a').eq(3).removeClass('col');
           $('.menu-content li a').eq(2).removeClass('col');
           $('.menu-content li a').eq(1).removeClass('col');
         } else if (sct >= secTop3) {
           $('.menu-content li a').eq(4).removeClass('col');
           $('.menu-content li a').eq(2).removeClass('col');
           $('.menu-content li a').eq(1).removeClass('col');
         } else if(sct >= secTop2) {
           $('.menu-content li a').eq(4).removeClass('col');
           $('.menu-content li a').eq(3).removeClass('col');
           $('.menu-content li a').eq(1).removeClass('col');
         } else {
           $('.menu-content li a').eq(4).removeClass('col');
           $('.menu-content li a').eq(3).removeClass('col');
           $('.menu-content li a').eq(2).removeClass('col');
         }
      })

    // 스크롤시 메뉴 등장
    var view=1;
     // menu
    $('#menu').hide();
    $(window).on('scroll',function(){
      var nav = $(window).width();
        if (nav >= 768) {
            if ($(window).scrollTop() >= $('#about-me').position().top-100 && view == 1) {
              $('#menu').css({ position: 'fixed', height: 0}).animate({height: 60}).show();
              $('#menu h2').hide();
              view = 0;
            }
            else if($(window).scrollTop() < $('#about-me').position().top-100 && view == 0) {
              $('#menu').css({ position: 'absolute'}).hide();
              view = 1;
            }
          }
        else if(nav < 768) {
            $('#menu').hide();
            $('#mobile-menu').show();
        }
     })

      //mobile-menu
    $('.menu-click').hide();
    $('.icon').on('click',function() {
      $('.menu-click').slideToggle();
    })

    //스크롤시 컨텐츠 나오기
    $('section').each(function(){
      var $section = $(this);
      var secPos = $section.position().top-100;

      $(window).on('scroll',function(){
        if($(window).scrollTop() >= secPos){
          // 각 hr
          $section.children('.content').children('hr').animate({width: 126},500);
          $section.children('.practiceWrap').children('hr').animate({width: 126},500);
          $section.children('.portfolioWrap').children('hr').animate({width: 126},500);
          // 각 content
          $section.children('.content').children('.textWrap').delay(200).animate({opacity: 1,},700, function(){  htmlpercent();// 각 progress_bar
                                                                                                                 csspercent();
                                                                                                                 jspercent();
                                                                                                                 jquerypercent();
                                                                                                                });
          $section.children('.content').children('.container').delay(1000).animate({opacity: 1},1000);
          $section.children('.practiceWrap').children('.grid').delay(250).animate({opacity: 1},1000);
          $section.children('.portfolioWrap').children('.itemWrap').delay(250).animate({opacity: 1},1000);
          }
        })

    })
      // 스크롤시 contact 부분
    $(window).on('scroll',function(){
      var cont = $('.contact');
      var contPos = cont.position().top-300;
      console.log(contPos)
      if($(window).scrollTop() >= contPos){
        // hr
        cont.children('div').children('hr').animate({width: 126},500);
        // content
        cont.children('div').children('.contactWrap').delay(200).animate({opacity: 1},1000);
        cont.children('div').children('.contactWrap').children('.email').delay(250).animate({opacity: 1},1000);
        cont.children('div').children('.contactWrap').children('.phone').delay(550).animate({opacity: 1},1000);
        cont.children('div').children('.contactWrap').children('.address').delay(850).animate({opacity: 1},1000);
    }
  })

    // progress %증가 함수
    function htmlpercent () {
      let progress = document.querySelector('.html');
      let interval = 1;
      let updatesPerSecond = 1000 / 60;
      let end = progress.max * 0.9;
          function animator () {
            progress.value = progress.value + interval;
            if ( progress.value + interval < end){
              setTimeout(animator, updatesPerSecond);
            } else {
              progress.value = end;
              clearTimeout(time);
            }
          }
        let time = setTimeout(animator,updatesPerSecond);
    }

    function csspercent () {
      let progress = document.querySelector('.css');
      let interval = 1;
      let updatesPerSecond = 1000 / 60;
      let end = progress.max * 0.85;
          function animator () {
            progress.value = progress.value + interval;
            if ( progress.value + interval < end){
              setTimeout(animator, updatesPerSecond);
            } else {
              progress.value = end;
              clearTimeout(time);
            }
          }
        let time = setTimeout(animator,updatesPerSecond);
    }

    function jspercent () {
      let progress = document.querySelector('.js');
      let interval = 1;
      let updatesPerSecond = 1000 / 60;
      let end = progress.max * 0.6;
          function animator () {
            progress.value = progress.value + interval;
            if ( progress.value + interval < end){
              setTimeout(animator, updatesPerSecond);
            } else {
              progress.value = end;
              clearTimeout(time);
            }
          }
          let time = setTimeout(animator,updatesPerSecond);
    }

    function jquerypercent () {
      let progress = document.querySelector('.jquery');
      let interval = 1;
      let updatesPerSecond = 1000 / 60;
      let end = progress.max * 0.7;
          function animator () {
            progress.value = progress.value + interval;
            if ( progress.value + interval < end){
              setTimeout(animator, updatesPerSecond);
            } else {
              progress.value = end;
              clearTimeout(time);
            }
          }
          let time = setTimeout(animator,updatesPerSecond);
      }


})

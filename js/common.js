$(document).ready(function () {
    
    var Width = $(window).width();
    var Height = $(window).height();

    $('.section').height(Height);

    $(window).resize(function () {
        
        $('.section').height(Height);

    }).resize();

    //window에 스크롤 이벤트 설정
    $(window).scroll(function () {


        //윈도우 화면 맨 윗 부분 위치값
        var scrollTop = $(window).scrollTop();


        //컨텐츠 애니메이션
        var section = $('.section');

        //section영역을 section변수에 저장
        section.each(function () {
            //현재 section의 id속성값을 변수에 저장
            var secId = $(this).attr('id');

            //section의 처음 시작 부분의 위치값을 divTop변수에 저장
            var divTop = $(this).offset().top;
            //만약 윈도우의 top위치값 보다 section의 top-100값이 작아지면 
            if (scrollTop > divTop - 100) {


                $('.history-tl-container ul li ').removeClass('active');
                $('.history-tl-container ul').find('li[data="' + secId + '"]').addClass('active');


            }
        });

    });



    //click 이벤트
    $('.history-tl-container ul li a').click(function (e) {
        e.preventDefault();
        $('.history-tl-container ul li a').removeClass('active');
        $(this).addClass('active');

        var navAttr = $(this).attr('href');
        $('html,body').animate({
            'scrollTop': $(navAttr).offset().top
        });

    });

});
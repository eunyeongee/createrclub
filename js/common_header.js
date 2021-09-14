$(function () {
    
    var menu = $('header .h_wrap nav > ul > li');

    menu.hover(
        
        function () {
            
            $(this).children('.sub').stop().slideDown(350);
            $(this).siblings().children('.sub').stop().slideUp();
            
        },

        function () {
            
            $(this).children('.sub').stop().slideUp(350);

        }
    );

});
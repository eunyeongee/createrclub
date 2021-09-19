$(function () {
    
    //var menu = $('header .h_wrap nav > ul > li');
    //var submenu = $('header .h_wrap nav > ul > li > .sub');
    
    /*submenu.hide();

    menu.hover(
        
        function () {
            
            menu.children('.sub').stop().fadeIn(350);
            menu.siblings().children('.sub').stop().slideUp();
            
        },

        function () {
            
            menu.children('.sub').stop().fadeOut(350);

        }
    );*/
    
    var menuBtn = $('#menu_btn');
    
    var menuBox = $('.m_menu');
    
    /*var arr = new Array();
    arr = [ 'xi-close','xi-bars' ]
    
    menuBtn.click(function(){
        
        $.each(arr, function(idx, item){
        
        console.log('idx is ' + idx);
        console.log('item is ' + item);
    });
        
        
    })*/
    
    menuBtn.click(function(e){
        e.preventDefault();
        
        if( $(this).find('a').hasClass("xi-bars") === true){
            
            $(this).find('a').hide().attr('class','xi-close').fadeIn(500);
            
            menuBox.addClass('active');
            
            
            
        }else {
            
            $(this).find('a').hide().attr('class','xi-bars').fadeIn(500);
            
            menuBox.removeClass('active');
            
            
        }
        
         
        
    })
       
     
    

    
    /*menuBtn.each()*/

});
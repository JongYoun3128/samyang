$('.next').click(function(){
    $('.contents_list').animate({top:'-=500'},
        'fast',
        function(){
            $('.contents_list li').first().appendTo('.contents_list');
            $('.contents_list').css('top',-500)
        }
    )
    $('.contents_big_list').animate({top:'-=1000'},
        'fast',
        function(){
            $('.contents_big_list li').first().appendTo('.contents_big_list');
            $('.contents_big_list').css('top',-1000)
        }
    )
})

$('.prev').click(function(){
    $('.contents_list').animate({bottom:'+=500'},
        'fast',
        function(){
            $('.contents_list li').first().appendTo('.contents_list');
            $('.contents_list').css('bottom',+500)
        }
    )
    $('.contents_big_list').animate({top:'-='+1100},
        'slow',
        function(){
            $('.contents_big_list li').first().appendTo('.contents_big_list');
            $('.contents_big_list').css('top',-1100)
        }
    )
})

$('.contents_big_list li').last().prependTo('.contents_big_list');
$('.contents_big_list').css('top', -1100);



setInterval(function(){
    $('.contents_list').animate({top:'-='+500},
        'slow',
        function(){
            $('.contents_list li').first().appendTo('.contents_list');
            $('.contents_list').css('top',-500)
        }
    );
    $('.contents_big_list').animate({top:'-='+1100},
        'slow',
        function(){
            $('.contents_big_list li').first().appendTo('.contents_big_list');
            $('.contents_big_list').css('top',-1100)
        }
    )
},2000)

$('.footer_text p').click(function(){
    $('.footer_bar').slideToggle();
    
});


$('.header_logo_ham').click(function(){
    $('.modal').fadeIn();
})


$('.modal_list').click(function(){
    $('.modal').fadeOut();
})
$('.icon').click(function(){
    $('.modal').fadeOut();
})
$('.modal_head').click(function(){
    $('.modal').fadeOut();
})

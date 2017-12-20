$(function() {
    $('.b-product__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.b-product__slider-nav'
    });

    $('.b-product__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.b-product__slider',
        dots: false,
        arrows: true,
        centerPadding: '0px',
        centerMode: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },{
                breakpoint: 900,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.m-reviews__list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });


    $('select.selectric').selectric({
        maxHeight: 210
    });

    $('.select__city .selectric').click(function(){
        $(this).toggleClass('selectricOpen');
    });

    $('body').on('mouseleave','.select__city .selectric',function(){
        $(this).removeClass('selectricOpen');
    });

    $('.zoom').magnificPopup({
        type  : 'image'
    });

    $('.faq__link').click(function(){
       $(this).parents('.faq__item').toggleClass('active');
       return false;
    });

    $(".toogle-mobile-menu").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: 'mobile_menu_bg'
    });

    $(".incrementer .minus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).parents(".incrementer").find(".js_zcount");
        var input_val = parseInt( input.attr("data-current") );

        if(input_val >= 1){
            input_val--;
            input.attr("data-current", input_val);
            input.val(input_val);
        }
        if (input.hasClass('count_live')) {
            input.parents('form').submit();    
        }
    });

    $(".incrementer .plus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).parents(".incrementer").find(".js_zcount");
        var input_val = parseInt( input.attr("data-current") );

        if(input_val < 999){
            input_val++;
            input.attr("data-current", input_val);
            input.val(input_val);
        }


        if (input.hasClass('count_live')) {
            input.parents('form').submit();    
        }
    });

});
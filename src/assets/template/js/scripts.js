$(function() {
    $('.product-big__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.product-small__slider',
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.product-small__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-big__slider',
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
                    arrows: false,
                    slidesToShow: 3
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

        if(input_val > 1){
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
        var input_val = parseInt( input.val() );

        if(input_val < 999){
            input_val++;
            input.attr("data-current", input_val);
            input.val(input_val);
        }


        if (input.hasClass('count_live')) {
            input.parents('form').submit();    
        }
    });

    $('.product-big__slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        zoom: {
            enabled: true,
            duration: 100
        },
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled:true
        }
    });
});

$(window).resize(function(){
    moveto('body.product-page .product__title', '.product__buy', '.product__slider', 750);
});

function moveto(elem, after_from, after_to, breakpoint){
    if (elem.length==0) return;

    if ($(window).width()<breakpoint){
        $(elem).prependTo(after_to);
    }else{
        $(elem).prependTo(after_from);
    }

}

function initSlider(){
    $('.references').slick({
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
}

$(document).on('ready', function () {
    initSlider();
});

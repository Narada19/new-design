!function(s){var e={hamburgerId:"sm_menu_ham",wrapperClass:"sm_menu_outer",submenuClass:"submenu",menuStyle:"slide",onMenuLoad:function(){return!0},onMenuToggle:function(){return!0}};s.fn.simpleMobileMenu=function(t){if(0===this.length)return this;var n={},i=s(this),a=function(){n.hamburger=s("<div/>",{id:n.settings.hamburgerId,html:"<span></span><span></span><span></span><span></span>"}),n.smmOuter=s("<div/>",{class:n.settings.wrapperClass+" "+n.styleClass}),i.appendTo(n.smmOuter),n.hamburger.add(n.smmOuter).appendTo(s("body"))},l=function(){n.smmOuter.find("ul."+n.settings.submenuClass).each(function(){var e=s(this),t=e.closest("li"),i=t.find("> a"),a=s("<li/>",{class:"back",html:"<a href='#'>"+i.text()+"</a>"});t.addClass("hasChild"),"slide"===n.settings.menuStyle.toLowerCase()&&a.prependTo(e)})};n.settings=s.extend({},e,t),n.styleClass="slide"===n.settings.menuStyle.toLowerCase()?"slide":"accordion",a(),l(),"function"==typeof n.settings.onMenuLoad&&n.settings.onMenuLoad(i),n.hamburger.click(function(e){s("#"+n.settings.hamburgerId).toggleClass("open"),s("."+n.settings.wrapperClass).toggleClass("active").find("li.active").removeClass("active"),s("body").toggleClass("mmactive"),"accordion"===n.settings.menuStyle.toLowerCase()&&s("."+n.settings.wrapperClass).find("ul."+n.settings.submenuClass).hide(),"function"==typeof n.settings.onMenuToggle&&n.settings.onMenuToggle(i,s("#"+n.settings.hamburgerId).hasClass("open"))}),n.smmOuter.filter(".slide").find("li.hasChild > a").click(function(e){s("."+n.settings.wrapperClass).scrollTop(0),s(this).parent().addClass("active").siblings().removeClass("active")}),n.smmOuter.filter(".accordion").find("li.hasChild > a").click(function(e){e.preventDefault();var t=s(this),i=s(this).parent(),a=i.siblings(".active");i.find("> ."+n.settings.submenuClass).slideToggle(function(){if(s(this).is(":visible")){var e=t[0].offsetTop;s("."+n.settings.wrapperClass).stop().animate({scrollTop:e},300)}}),a.find("ul."+n.settings.submenuClass).slideUp(function(){s(this).find(".hasChild").removeClass("active")}),i.toggleClass("active").siblings().removeClass("active")}),n.smmOuter.find("li.back a").click(function(e){e.preventDefault(),s(this).closest("ul."+n.settings.submenuClass).parent().removeClass("active")})}}(jQuery);


$(document).ready(function () {
    $("#headersearch").submit(function () {

        var searchkey = $("#hkey").text();
        console.log(searchkey);
        if (searchkey != '') {
            $('#headersearch').attr('action', '/search/resources/?query=' + searchkey);
        }
    });

    $("#headersearch2").submit(function () {

        var searchkey = $("#hkey2").text();
        console.log(searchkey);
        if (searchkey != '') {
            $('#headersearch2').attr('action', '/search/resources/?query=' + searchkey);
        }
    });
});



function initSlider(){
    $('.references').slick({
        // speed: 800,
        // lazyLoad: 'progressive',
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        // autoplay: false,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
}

$(document).on('ready', function () {
    initSlider();
});


$(document).ready(function()
{
    if($('.bbb_slider').length)
    {
        var trendsSlider = $('.bbb_slider');
        trendsSlider.owlCarousel(
            {
                loop:true,
                margin:30,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });

        trendsSlider.on('click', '.bbb_fav', function (ev)
        {
            $(ev.target).toggleClass('active');
        });

        if($('.bbb_prev').length)
        {
            var prev = $('.bbb_prev');
            prev.on('click', function()
            {
                trendsSlider.trigger('prev.owl.carousel');
            });
        }

        if($('.bbb_next').length)
        {
            var next = $('.bbb_next');
            next.on('click', function()
            {
                trendsSlider.trigger('next.owl.carousel');
            });
        }
    }


});

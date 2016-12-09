/**
 * Created by gjl on 2016/12/9.
 */
document.addEventListener("DOMContentLoaded",function(){

    var mySwiper = new Swiper('.swiper-container', {
        direction : 'vertical',
        noSwiping : true,
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        nextButton:'.swiper-button-next',
        onInit: function(swiper){

            $(".swiper-slide").eq(0).addClass("guo-move");
        },
        onSlideChangeEnd: function(swiper){

            var index=swiper.activeIndex;
            $(".swiper-slide").removeClass("guo-move");

            $(".swiper-slide").eq(index).addClass("guo-move");

        },

    })
})
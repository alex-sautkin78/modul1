$(document).ready(function () {
    $(window).scroll(function () {
        let scrTop = $(window).scrollTop();
        if (scrTop >= $('.numbers1').offset().top - $(window).height() &&
            scrTop >= $('.numbers2').offset().top - $(window).height() &&
            scrTop >= $('.numbers3').offset().top - $(window).height()) {
            numAnimate();
        }
    });

    function numAnimate() {
        let number = 1;
        let result1 = $('.numbers1').text();
        let result2 = $('.numbers2').text();
        let result3 = $('.numbers3').text();
        setInterval(function () {
            number++;
            if (number <= result1) {
                $('.numbers1').text(number);
            }
            else if(number <= result2){
                $('.numbers2').text(number);
            }
            else if(number <= result3){
                $('.numbers3').text(number);
            }
        });
    };
});
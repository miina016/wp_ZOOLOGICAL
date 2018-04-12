"use strict";

/* $(function () {
    var
        objLi = $("#graphic").find("li"),
        len = objLi.length,
        now = 0,
        fadeSpeed = 1000,
        slideSpeed = 4000;


    function slideShow() {
        objLi.eq(now).fadeOut(fadeSpeed);

        now = now + 1;
        if (now >= len) {
            now = 0;
        }
        objLi.eq(now).fadeIn(fadeSpeed);
    }
    objLi.eq(now).show();

    if (len > 1) {
        var setId = setInterval(slideShow, slideSpeed);
    }
}); //ドムコンテントがおわったら*/


(function ($) {
    $.fn.SlideShow = function (options) {
        // オプション設定（属性: 値）
        var defaults = {
            now: 0,
            fadeSpeed: 1000,
            slideSpeed: 4000 //ジェイソン形式
        };
        var settings = $.extend({}, defaults, options);

        return this.each(function () {
            var
                objLi = $(this).find("li").hide(),
                len = objLi.length;

            objLi.eq(settings.now).show();

            if (len > 1) {
                var setId = setInterval(slideShow, settings.slideSpeed, objLi, len);
            }
        });

        function slideShow(objLi, len) {
            objLi.eq(settings.now).fadeOut(settings.fadeSpeed);

            settings.now = settings.now + 1;
            if (settings.now >= len) {
                settings.now = 0;
            }
            objLi.eq(settings.now).fadeIn(settings.fadeSpeed);
        }
    };
}(jQuery));

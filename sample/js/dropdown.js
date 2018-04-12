;(function($){
    $.fn.DropDown = function(options){
        var defaults = {
            "speed": 500
        };
        var settings = $.extend( {}, defaults, options );

        return this.each(function(){
            var objLi = $(this).find("ul").find("li").hide();

            $(this).on("mouseover", function () {
                $(this).not(":animated").slideToggle(settings.speed);
            });
        });
    };
}(jQuery));
;(function($){
    $.fn.PageTop = function(options){
        var defaults = {
            "speed": 500
        };
        var
            settings = $.extend( {}, defaults, options ),
            event = "ontouchend" in window ? "touchend" : "click";

        return this.each(function(){
            $(this).on(event, function(e) {
                e.preventDefault(); //return false
                $('html, body').animate({scrollTop: 0}, settings.speed);
            });
        });
    };
}(jQuery));
(function($) {

    $.fn.helloWorld = function(options) {
        var settings = $.extend({
            text: 'Default Hello World Text',
            color: null,
            fontStyle: null,
            complete: null
        }, options);
        // Future home of "Hello, World!"
        return this.each(function() {
            $(this).text(settings.text);

            //if color is provided, setting the color
            if (settings.color) {
                $(this).css('color', settings.color);
            }

            // if font style is provided, set font style
            if (settings.fontStyle) {
                $(this).css('font-style', settings.fontStyle);
            }

            //check to see if callbacks are provided
            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        });
    }

}(jQuery));

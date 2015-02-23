var Countify = {

    // Get the textarea where we need to count the words from
    field: $("#count"),

    // Get the Laravel token
    token: $("#_token")[0].value,

    /**
     * Init
     *
     */
    init: function()
    {
        // On document ready count the pre-filled words
        Countify.getWords();

        // Listen to the on key up event on the textarea
        Countify.field.on('keyup', Countify.debounce(function() {
            Countify.getWords();
        },250));
    },

    /**
     * Debounce function
     * I take no credit for this one
     *
     * @param fn
     * @param delay
     * @returns {Function}
     */
    debounce: function(fn, delay)
    {
        var timer = null;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    },

    /**
     * Ajax call to count the words in the textarea
     *
     */
    getWords: function()
    {
        $.ajax({
            // set the CSRF token to be able to post that through ajax
            headers: {
                'X-CSRF-TOKEN': Countify.token
            },
            type: 'POST',
            dataType: 'json',
            data: {"text": $("#count")[0].value},
            url: '/countify/count/',
            success: function(data) {
                $('#words').empty().text(data);
            }
        });
    }

};

$(Countify.init());
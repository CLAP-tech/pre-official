/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

(function () {
    'use strict';

    var $ = require('jquery');

    var Utils = function () {

        // The following closures add more methods to the jQuery object, and will automatically
        // executed when the Utils object is required.
        (function additionPrototypeToJQuery() {
            $.fn.serializeObject = function() {
                var o = {};
                var a = this.serializeArray();
                $.each(a, function() {
                    if (o[this.name] !== undefined) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    }
                    else {
                        o[this.name] = this.value || '';
                    }
                });
                return o;
            };
        })();

        // No other util method for now.
    };

    module.exports = new Utils();

})();

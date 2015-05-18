/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

(function () {
    'use strict';

    var $ = require('jquery');

    var Utils = function () {

        // Closure for adding function prototype for jQuery.
        (function () {
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

    };

    Utils._instance = null;

    Utils.getInstance = function () {
        if (!this._instance) {
            this._instance = new Utils();
        }
        return this._instance;
    };

    module.exports = Utils;
})();

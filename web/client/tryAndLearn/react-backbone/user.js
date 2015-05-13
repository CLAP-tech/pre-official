/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
	'use strict';

    app.User = Backbone.Model.extend({
        // Default attributes for the user.
        // Basically to just indicate what fields supposed to be here.
        defaults: {
            firstName: '',
            lastName: '',
            age: ''
        }
    });

})();

/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
	'use strict';

    app.User = Backbone.Model.extend({
        // Default attributes for the user
        // and ensure that each user created has `firstName`, `lastName` and `age`
        defaults: {
            firstName: '',
            lastName: '',
            age: ''
        }
    });

})();

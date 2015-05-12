/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
	'use strict';

    app.Users = Backbone.Collection.extend({

        model: app.User,

        // Save all of the users under the `user-lists-backbone` namespace.
        localStorage: new Backbone.LocalStorage('user-lists-backbone')
    });

    app.users = new app.Users();
})();

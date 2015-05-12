/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
	'use strict';

	// User List Router
	// ----------
    app.UserListRouter = Backbone.Router.extend({

        userListView: null,

        editUserView: null,

        initialize: function (options) {
            // Doesn't look like the right practice... but yea, let's bear with this right now..
            this.userListView = options.userListView;
            this.editUserView = options.editUserView;
        },

        routes: {
            '': 'showUser',
            'new': 'editUser'
        },

        showUser: function () {
            this.userListView.render();
        },

        editUser: function () {
            this.editUserView.render();
        }
    });


})();

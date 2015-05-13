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

        /**
         * The main user list app view, should be passed in as a parameter when creating this router.
         */
        simpleUserListApp: null,

        initialize: function (options) {
            // Should assert if the simpleUserListApp option doesn't exist.
            this.simpleUserListApp = options.simpleUserListApp;
        },

		routes: {
            '': 'showUser',
            'new': 'editUser'
		},

        showUser: function () {
            this.simpleUserListApp && this.simpleUserListApp.setState({page: 'showUser'});
        },

        editUser: function () {
            this.simpleUserListApp && this.simpleUserListApp.setState({page: 'editUser'});
        }
	});
})();

/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
    'use strict';

    app.UserListView = Backbone.View.extend({
        el: '.page',
        render: function() {
            var that = this;
            var users = new app.Users();
            users.fetch({
                success: function(users) {
                    var template = _.template($('#user-list-template').html());
                    that.$el.html(template({users: users.models}))
                }
            })
        }
    });
})();

/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
    'use strict';

    app.EditUserView = Backbone.View.extend({
        el: '.page',
        render: function() {
            var template = _.template($('#edit-user-template').html());
            this.$el.html(template({}))
        },
        events: {
            'submit .edit-user-form': 'saveUser'
        },
        saveUser: function(ev) {
            var userDetails = $(ev.currentTarget).serializeObject();

            // This is really not optimize, but for the sake of comparing coding style between React & Backbone, I will bear with this for now.
            var users = new app.Users();
            users.fetch();
            var user = users.create(userDetails);
            user.save({
                success: function(user) {
                    console.log(user);
                }
            });
            return false; // tell browser to stop the default action
        }
    });
})();

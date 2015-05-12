/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
    'use strict';

    // Kick things off.
    var userListView = new app.UserListView();
    var editUserView = new app.EditUserView();

    new app.UserListRouter({ userListView: userListView, editUserView: editUserView});
    Backbone.history.start();
})();

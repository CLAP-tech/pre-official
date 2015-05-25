/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 *
 * The store in ReactJS contains both model and some controller logic for mutating the model.
 *
 * I think it somehow make sense, because certain coupling between controller and model always exist
 * (as well as views), there are not many cases that we can re-use a controller to apply to different
 * models, and vice versa.
 * Even we need to do that, it can be achieved by passing model with certain interface from outside to the store.
 */

(function () {
	'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var BackboneLocalStorage = require('backbone.localStorage');
    var UserConstants = require('../constants/flux_action_constants');
    // XXX: This returns an instance instead of a class.
    // Should be make the return from module.exports consistently a class?
    var appDispatcher = require('../dispatcher/app_dispatcher');

    var User = Backbone.Model.extend({
        // Default attributes for the user.
        // Basically to just indicate what fields supposed to be here.
        defaults: {
            firstName: '',
            lastName: '',
            age: ''
        }
    });

    var Users = Backbone.Collection.extend({
        model: User,

        // Save all of the users under the `"user-lists-react-backbone"` namespace.
        localStorage: new BackboneLocalStorage('user-lists-react-flux-backbone')
    });

    // Create the users object.
    // XXX: I don't think this is the best practice for handling object life-cycle.
    // Basically here it means there is only 1 single user store, and by default it fetches all user data when this script load,
    // without having knowledge on whether this data is gonna be used or not.
    var users = new Users();
    users.fetch();

    function addUser(userDetails) {
        users.create(userDetails);
    };

    // This store is a class, with class methods that returns the instance of users...
    // I found this pattern in many React-Flux examples, but I am not sure if this is really the best...
    var UsersStore = _.extend(users, {

        /**
         *
         * @returns {Users}
         */
        getUsers: function () {
            return users;
        }
    });

    appDispatcher.register(function(payload) {
        var action = payload.action;
        switch (action.actionType) {
            case UserConstants.ADD_USER:
                addUser(action.userDetails);
                break;
            default:
                break;
        }
    });

    module.exports = UsersStore;

})();

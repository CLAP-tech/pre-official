/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

(function () {
	'use strict';

    var Backbone = require('backbone');
    var BackboneLocalStorage = require('backbone.localStorage');
    var user = require('../models/user');

    module.exports = Backbone.Collection.extend({

        model: user,

        // Save all of the users under the `"user-lists-react-backbone"` namespace.
        localStorage: new BackboneLocalStorage('user-lists-react-backbone')
    });
})();

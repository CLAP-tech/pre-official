/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

(function () {
    'use strict';

    var $ = require('jquery');
    var React = require('react');
    var UserFluxActions = require('../actions/flux_actions');

    module.exports = React.createClass({

        /**
         * @type string
         */
        displayName: 'EditUserView',

        /**
         * form submit handler, trigger flux action
         * @private
         */
        _onEditUserFormSubmit: function (evt) {
            var userDetails = $(evt.currentTarget).serializeObject();
            UserFluxActions.addUser(userDetails);
            evt.stopPropagation();
        },

        render: function () {
            return (
                <div>
                    <a href="#/" className="btn btn-primary">List Users</a>
                    <hr />
                    <form className="edit-user-form" onSubmit={this._onEditUserFormSubmit}>
                        <legend>Create User</legend>
                        <label>First Name</label>{'\n'}
                        <input type="text" name="firstName"/>{'\n'}
                        <label>Last Name</label>{'\n'}
                        <input type="text" name="lastName"/>{'\n'}
                        <label>Age</label>{'\n'}
                        <input type="text" name="age"/>
                        <hr />
                        <button type="submit" className="btn">Create</button>
                    </form>
                </div>
            );
        }
    });
})();
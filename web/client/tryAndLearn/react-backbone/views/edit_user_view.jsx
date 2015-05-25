/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

(function () {
    'use strict';

    var React = require('react');

    module.exports = React.createClass({

        /**
         * @type string
         */
        displayName: 'EditUserView',

        render: function () {
            return (
                <div>
                    <a href="#/" className="btn btn-primary">List Users</a>
                    <hr />
                    <form className="edit-user-form" onSubmit={this.props.handler}>
                        <legend>Create User</legend>
                        <label>First Name</label>
                        <input type="text" name="firstName"/>
                        <label>Last Name</label>
                        <input type="text" name="lastName"/>
                        <label>Age</label>
                        <input type="text" name="age"/>
                        <hr />
                        <button type="submit" className="btn">Create</button>
                    </form>
                </div>
            );
        }
    });
})();
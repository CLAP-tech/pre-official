/**
 * Created by Natural on 5/16/15.
 */

(function () {
    require('bootstrap');
    require('bootstrap.css');

    var React = require('react');
    var App = require('./app.jsx');
    var Users = require('../collections/users');

    // Create global users collection.
    var users = new Users();

    // Create the utils static class and create the singleton instance.
    var Utils = require('../utils/utils');
    var utils = Utils.getInstance();

    React.render(
        <App users={users} utils={utils}/>,
        document.getElementById('user-list-app')
    );
})();

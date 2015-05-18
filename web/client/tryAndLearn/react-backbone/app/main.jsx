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

    React.render(
        <App users={users}/>,
        document.getElementById('user-list-app')
    );
})();

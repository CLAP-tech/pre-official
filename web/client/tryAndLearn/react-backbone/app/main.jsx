/**
 * Created by Natural on 5/16/15.
 */

(function () {
    require('bootstrap');
    require('bootstrap.css');

    var React = require('react');
    var App = require('./app.jsx');

    React.render(
        <App />,
        document.getElementById('user-list-app')
    );
})();

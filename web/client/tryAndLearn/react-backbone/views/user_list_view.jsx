/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

if (!(function () {
        'use strict';

        var React = require('react.backbone');
        // XXX: Interestingly, this has to be started with capital letter, it wouldn't work if it starts with small case..
        // i.e. var userView = require('./user_view.jsx');
        //      return <userView key={user.id} model={user} />;
        // would not work...
        // Need to figure out why later...

        var UserView = require('./user_view.jsx');

        module.exports = React.createBackboneClass({
            render: function () {
                var usersList = this.getCollection().map(function (user) {
                    return <UserView key={user.id} model={user} />;
                });
                return (
                    // This is suppose to be a linked button, need to also pass the event handler
                    // For now we just make the UI look the same first
                    <div>
                        <a href='#/new' className='btn btn-primary'>New User</a>
                        <hr/>
                        <table className="table striped">
                            <thead>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th></th>
                            </thead>
                            <tbody>{usersList}</tbody>
                        </table>
                    </div>
                );
            }
        });
    })()) {

}
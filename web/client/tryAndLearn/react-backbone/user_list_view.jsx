/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

var app = app || {};

(function () {
    'use strict';

    app.UserView = React.createBackboneClass({
        render: function () {
            var model = this.getModel();
            return (<tr>
                <td>{model.get('firstName')}</td>
                <td>{model.get('lastName')}</td>
                <td>{model.get('age')}</td>
            </tr>);
        }
    });

    app.UserListView = React.createBackboneClass({
        render: function () {
            var usersList = this.getCollection().map(function (user) {
                return <app.UserView model={user} />;
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
})();
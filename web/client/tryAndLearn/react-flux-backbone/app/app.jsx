/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 *
 * This is probably not the best pattern to use ReactJS, at least I am not using the recommended FLUX data flow here.
 * But it's just a simple experiment to try how React can work with Backbone, I think this serve the purpose.
 */

(function () {
    var React = require('react');
    var Backbone = require('backbone');

    var UsersStore = require('../stores/users_store');
    var UserListRouter = require('../routers/router');
    var UserListView = require('../views/user_list_view.jsx');
    var EditUserView = require('../views/edit_user_view.jsx');

    // The static utils class.
    require('../utils/utils');

    module.exports = React.createClass({

        /**
         * @type string
         */
        displayName: 'AppContainerView',

        /**
         * The value of this will be set to this.state before the view is mounted.
         * @return Object
         */
        getInitialState: function () {
            return {
                page: 'showUser'
            }
        },

        /**
         * The method that being called before the first render is called, i.e. it's like an init method.
         */
        componentWillMount: function () {
            // Start the router when this main container view is mounted
            new UserListRouter({ simpleUserListApp: this });
            Backbone.history.start();
        },

        render: function () {
            var page;
            var users = UsersStore.getUsers();
            switch (this.state.page) {
                case 'showUser' :
                    page = <UserListView collection={users}/>;
                    break;
                case 'editUser':
                    page = <EditUserView />;
                    break;
                default:
                    page = <UserListView collection={users}/>;
                    break;
            }
            return (
                <div>
                    <h1>User Manager</h1>
                    <hr/>
                    <div className='page'>{page}</div>
                </div>
            );
        }
    });
})();

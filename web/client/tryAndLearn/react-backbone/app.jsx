/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 *
 * This is probably not the best pattern to use ReactJS, at least I am not using the recommended FLUX data flow here.
 * But it's just a simple experiment to try how React can work with Backbone, I think this serve the purpose.
 */

var app = app || {};

(function () {
    app.SimpleUserListApp = React.createClass({

        /**
         * The value of this will be set to this.state before the view is mounted.
         * @return Object
         */
        getInitialState: function () {
            return {
                page: 'showUser'
            }
        },

        componentDidMount: function () {
            // Start the router when this main container view is mounted
            new app.UserListRouter({ simpleUserListApp: this });
            Backbone.history.start();
            if (this.props.users) {
                this.props.users.fetch();
            }
        },

        render: function () {
            // This may not be the best pattern:
            // 1. It's better to compose another object that handle all the user interaction logic (i.e. controller)
            // 2. We should try the Flux architecture, I will do that in the next round.
            var editUserClickHandler = function (evt) {
                var userDetails = $(evt.currentTarget).serializeObject();
                var user = this.props.users.create(userDetails);
                user.save({
                    success: function (user) {
                        console.log("saved.");
                    }
                });
                // tell browser to stop the default action
                return false;
            };

            var page;
            switch (this.state.page) {
                case 'showUser' :
                    page = <app.UserListView collection={this.props.users}/>;
                    break;
                case 'editUser':
                    page = <app.EditUserView handler={editUserClickHandler.bind(this)} />;
                    break;
                default:
                    page = <app.UserListView collection={this.props.users}/>;
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

    React.render(
        <app.SimpleUserListApp users={app.users}/>,
        document.getElementById('user-list-app')
    );
})();
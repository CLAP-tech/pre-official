/**
 * Created by Natural on 5/19/15.
 */

var AppDispatcher = require('../dispatcher/app_dispatcher');
var FluxActionConstants = require('../constants/flux_action_constants');

// Define actions object.
// There should be more action objects when the app grow bigger.
module.exports = {
    // Add user
    addUser: function (userDetails) {
        AppDispatcher.handleAction({
            actionType: FluxActionConstants.ADD_USER,
            userDetails: userDetails
        });
    }
}


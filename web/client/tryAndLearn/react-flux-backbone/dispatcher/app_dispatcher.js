/**
 * Created by Natural on 5/19/15.
 */

var Dispatcher = require('flux').Dispatcher;

// Create the dispatcher instance
var appDispatcher = new Dispatcher();

// Convenience method to handle dispatch request
appDispatcher.handleAction = function (action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

module.exports = appDispatcher;
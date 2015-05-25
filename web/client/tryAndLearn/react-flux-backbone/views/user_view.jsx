/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 5/11/15.
 */

(function () {
    'use strict';

    var React = require('react.backbone');

    module.exports = React.createBackboneClass({

        /**
         * @type string
         */
        displayName: 'UserView',

        render: function () {
            var model = this.getModel();
            return (<tr>
                <td>{model.get('firstName')}</td>
                <td>{model.get('lastName')}</td>
                <td>{model.get('age')}</td>
            </tr>);
        }
    });

})();
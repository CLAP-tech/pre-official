/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 3/22/15.
 */

CLAP.SharedUI.Button = React.createClass({

    /**
     * @type Array
     */
    mixins: [ CLAP.SharedUI.SharedMixin ],

    /**
     * @type string
     */
    displayName: 'CLAP.SharedUI.Button',

    /**
     * @type Object
     */
    propTypes: {
        className: React.PropTypes.string,
        text: React.PropTypes.string
    },

    /**
     * The value of this will be set to this.props before the view is mounted.
     * @return Object
     */
    getDefaultProps: function () {
        return {
            className: 'btn btn-default btn-lg',
            text: 'default button'
        };
    },

    /**
     * TODO: Use the JSX syntax later on
     * The non-JSX syntax
     */
    render: function () {
        var props = this.props;
        return <button className={props.className}>{props.text}</button>;

        /**
         * NOTE (Natural Lam):
         * The JSX will be converted to the following JS:
         *
         * return React.createElement('button', { className: props.className }, props.text);
         */
    }
});

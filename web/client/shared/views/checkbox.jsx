/* -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*- */
/* vim: set tabstop=4 expandtab: */

/**
 * Created by Natural Lam on 3/22/15.
 */

CLAP.SharedUI.Checkbox = React.createClass({

    /**
     * @type Array
     */
    mixins: [ CLAP.SharedUI.SharedMixin ],

    /**
     * @type string
     */
    displayName: 'CLAP.SharedUI.Checkbox',

    /**
     * @type Object
     */
    propTypes: {
        className: React.PropTypes.string,
        labelText: React.PropTypes.string
    },

    /**
     * The value of this will be set to this.props before the view is mounted.
     * @return Object
     */
    getDefaultProps: function () {
        return {
            className: 'checkbox',
            labelText: 'Remember me'
        };
    },

    /**
     * TODO: Use the JSX syntax later on
     * The non-JSX syntax
     */
    render: function () {
        var props = this.props;
        return (
            <div className={props.className}>
                <label>
                    <input type='checkbox'/>
                    {props.labelText}
                </label>
            </div>
        );
    }
});

/**
 * Created by Tin Yin Lam on 3/22/15.
 */

CLAP.SharedUI.Button = React.createClass({
    /**
     * @type string
     */
    displayName: 'CLAP.SharedUI.Button',

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
     * Return the list of class name, maybe useful for subclass to reuse and do some manipulations.
     * @return Array
     */
    getClassNames: function () {
        var classNamesStr = this.props.className || '';
        return classNamesStr.split(' ');
    },

    /**
     * TODO: Use the JSX syntax later on
     * The non-JSX syntax
     */
    render: function () {
        var props = this.props;
        return React.createElement('button', { className: props.className }, props.text);
    }
});
/**
 * Created by Natural Lam on 3/22/15.
 */

CLAP.SharedUI.Input = React.createClass({

    /**
     * @type Array
     */
    mixins: [ CLAP.SharedUI.SharedMixin ],

    /**
     * @type string
     */
    displayName: 'CLAP.SharedUI.Input',

    /**
     * @type Object
     */
    propTypes: {
        className: React.PropTypes.string,
        text: React.PropTypes.string,
        placeholder: React.PropTypes.string
    },

    /**
     * The value of this will be set to this.props before the view is mounted.
     * @return Object
     */
    getDefaultProps: function () {
        return {
            type: 'text',
            className: 'form-control',
            placeholder: 'input some text'
        };
    },

    /**
     * TODO: Use the JSX syntax later on
     * The non-JSX syntax
     */
    render: function () {
        var props = this.props;
        return (
            <input className={props.className} type={props.type} placeholder={props.placeholder}>{props.text}</input>
        );

        /**
         * NOTE (Natural Lam):
         * The JSX will be converted to the following JS:
         *
         * return React.createElement('input', {
         *    type: props.type,
         *    className: props.className,
         *    placeholder: props.placeholder
         * });
         */
    }
});

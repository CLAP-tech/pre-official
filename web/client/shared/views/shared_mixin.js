/**
 * Created by Natural Lam on 3/29/15.
 *
 * XXX (Natural Lam):
 * These may not be needed and probably not the best practice for changing class names of a view.
 * I just added this file to demonstrate the use of mixin and in ReactJS, there is no inheritance support in React,
 * we can use ES6 extend syntax but mixin is the recommended way to share code in React.
 */
CLAP.SharedUI.SharedMixin = {

    /**
     * Return the list of class name, maybe useful for subclass to reuse and do some manipulations.
     * @private
     * @return Array
     */
    _getClassNames: function () {
        var classNamesStr = this.props.className || '';
        return classNamesStr.split(' ');
    },
    
    /**
     * Public method for adding additional classes on top of the existing classes,
     * it returns a class string with the final classes for setting to the className prop.
     * @param {string[]} classes
     * @return {string}
     */
    addClasses: function (classes) {
        var classNames = this._getClassNames();
        Array.prototype.push.apply(classNames, classes);
        return classNames.join(' ');
    },

    /**
     * Public method for removing classes from existing classes,
     * it returns a class string with the final classes for setting to the className prop.
     * @param {string[]} classes
     * @return {string}
     */
    removeClasses: function (classes) {
        var classNames = this._getClassNames();
        var filteredClassNames = classNames.filter(function (c) {
            return classes.indexOf(c) === -1;
        });
        return filteredClassNames.join(' ');
    }

};

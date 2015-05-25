/**
 * Created by Natural on 5/16/15.
 */

var webpack = require('webpack');
var bower_dir = __dirname + '/../../bower_components';

var config = {
    addVendor: function (name, path, noParse) {
        this.entry.vendors.push(name);
        this.resolve.alias[name] = path;
        if (noParse) {
            // Some of the modules are already uglified, we don't need to parse them again.
            this.module.noParse.push(new RegExp(path));
        }
    },

    entry: {
        app: ['./app/main.jsx' ],
        vendors: []
    },

    resolve: { alias: {} },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],

    output: {
        path: './build/',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },

    module: {
        noParse: [],
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader'},
            // The following is needed because bootstrap.js require jQuery as a global variable,
            // with the following, import-loader basically prepend var jQuery = require('jquery') to bootstrap.js module.
            { test: /bootstrap.js/, loader: "imports?jQuery=jquery" },
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=10000' }
        ]
    }
};

// Add all vendors for the app.

config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.js', false);
config.addVendor('backbone', bower_dir + '/backbone/backbone.js', false);
config.addVendor('backbone.localStorage', bower_dir + '/backbone.localstorage/backbone.localStorage.js', false);
config.addVendor('flux', bower_dir + '/flux/dist/Flux.js')
config.addVendor('react', bower_dir + '/react/react-with-addons.js', false);
config.addVendor('react.backbone', bower_dir + '/react.backbone/react.backbone.js', false);
config.addVendor('underscore', bower_dir + '/underscore/underscore.js', false);

// Add bootstrap as well
config.addVendor('bootstrap', bower_dir + '/bootstrap/dist/js/bootstrap.js', false);
config.addVendor('bootstrap.css', bower_dir + '/bootstrap/dist/css/bootstrap.css', false);

module.exports = config;

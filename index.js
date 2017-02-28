'use strict';

let babel;

function getBabel() {
    if (!babel) {
        babel = require('babel-core');
    }
    return babel;
}

var defaultBabelOptions;

function getDefaultBabelOptions() {
    if (!defaultBabelOptions) {
        defaultBabelOptions = {
            "presets": [
                require('babel-preset-babili')
            ]
        };
    }
    return defaultBabelOptions;
}


function isInline(lassoContext) {
    if (lassoContext.inline === true) {
        return true;
    }

    if (lassoContext.dependency && lassoContext.dependency.inline === true) {
        return true;
    }

    return false;
}

module.exports = function(lasso, pluginConfig) {
    pluginConfig = pluginConfig || {};

    lasso.addTransform({
        contentType: 'js',

        name: module.id,

        stream: false,

        transform: function(code, lassoContext) {

            if (pluginConfig.inlineOnly === true && !isInline(lassoContext)) {
                // Skip minification when we are not minifying inline code
                return code;
            }

            let babelOptions = pluginConfig.babelOptions;

            if (babelOptions) {
                babelOptions = Object.assign({}, babelOptions, {
                    babelrc: false
                });
            } else {
                babelOptions = getDefaultBabelOptions();
            }

            let babel = getBabel();
            let result = babel.transform(code, babelOptions);
            return result.code;
        }
    });
};
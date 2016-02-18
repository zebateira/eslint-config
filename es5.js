'use strict';

module.exports = {
    'extends': [
        './rules/best-practices',
        './rules/errors',
        './rules/strict',
        './rules/style',
        './rules/variables',
    ].map(require.resolve),
    'env': {},
    'ecmaFeatures': {},
    'globals': {
        'Promise': true,
    },
    'rules': {},
};

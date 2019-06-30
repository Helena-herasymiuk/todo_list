module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb/legacy"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        //eslint-disable-next-line no-unused-vars
        "no-param-reassign": [2, {"props": false}],
        "no-unused-vars": [ "off" ],
        "no-return-assign": [ "off" ],
    }
};
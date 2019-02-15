module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "globals": {
        "__dirname": true,
        "process": true,
        "__DEV__": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }
        ],
        "keyword-spacing": "error",
        "no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }
        ],
        "no-trailing-spaces": "error",
        "no-var": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "prefer-const": "warn",
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "space-before-blocks": "warn",
        "template-curly-spacing": [
            "warn",
            "never"
        ],
    }
};

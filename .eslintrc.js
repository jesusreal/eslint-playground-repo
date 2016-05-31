module.exports = {
parser: 'babel-eslint',
  extends: 'eslint',
  plugins: ['react', 'babel', 'flow-vars'],
  globals: {
    "document": false
  },
parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
},
  rules: {
    "require-jsdoc": 0,
    "comma-dangle": 0,
    "indent": [2, 2],
    "quotes": [2, "single"],
    "no-unused-vars": 2
  }
};
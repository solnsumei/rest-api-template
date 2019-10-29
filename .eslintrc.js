module.exports = {
  "env": {
      "node": true,
      "jest": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": "readonly",
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "indent": ["error", 2],
    "no-undef": 2,
  }
};

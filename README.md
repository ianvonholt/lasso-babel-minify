lasso-babili
============

# Installation

```bash
npm install lasso-babili --save
```

# Usage:

```js
require('lasso').configure({
    minifyJS: false, // Make sure the defaultJS  minifier is not enabled
    // ...
    plugins: [
        // ...
        {
            plugin: 'lasso-babili',
            enabled: process.env.NODE_ENV === 'production'
        }
    ]
});
```


lasso-babel-minify
============

# Installation

```bash
npm install lasso-bable-minify --save
```

# Usage:

```js
require('lasso').configure({
    minifyJS: false, // Make sure the defaultJS  minifier is not enabled
    // ...
    plugins: [
        // ...
        {
            plugin: 'lasso-babel-minify',
            enabled: process.env.NODE_ENV === 'production'
        }
    ]
});
```


lasso-babili
============

# Installation

```bash
npm install lasso-babili --save
```

# Usage:

```js
require('lasso').configure({
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


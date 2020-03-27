# Dynamic Imports

Two similar techniques are supported by webpack when it comes to dynamic code splitting.
The first and recommended approach is to use the `import()` syntax that conforms to the ECMAScript proposal for dynamic imports. The legacy, webpack-specific approach is to use `require.ensure`.

The idea is that any additional code and dependencies will only be fetched at the time they are required, and not part of the initial bundle

## Example

Page A includes code and dependencies that are only required after clicking a button.

Page A dynamically imports the code and dependencies when the button is clicked.

Page A's javascript bundle will not include the additional dependency, and will instead make a network request to fetch and invoke the code only when the button is clicked.

1. `npm start`
2. Open `http://localhost:8080` in a browser
3. Inspect network requests (only `index.html` and `index.bundle.js` is fetched)
4. Click the "Click me" button
5. See that `vendors~lodash.bundle.js` is fetched over the network and invoked to show to message built via Lodash's API

## Preloading and Prefetching

Webpack [magic comments](https://webpack.js.org/api/module-methods/#magic-comments) can be used to setup _preloading / prefetching_ of dynamic modules.
eg.

```js
import(/* webpackPreload: true */ 'ignored-module.js');
```

See more information in the [code splitting documentation](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)

## Documentation

- [Code Splitting - Dynamic Imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
- [Code Splitting - Preloading / Prefetching Dynamic Imports](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)
- [Module Methods - Magic Comments](<(https://webpack.js.org/api/module-methods/#magic-comments)>)
- [MDN - Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports)

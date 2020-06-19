# External Dependencies

External dependencies can be declared by using the [`externals`](https://webpack.js.org/configuration/externals/) config option in Webpack config.

Adding an external to the Webpack config informs Webpack that it should not bundle the declared dependency as they are already bound to the `window` object.
The main use of this is exclude large dependencies from your bundle, and instead host it on a highly available, highly cachable common CDN.

## Example

The page has a lodash UMD in the `<head>` which binds to `window._`.

The page builds a message using lodash and adds it to the page.

The page's JavaScript bundle will not include the additional dependency, and will instead obtain it from the `window._` reference.

1. `npm start`
2. Open `http://localhost:8080` in a browser
3. Inspect network requests
4. See that `lodash.min.js` and `index.bundle.js` are fetched, and `index.bundle.js` does not include bundled lodash code.

## Documentation

- [Webpack - Externals](https://webpack.js.org/configuration/externals/)

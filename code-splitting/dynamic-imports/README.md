# Dynamic Imports

Two similar techniques are supported by webpack when it comes to dynamic code splitting.
The first and recommended approach is to use the `import()` syntax that conforms to the ECMAScript proposal for dynamic imports. The legacy, webpack-specific approach is to use `require.ensure`.

The idea is that any additional code and dependencies will only be fetched at the time they are required, and not part of the initial bundle

## How does Webpack fetch and execute the chunk?

Webpack will detect where dynamic imports are used and build chunks for these modules as if they were their own entry point.
Webpack also replaces all imports with it's own implemenation, including replacing how dynamic imports work.

The implementation links up the chunk name to the chunk file created, and is invoked when the code would have reached the dynamic import.
A brand new `<script>` element is then created via JavaScript, with its `src` attribute pointing to the location of the chunk. This location is built from the `output.publicPath` and `output.chunkFileName` declared in `webpack.config.js`.

This script element is then appended to the `<head />` of the document and the browser fetches the script and invokes it.

Details of this can be seen at the start of any entry point bundle (eg. `index.bundle.js`) or in the [`JsonpChunkLoadingRuntimeModule`](https://github.com/webpack/webpack/blob/253cf465df3f1d577a6da25c554c5c0a7e64bf0b/lib/web/JsonpChunkLoadingRuntimeModule.js) template builder in the source code.

Webpack also includes examples of outputs for [code-splitting require contexts](https://github.com/webpack/webpack/tree/master/examples/code-splitted-require.context).

## Example

The page includes code and dependencies that are only required after clicking a button.

The page dynamically imports the code and dependencies when the button is clicked.

The page's javascript bundle will not include the additional dependency, and will instead make a network request to fetch and invoke the code only when the button is clicked.

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

## Shared dependencies between entry and chunk

Any dependencies declared both the entry and a chunk, will be bundled into the entry and not the chunk.

## Documentation

- [Webapack - Code Splitting - Dynamic Imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
- [Webapack - Code Splitting - Preloading / Prefetching Dynamic Imports](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)
- [Webpack - Module Methods - Magic Comments](https://webpack.js.org/api/module-methods/#magic-comments)
- [MDN - Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports)
- [Webpack - Examples - Code Splitted Require.context](https://github.com/webpack/webpack/tree/master/examples/code-splitted-require.context)

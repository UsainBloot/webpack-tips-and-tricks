# `SplitChunksPlugin`

The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk.

With the optimization.splitChunks configuration option in place, we should now see the duplicate dependency removed from our index.bundle.js and another.bundle.js.
The plugin should notice that we've separated lodash out to a separate chunk and remove the dead weight from our main bundle.

The plugin automatically works out common dependencies and splits them out into a vendors bundle.

`SplitChunksPlugin` can be fine tuned to create multiple chunks, which could be used to group together similar dependencies.
See [`SplitChunksPlugin` documentation](https://webpack.js.org/plugins/split-chunks-plugin) for more advanced features.

## Example

Page A & Page B both use `lodash`.

When Page A loads, it will fetch the `vendors~another~index.bundle.js` bundle too (which contains `lodash`).
When Page B bundle loads, it does not need to fetch the vendors bundle as it is already in the browser's cache.

## Documentation

- [Code Splitting - `SplitChunksPlugin`](https://webpack.js.org/guides/code-splitting/#splitchunksplugin)
- [`SplitChunksPlugin` - Documentation](https://webpack.js.org/plugins/split-chunks-plugin)

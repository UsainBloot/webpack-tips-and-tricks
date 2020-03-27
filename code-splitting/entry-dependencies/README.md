# Entry Dependencies

**Webpack 5 feature ONLY**

Inform webpack of any dependency bundles which contain common dependencies.
This prevents all the bundles from having their own copy of the dependency and will instead fetch it from the shared dependency bundle.

## Example

Page A & Page B both use `lodash`.

When Page A loads, it will fetch the shared dependency bundle too (which contains `lodash`).
When Page B bundle loads, it does not need to fetch the shared dependency bundle as it is already in the browser's cache.

## Documentation

**Entry Context - Dependencies**
https://webpack.js.org/configuration/entry-context/#dependencies

**Code Splitting - Dependencies**
https://webpack.js.org/guides/code-splitting/#entry-dependencies

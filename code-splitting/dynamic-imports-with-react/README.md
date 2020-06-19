# Dynamic Imports With React

To be able to use `import()` for React components, the import must be called inside of a [`React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy) callback. This lazy component must then be wrapped in a `<Suspense />` higher order component, with a fallback declared.

You could also wrap the suspense in an [`<ErrorBoundary />`](https://reactjs.org/docs/code-splitting.html#error-boundaries) higher order component, to handle scenarios where the network request to the component fails.

## Example

The page includes code and dependencies that are only required after clicking a button.

The page dynamically imports a Hello World react component when the button is clicked.

The page's javascript bundle will not include the additional dependency, and will instead make a network request to fetch and invoke the code only when the button is clicked.

1. `npm start`
2. Open `http://localhost:8080` in a browser
3. Inspect network requests (only `index.html` and `index.bundle.js` is fetched)
4. Click the "Click me" button
5. See that `helloWorld.bundle.js` is fetched over the network and invoked to show to the Hello World message built via the `<HelloWorld />` react component

## Documentation

- [Webpack - Code Splitting - Dynamic Imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
- [React - Code Splitting - React Lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
- [React - Code Splitting - Error Boundaries](https://reactjs.org/docs/code-splitting.html#error-boundaries)
- [MDN - Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports)

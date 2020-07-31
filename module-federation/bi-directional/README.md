# Bi-Directional Module Federation

This example demonstrates bi-directional hosts each with their own remote `Button` components.

- `app1` exposes a red `<button>App 1 Button</button>` component.
- `app2` exposes a blue `<button>App 2 Button</button>` component.

## Setup

1. Run `npm run bootstrap` to install all the app's dependencies

## Example

Run `npm start`. This will build and serve both `app1` and `app2` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)

Notice that `app1` will asynchronously load `app2`'s button and vice versa.
The dev tools should show that `.js` files are being served by both app1 (`localhost:3001`) and app2 (`localhost:3002`).

## Documentation

- [Github - module-federation/module-federation-examples - bi-directional](https://github.com/module-federation/module-federation-examples/tree/master/bi-directional)

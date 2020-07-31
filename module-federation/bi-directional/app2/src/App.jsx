import LocalButton from './components/Button';
import React from 'react';

const RemoteButton = React.lazy(() => import('app1/Button'));

export default function App() {
  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>App 2</h2>
      <LocalButton />
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
}

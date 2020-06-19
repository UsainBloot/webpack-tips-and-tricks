import React, { useState, Suspense } from 'react';
import Button from './Button';

function HelloWorldMessage() {
  const HelloWorld = React.lazy(() => import(/* webpackChunkName: "HelloWorld" */'./HelloWorld'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HelloWorld />
    </Suspense>
  );
}

export default function App() {
  const [messageVisible, setMessageVisible] = useState(false);

  function toggleMessage() {
    setMessageVisible(!messageVisible);
  }

  return (
    <>
      <Button onClick={toggleMessage}>Click Me</Button>
      {messageVisible && <HelloWorldMessage />}
    </>
  );
}

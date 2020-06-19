import React, { useState } from 'react';
import Button from './Button';
import HelloWorld from './HelloWorld';

export default function App() {
  const [messageVisible, setMessageVisible] = useState(false);

  function showMessage() {
    setMessageVisible(true);
  }

  return (
    <>
      <Button onClick={showMessage}>Click Me</Button>
      {messageVisible && <HelloWorld />}
    </>
  );
}

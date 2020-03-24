import React, { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1> Heading</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;
import React, { useEffect, useState } from 'react';

/*const HelloWorld = () => {
  return (
      <h3>Hello World</h3>
  );
};*/

const Counter = () => {
  const [count, setCount] = useState(0);
  const [nextCount, setNextCount] = useState(0);


  useEffect(() => {
    setNextCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Clicked: {count}</p>
      <p>nextCount: {nextCount}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default Counter;
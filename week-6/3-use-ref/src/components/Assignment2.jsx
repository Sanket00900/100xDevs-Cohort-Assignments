import React, { useState, useCallback } from "react";
import { useRef } from "react";

//TODO
//* Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [count, setCount] = useState(0);

  const numberOfTimesReRendered = useRef(0);

  const handleReRender = () => {
    setCount(count + 1);
  };
  numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;
  return (
    <div>
      <h1>Assignment no 2</h1>

      <p>
        This component has rendered {numberOfTimesReRendered.current} times.
      </p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
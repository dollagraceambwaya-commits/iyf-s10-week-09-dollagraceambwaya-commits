import { useState, useEffect } from "react";

function CounterWithEffect() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render, including the first one
  useEffect(() => {
    console.log(`Effect ran: count is:`, count);
  });

  // This effect runs only once, after the first render
  useEffect(() => {
    console.log("This runs only once, after the first render");
  }, []);

  // This effect runs only when 'count' changes
  useEffect(() => {
    console.log(`Count changed:`, count);
    document.title = `Count: ${count}`;
  }, [count]);

  // Cleanup example
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleaned up!");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterWithEffect;

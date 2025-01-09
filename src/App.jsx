import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <h1 className="text-red-500 font-PlusJakartaSans">hello</h1>
      <h1>Plus Jakarta Sans</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <p>123456790</p>
      <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p>abcdefghijklmnopqrstuvwxyz</p>
    </>
  );
}

export default App;

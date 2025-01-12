import { useState } from "react";
import MainContainer from "./components/MainContainer.jsx";
import NavBar from "./components/NavBar.jsx";
import { kanbanContext } from "./Context/kanbanContext.jsx";

export default function App() {
  const [open, setOpen] = useState(true);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <kanbanContext.Provider value={{ open, handleOpen }}>
      <div className="">
        <NavBar />
        <MainContainer />
      </div>
    </kanbanContext.Provider>
  );
}

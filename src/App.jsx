import { useState } from "react";
import { kanbanContext } from "./Context/kanbanContext.jsx";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import Board from "./pages/Board .jsx";

export default function App() {
  //toggle sidebar
  const [open, setOpen] = useState(true);

  //Create New Board .

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <kanbanContext.Provider
      value={{
        open,
        handleOpen,
      }}
    >
      <MainLayout>
        <Board />
      </MainLayout>
    </kanbanContext.Provider>
  );
}

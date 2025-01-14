import { useState } from "react";
import { kanbanContext } from "./Context/kanbanContext.jsx";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import Board from "./pages/Board .jsx";

export default function App() {
  //toggle sidebar
  const [openSideBar, setOpenSideBar] = useState(true);
  function handleOpenSideBar() {
    setOpenSideBar(!openSideBar);
  }

  //Create New Board .
  const [openNewBoard, setAddNewBoard] = useState(false);
  const handleOpenBoard = () => {
    setAddNewBoard(true);
  };
  const handleCloseBoard = () => {
    setAddNewBoard(false);
  };

  return (
    <kanbanContext.Provider
      value={{
        openSideBar,
        handleOpenSideBar,
        openNewBoard,
        handleOpenBoard,
        handleCloseBoard,
      }}
    >
      <MainLayout>
        <Board />
      </MainLayout>
    </kanbanContext.Provider>
  );
}

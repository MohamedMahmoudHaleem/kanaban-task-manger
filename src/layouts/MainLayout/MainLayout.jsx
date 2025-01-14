import { useState } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import { kanbanContext } from "../../Context/kanbanContext.jsx";

function MainLayout({ children }) {
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

  //add newBoard data
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("newBoard")) || []
  );
  return (
    <kanbanContext.Provider
      value={{
        openSideBar,
        handleOpenSideBar,
        openNewBoard,
        handleOpenBoard,
        handleCloseBoard,
        boards,
        setBoards,
      }}
    >
      <div>
        <NavBar />
        <div className="flex flex-row min-h-screen overflow-hidden">
          <SideBar />
          {children}
        </div>
      </div>
    </kanbanContext.Provider>
  );
}

export default MainLayout;

import { createContext, useContext, useState } from "react";

const kanbanContext = createContext();

function KanbanProvider({ children }) {
  const [openSideBar, setOpenSideBar] = useState(true);
  function handleOpenSideBar() {
    setOpenSideBar(!openSideBar);
  }
  const [openEditCard, setOpenEditCard] = useState(false);
  function handleOpenEditCard() {
    setOpenEditCard(!openEditCard);
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
        openEditCard,
        handleOpenEditCard,
        openNewBoard,
        handleOpenBoard,
        handleCloseBoard,
        boards,
        setBoards,
      }}
    >
      {children}
    </kanbanContext.Provider>
  );
}
function useKanban() {
  return useContext(kanbanContext);
}
export { KanbanProvider, useKanban };

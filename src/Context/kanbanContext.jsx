import { createContext, useContext, useEffect, useState } from "react";

const kanbanContext = createContext();

function KanbanProvider({ children }) {
  //darkMode
  const [darkMode, setDarkMode] = useState(() => {
    // Get the initial theme from localStorage or system preference
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [openSideBar, setOpenSideBar] = useState(true);
  function handleOpenSideBar() {
    setOpenSideBar(!openSideBar);
  }
  const [openEditCard, setOpenCard] = useState(false);
  function handleEditCard() {
    setOpenCard(!openEditCard);
  }
  function handleCloseEditCard() {
    setOpenCard(false);
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
        darkMode,
        setDarkMode,
        openSideBar,
        handleOpenSideBar,
        openEditCard,
        handleEditCard,
        handleCloseEditCard,
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

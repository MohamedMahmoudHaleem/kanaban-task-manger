import { useContext } from "react";
import { kanbanContext } from "../Context/kanbanContext.jsx";
import Board from "./Board .jsx";
import SideBar from "./SideBar.jsx";

function MainContainer() {
  const { open, handleOpen } = useContext(kanbanContext);
  console.log("✌️ ~ MainContainer ~ open:", open);
  return (
    <div className="flex flex-row min-h-screen overflow-hidden">
      <SideBar />
      <Board />
    </div>
  );
}

export default MainContainer;

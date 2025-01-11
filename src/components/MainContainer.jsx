import Board from "./Board .jsx";
import SideBar from "./SideBar.jsx";

function MainContainer() {
  return (
    <div className="flex flex-row min-h-screen overflow-hidden">
      <SideBar />
      <Board />
    </div>
  );
}

export default MainContainer;

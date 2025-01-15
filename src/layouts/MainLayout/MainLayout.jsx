import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import { KanbanProvider } from "../../Context/kanbanContext.jsx";
import Board from "../../pages/Board/Board .jsx";

function MainLayout() {
  return (
    <KanbanProvider>
      <div>
        <NavBar />
        <div className="flex flex-row min-h-screen overflow-hidden">
          <SideBar />
          <Board />
        </div>
      </div>
    </KanbanProvider>
  );
}

export default MainLayout;

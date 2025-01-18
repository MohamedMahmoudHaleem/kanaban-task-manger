import { useKanban } from "../../../Context/kanbanContext.jsx";
import Board from "../../../pages/Board/Board .jsx";
import NavBar from "./NavBar/NavBar.jsx";
import ButtonCollapse from "./SideBar/ButtonCollapse.jsx";
import SideBar from "./SideBar/SideBar.jsx";

function Layout() {
  const { openSideBar } = useKanban();
  return (
    <div>
      <NavBar />
      <div className="flex flex-row min-h-screen overflow-hidden transition-all duration-700 ease-in-out">
        {openSideBar ? <SideBar /> : <ButtonCollapse />}
        <Board />
      </div>
    </div>
  );
}

export default Layout;

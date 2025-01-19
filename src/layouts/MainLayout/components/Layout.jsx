import { useEffect } from "react";
import { useKanban } from "../../../Context/kanbanContext.jsx";
import Board from "../../../pages/Board/Board .jsx";
import NavBar from "./NavBar/NavBar.jsx";
import ButtonCollapse from "./SideBar/ButtonCollapse.jsx";
import SideBar from "./SideBar/SideBar.jsx";

function Layout() {
  const { openSideBar } = useKanban();
  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   // Check if the URL contains the 'id' parameter and remove it
  //   if (url.searchParams.has("id")) {
  //     url.searchParams.delete("id");
  //     window.history.replaceState({}, "", url.toString());
  //   }
  // }, []);
  return (
    <div>
      <NavBar />
      <div className="flex flex-row min-h-screen overflow-hidden ">
        {openSideBar ? <SideBar /> : <ButtonCollapse />}
        <Board />
      </div>
    </div>
  );
}

export default Layout;

import { useEffect } from "react";
import { useKanban } from "../../../Context/kanbanContext.jsx";
import Board from "../../../pages/Board/Board .jsx";
import NavBar from "./NavBar/NavBar.jsx";
import ButtonCollapse from "./SideBar/ButtonCollapse.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../../services/network.js";

function Layout() {
  const { openSideBar } = useKanban();

  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["todo"],
    queryFn: getRequest,
    // Disable automatic fetch
    enabled: false,
  });
  const handleFetchData = () => {
    // Manually trigger the query
    refetch();
  };
  return (
    <div>
      <NavBar onFetchData={handleFetchData}/>
      <div className="flex flex-row min-h-screen overflow-hidden ">
        {openSideBar ? <SideBar /> : <ButtonCollapse />}
        <Board todo={data} isLoading={isFetching} error={error} />
      </div>
    </div>
  );
}

export default Layout;

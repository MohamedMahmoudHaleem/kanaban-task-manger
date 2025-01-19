import AddNewBoard from "../../layouts/MainLayout/components/NavBar/AddNewBoard.jsx";
import { getRequest } from "../../services/network.js";
import { useKanban } from "../../Context/kanbanContext.jsx";
import { useQuery } from "@tanstack/react-query";
import CreateNewBoard from "./components/CreateNewBoard.jsx";
import BoardData from "./components/BoardData.jsx";

function Board({ todo, isLoading, error }) {
  const { openNewBoard, handleOpenBoard, handleCloseBoard, boards } =
    useKanban();

  // get the id from url
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  // const { data, isPending, error } = useQuery({
  //   queryKey: ["todo"],
  //   queryFn: getRequest,
  // });
  // console.log("todo", data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="mt-20 min-h-full bg-neutral-light-veryLightMain w-full ">
      <div
        className="min-h-full  flex flex-col items-center  justify-center gap-4
        "
      >
        {/* main layout before fetch data  */}

        {todo ? <BoardData todo={todo} /> : <CreateNewBoard />}
      </div>
      {openNewBoard && (
        <AddNewBoard isOpen={openNewBoard} handleClose={handleCloseBoard} />
      )}
    </div>
  );
}

export default Board;

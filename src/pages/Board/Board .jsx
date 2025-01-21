import AddNewBoard from "../../layouts/MainLayout/_components/NavBar/AddNewBoard";
import { useKanban } from "../../Context/kanbanContext";
import CreateNewBoard from "./components/CreateNewBoard";
import BoardData from "./components/BoardData";

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
    <div className="mt-20 min-h-full transition-all duration-700 ease-in-out bg-neutral-light-veryLightMain w-full dark:bg-neutral-dark-veryDarkMain dark:text-neutral-dark-lightText">
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

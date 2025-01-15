import AddNewBoard from "../layouts/MainLayout/components/NavBar/AddNewBoard.jsx";
import { getRequest } from "../services/network.js";
import { useKanban } from "../Context/kanbanContext.jsx";
import { useQuery } from "@tanstack/react-query";

function Board() {
  const { openNewBoard, handleOpenBoard, handleCloseBoard, boards } =
    useKanban();

  const { data, isPending, error } = useQuery({
    queryKey: ["todo"],
    queryFn: getRequest,
  });
  console.log("todo", data);
  return (
    <div className="mt-20 min-h-full bg-neutral-light-veryLightMain w-full  ">
      <div
        className="min-h-full  flex flex-col items-center  justify-center gap-4
        "
      >
        {/* main layout before fetch data  */}
        
        {/* <p className="font-medium text-base text-center ">
          This board is empty. Create a new column to get started.
        </p>
        <button
          className="flex flex-row items-center justify-start py-3 px-5 
        btn text-neutral-light-veryLightSideNavCards font-semibold hover:transition-all hover:duration-150  "
          onClick={handleOpenBoard}
        >
          + Create New Board
        </button> */}

        {/* design the + New column and fetch data  */}
        {/* <div className="max-h-[75vh] flex flex-row gap-11 self-start mx-11 items-center overflow-hidden">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 justify-start items-center">
              <span className="rounded-full w-3 h-3 bg-red-900"></span>
              <span className="text-[#a3acba] font-semibold tracking-wide">
                ONe
              </span>
            </div>
            <div className="w-72 max-h-[75vh] overflow-y-scroll border-[2px] border-opacity-60 border-neutral-light-darkGrayishBlue border-dashed rounded-md ">
              {data?.todos.map((item, index) => (
                <div className="border-b-2 p-1 m-1 " key={index}>
                  {item.todo}
                </div>
              ))}
            </div>
          </div>
          <div className="w-72 min-h-[75vh] self-stretch mt-9 from-[#cad5e5] to-slate-100">
            <button className="w-full min-h-full rounded-md bg-gradient-to-b text-[#4e545e] font-bold text-2xl text-opacity-60 hover:text-primary-brightBlue ">
              + New Column
            </button>
          </div>
        </div> */}
      </div>
      {openNewBoard && (
        <AddNewBoard isOpen={openNewBoard} handleClose={handleCloseBoard} />
      )}
    </div>
  );
}

export default Board;

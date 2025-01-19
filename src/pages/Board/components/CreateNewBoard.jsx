import { useKanban } from "../../../Context/kanbanContext.jsx";

function CreateNewBoard() {
  const { handleOpenBoard } = useKanban();
  return (
    <>
      <p className="font-medium text-base text-center ">
        This board is empty. Create a new column to get started.
      </p>
      <button
        className="flex flex-row items-center justify-start py-3 px-5 
      btn text-neutral-light-veryLightSideNavCards font-semibold hover:transition-all hover:duration-150  "
        onClick={handleOpenBoard}
      >
        + Create New Board
      </button>
    </>
  );
}

export default CreateNewBoard;

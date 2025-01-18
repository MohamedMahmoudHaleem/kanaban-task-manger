// import { useToggle } from "../../../../components/UseToggle.jsx";
import { useKanban } from "../../../../Context/kanbanContext.jsx";

function EditedBoard() {

  
  const { setBoards, boards, handleCloseEditCard } = useKanban();
  console.log("✌️ ~ EditedBoard ~ boards:", boards);

  function deleteBoards() {
    const url = new URL(window.location.href); // Get the current search parameters
    const deletedId = url.searchParams.get("id");
    console.log("✌️ ~ deleteBoards ~ id:", deletedId);
    setBoards((boards) =>
      boards.filter((board) => board.id.toString() !== deletedId.toString())
    );
    // Change URL to the initial state without 'id'
    url.searchParams.delete("id");
    window.history.pushState({}, "", url.toString());
    handleCloseEditCard();
  }

  return (
    <div className="absolute top-[90px] right-10 py-4 rounded-md bg-neutral-light-veryLightSideNavCards w-48 flex flex-col items-start px-4 gap-2 shadow-md">
      <button className=" hover:opacity-50">Edit Board</button>
      <button className="text-red-600 hover:opacity-50" onClick={deleteBoards}>
        Delete Board
      </button>
    </div>
  );
}

export default EditedBoard;

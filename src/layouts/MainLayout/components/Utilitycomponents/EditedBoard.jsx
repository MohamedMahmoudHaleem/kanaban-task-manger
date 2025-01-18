import { useKanban } from "../../../../Context/kanbanContext.jsx";

function EditedBoard() {
  // function stopPropagations(e){
  //     // e.traget.
  // }
  return (
    <div className="absolute top-[90px] right-10 py-4 rounded-md bg-neutral-light-veryLightSideNavCards w-48 flex flex-col items-start px-4 gap-2 shadow-md">
      <button className=" hover:opacity-50">Edit Board</button>
      <button className="text-red-600 hover:opacity-50 ">Delete Board</button>
    </div>
  );
}

export default EditedBoard;

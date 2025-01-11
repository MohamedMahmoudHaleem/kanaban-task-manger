function Board() {
  return (
    <div className="mt-[92px] bg-neutral-light-veryLightMain w-full  ">
      <div
        className="min-h-full mt-16 flex flex-col items-center justify-center gap-4
        "
      >
        <p className="font-medium text-base text-center ">
          This board is empty. Create a new column to get started.
        </p>
        <button
          className="flex flex-row items-center justify-start gap-3 py-3 px-4 
        btn  text-neutral-light-veryLightSideNavCards font-semibold hover:transition-all  hover:duration-150  "
        >
          + Create New Board
        </button>
      </div>
    </div>
  );
}

export default Board;

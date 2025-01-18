import { useKanban } from "../../../../Context/kanbanContext.jsx";
import HideIcon from "../../../../assets/icon-hide-sidebar.svg";
function ButtonCollapse() {
  const { handleOpenSideBar } = useKanban();
  return (
    <div
      className="fixed top-0 left-0 flex flex-row justify-end -ml-5 p-2 items-center w-[70px] h-10 btn  cursor-pointer rounded-full  hover:transition-all hover:duration-200 hover:opacity-70"
      onClick={handleOpenSideBar}
    >
      {/* hide sidebar */}
      <button
        className={`flex flex-row justify-start items-center  font-bold text-neutral-light-ContentText`}
      >
        <div className="bg-white rounded-full ">
          <img src={HideIcon} alt="hideIcon" />
        </div>
      </button>
    </div>
  );
}

export default ButtonCollapse;

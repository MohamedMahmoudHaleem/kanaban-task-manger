import { useKanban } from "../../../../Context/kanbanContext.jsx";
import HideIcon from "../../../../assets/icon-hide-sidebar.svg";
function ButtonCollapse() {
  const { handleOpenSideBar, openSideBar } = useKanban();
  return (
    <div
      className={`transition-all duration-900 ease-in-out fixed top-[87%] left-0 flex flex-row justify-end -ml-4 p-3 items-center w-[75px] h-10 btn  cursor-pointer rounded-full      
      hover:transition-all hover:duration-200 hover:opacity-70
      `}
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

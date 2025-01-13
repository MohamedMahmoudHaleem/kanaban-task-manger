import { useContext } from "react";
import { kanbanContext } from "../../../../Context/kanbanContext.jsx";
import HideIcon from "../../../../assets/icon-hide-sidebar.svg";
function ButtonCollapse() {
  const { handleOpen } = useContext(kanbanContext);
  return (
    <div
      className={`flex flex-row justify-start items-center gap-4 mx-auto mb-4 hover:transition-all hover:duration-200 hover:opacity-70`}
    >
      <button
        className={`flex flex-row justify-start items-center gap-4 mx-auto font-bold text-neutral-light-ContentText`}
        onClick={handleOpen}
      >
        <div>
          <img src={HideIcon} alt="hideIcon" />
        </div>
        Hide SideBar
      </button>
    </div>
  );
}

export default ButtonCollapse;

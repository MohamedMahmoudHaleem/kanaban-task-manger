import VerticalIcon from "../../../../assets/icon-vertical-ellipsis.svg";
import logo from "../../../../assets/logo-mobile.svg";
// import { useToggle } from "../../../../components/UseToggle.jsx";
import { useKanban } from "../../../../Context/kanbanContext.jsx";
import EditedBoard from "../utilityComponents/EditedBoard.jsx";
function NavBar({ onFetchData }) {
  // const [isOpen, handleToggle] = useToggle(false);

  const { openEditCard, handleEditCard } = useKanban();

  return (
    <div
      className="fixed top-0 left-0 w-full bg-neutral-light-veryLightSideNavCards dark:bg-neutral-dark-layout  dark:text-neutral-light-veryLightSideNavCards dark:border-b-gray-600 
    transition-all duration-700 ease-in-out
    flex flex-row items-center  border-b-[1px] border-black-100 gap-8 pr-3 
    "
    >
      <div
        className="flex flex-row gap-3 items-center p-7 pl-8 border-r-[.5px] border-r-black-100 w-[365px]        
      dark:border-r-gray-600 transition-border duration-500  ease-in-out  "
      >
        <div className="w-6 h-6">
          <img src={logo} alt="icon" className="object-contain" />
        </div>
        <h1 className="font-extrabold text-3xl ">kanban</h1>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-bold text-2xl">Platform Launch</h1>
        <div className="flex flex-row gap-3 justify-center items-center">
          <button
            className="btn p-3 w-40 text-base font-semibold hover:transition-all hover:duration-150 "
            onClick={onFetchData}
          >
            {" "}
            + Add New Task
          </button>
          <div
            className="cursor-pointer mr-3 w-6 h-10 flex items-center justify-center rounded-full hover:bg-primary-btnHover hover:bg-opacity-30 hover:transition-all hover:duration-150
          "
            onClick={handleEditCard}
          >
            <img src={VerticalIcon} alt="vertical" className="" />
          </div>
          {openEditCard && <EditedBoard />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

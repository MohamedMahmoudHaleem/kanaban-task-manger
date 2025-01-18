// import BoardIcon from "../assets/icons/BoardIcon.jsx";
import BoardIcon from "../../../../assets/icon-board.svg";
import DarkIcon from "../../../../assets/icon-dark-theme.svg";
import LightIcon from "../../../../assets/icon-light-theme.svg";
import AddNewBoard from "../NavBar/AddNewBoard.jsx";
import { useKanban } from "../../../../Context/kanbanContext.jsx";
import HideIcon from "../../../../assets/icon-hide-sidebar.svg";
import { useSearchParams } from "react-router";
// import ButtonCollapse from "./ButtonCollapse.jsx";
function SideBar() {
  const {
    openSideBar,
    handleOpenSideBar,
    openNewBoard,
    handleOpenBoard,
    handleCloseBoard,
    boards,
  } = useKanban();
  console.log("useKanban", useKanban());
  // const [searchParams, setSearchParams] = useSearchParams();

  function navigateToBoard(id) {
    console.log("✌️ ~ navigateToBoard ~ id:", id);
    const url = new URL(window.location.href); // Get the current search parametersconst
    const searchParams = new URLSearchParams(url.search);
    searchParams.set("id", id);
    url.search = searchParams.toString();
    window.history.pushState({}, "", url.toString());
  }
  return (
    <div
      className={` mt-[92px] bg-natural-light-veryLightSideNavCards transition-all duration-1000 ease-in-out           
          ${
            openSideBar
              ? "w-[370px] border-r-[1px] border-black-100 "
              : "w-0 overflow-hidden "
          }`}
    >
      <div
        className={`transition-all duration-700 ease-in-out ${
          openSideBar
            ? "flex flex-col mt-7 items-start justify-between min-h-[90%]"
            : "hidden"
        }`}
      >
        <div>
          <p className="text-sm ml-7 place-self-start text-neutral-light-ContentText font-semibold tracking-widest">
            ALL BOARDS ({boards.length})
          </p>
          <ul className="flex flex-col gap-2 py-3 items-start w-full ">
            {boards.map((element, index) => {
              return (
                <li key={index} className="w-full group ">
                  <button
                    className="w-full pr-20 py-2 pl-8  flex flex-row flex-nowrap items-center justify-start gap-4  text-neutral-light-ContentText font-semibold  hover:transition-all group-active:bg-primary-brightBlue hover:duration-150 hover:btn hover:w-[120%] hover:rounded-l-none"
                    onClick={() => navigateToBoard(element.id)}
                  >
                    {/* <BoardIcon /> */}
                    <div className="">
                      <img
                        src={BoardIcon}
                        className="object-contain"
                        alt="boardIcon"
                      />
                    </div>
                    {element.name}
                  </button>
                </li>
              );
            })}
            <li className="w-full ">
              <button
                className="w-full py-3 pl-8  flex flex-row items-center justify-start gap-3  text-neutral-light-ContentText font-semibold  hover:transition-all group-active:bg-primary-brightBlue hover:duration-150 hover:opacity-70"
                onClick={handleOpenBoard}
              >
                <div>
                  <img
                    src={BoardIcon}
                    className="object-contain"
                    alt="boardIcon"
                  />
                </div>
                + Create New Board
              </button>
            </li>
          </ul>
          {openNewBoard && (
            <AddNewBoard isOpen={openNewBoard} handleClose={handleCloseBoard} />
          )}
        </div>
        <div>
          <div className=" w-[85%] ml-7 flex flex-row justify-between items-center  bg-neutral-light-veryLightMain py-4 px-7 rounded-md ">
            <div>
              <img src={DarkIcon} alt="darkIcon" />
            </div>
            <div>
              <input
                type="checkbox"
                className="cursor-pointer border-none relative appearance-none w-10 h-5 border-2 bg-white rounded-xl before:content-[''] before:absolute before:top-[50%] before:-translate-y-1/2 before:left-5 before:w-4 before:h-4 before:rounded-full before:bg-primary-brightBlue
              before:translate-x-0 before:transition-all before:duration-300
              checked:bg-primary-brightBlue checked:transition-all checked:duration-300
              before:checked:bg-white before:checked:-translate-x-4 before:checked:transition-all before:checked:duration-300"
              />
            </div>
            <div>
              <img src={LightIcon} alt="lightIcon" />
            </div>
          </div>
          <div
            className={`flex flex-row justify-start items-center gap-4 mt-5 m-16 mb-4 hover:transition-all hover:duration-200 hover:opacity-70`}
          >
            {/* hide sidebar */}
            <button
              className={`flex flex-row justify-start items-center gap-4  font-bold text-neutral-light-ContentText`}
              onClick={handleOpenSideBar}
            >
              <div>
                <img src={HideIcon} alt="hideIcon" />
              </div>
              Hide SideBar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

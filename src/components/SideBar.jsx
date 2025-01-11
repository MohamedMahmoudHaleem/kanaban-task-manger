// import BoardIcon from "../assets/icons/BoardIcon.jsx";
import BoardIcon from "../assets/icon-board.svg";
import DarkIcon from "../assets/icon-dark-theme.svg";
import LightIcon from "../assets/icon-light-theme.svg";
import HideIcon from "../assets/icon-hide-sidebar.svg";
function SideBar() {
  const data = [
    { title: "Platform Launch", icon: BoardIcon },
    { title: "Marketing Plan", icon: BoardIcon },
    { title: "Marketing Plan", icon: BoardIcon },
    { title: "Roadmap", icon: BoardIcon },
  ];
  return (
    <div className="mt-[92px] bg-natural-light-veryLightSideNavCards w-[370px]">
      <div className="flex flex-col mt-6 items-start justify-between min-h-[85%] ">
        <div>
          <p className="text-sm ml-7 place-self-start text-neutral-light-ContentText font-semibold tracking-widest">
            ALL BOARDS (3)
          </p>
          <ul className=" flex flex-col gap-4 py-4  items-start w-full ">
            {data.map((element, index) => {
              return (
                <li key={index} className="w-full group ">
                  <button className="w-full pr-20 py-3 pl-8  flex flex-row flex-nowrap items-center justify-start gap-4  text-neutral-light-ContentText font-semibold  hover:transition-all group-active:bg-primary-brightBlue hover:duration-150 hover:btn hover:rounded-l-none">
                    {/* <BoardIcon /> */}
                    <div className="">
                      <img
                        src={element.icon}
                        className="object-contain"
                        alt="boardIcon"
                      />
                    </div>
                    {element.title}
                  </button>
                </li>
              );
            })}
            <li className="w-full ">
              <button className="w-full py-3 pl-8  flex flex-row items-center justify-start gap-4  text-neutral-light-ContentText font-semibold  hover:transition-all group-active:bg-primary-brightBlue hover:duration-150 hover:opacity-70">
                <div className="">
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
        </div>
        <div className="w-9/12 flex flex-row justify-between items-center gap-4 bg-neutral-light-veryLightMain py-4 px-7 rounded-md mx-auto">
          <div>
            <img src={DarkIcon} alt="darkIcon" />
          </div>
          <div>
            <input
              type="checkbox"
              className="cursor-pointer border-none relative appearance-none w-10 h-5 border-2 bg-white rounded-xl before:content-[''] before:absolute before:top-[50%] before:-translate-y-1/2 before:left-5 before:w-4 before:h-4 before:rounded-full before:bg-primary-brightBlue 
            before:translate-x-0 before:transition-all before:duration-300 
           checked:bg-primary-brightBlue checked:transition-all checked:duration-300
            before:checked:bg-white before:checked:-translate-x-4 before:checked:transition-all before:checked:duration-300 "
            />
          </div>
          <div>
            <img src={LightIcon} alt="lightIcon" />
          </div>
        </div>
        <div className="flex flex-row justify-start items-center gap-4   mx-auto">
          <button className='flex flex-row justify-start items-center gap-4    mx-auto' >
            <div>
              <img src={HideIcon} alt="hideIcon" />
            </div>
            Hide SideBar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
{
  /* <div className="w-9/12 ml-7">
<div className="flex flex-row justify-between items-center gap-2 bg-neutral-light-veryLightMain py-4 px-7 rounded-md ">
  <div>
    <img src={DarkIcon} alt="darkIcon" />
  </div>
  <div>
    <input
      type="checkbox"
      className="cursor-pointer border-none relative appearance-none w-10 h-5 border-2 bg-primary-brightBlue rounded-xl before:content-[''] before:absolute before:top-[50%] before:-translate-y-1/2 before:left-5 before:w-4 before:h-4 before:rounded-full before:bg-white 
       before:translate-x-0 before:transition-all before:duration-300  before:checked:-translate-x-4 before:checked:transition-all before:checked:duration-300 "
    />
  </div>
  <div>
    <img src={LightIcon} alt="lightIcon" />
  </div>
</div>
</div> */
}

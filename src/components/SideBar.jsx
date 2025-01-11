// import BoardIcon from "../assets/icons/BoardIcon.jsx";
import BoardIcon from "../assets/icon-board.svg";
function SideBar() {
  const data = [
    { title: "Platform Launch", icon: BoardIcon },
    { title: "Marketing Plan", icon: BoardIcon },
    { title: "Marketing Plan", icon: BoardIcon },
    { title: "Roadmap", icon: BoardIcon },
  ];
  return (
    <div className="mt-[92px] bg-natural-light-veryLightSideNavCards w-[370px]">
      <div className="flex flex-col mt-6 items-start ">
        <p className="text-sm ml-7 place-self-start text-neutral-light-ContentText font-semibold tracking-widest">
          ALL BOARDS (3)
        </p>
        <ul className=" flex flex-col gap-4 py-4  items-start w-full ">
          {data.map((element, index) => {
            return (
              <li key={index} className="w-full group ">
                <button className="w-11/12 py-3 pl-8  flex flex-row items-center justify-start gap-4  text-neutral-light-ContentText font-semibold  hover:transition-all group-active:bg-primary-brightBlue hover:duration-150 hover:btn hover:rounded-l-none">
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
        </ul>
      </div>
    </div>
  );
}

export default SideBar;

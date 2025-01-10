
import BoardIcon from "../assets/icon-board.svg";

function SideBar() {
  const data = [
    { title: "one", icon: BoardIcon },
    { title: "two", icon: BoardIcon },
    { title: "three", icon: BoardIcon },
    { title: "four", icon: BoardIcon },
  ];
  return (
    <div className="fixed top-0 left-0 bg-red-300 p-4 h-full">      
      <div className="flex flex-col ">
        <p className="text-xs">ALL BOARDS(3)</p>
        <ul className="flex flex-col gap-4 p-4">
          {data.map((element, index) => {
            return (
              <li key={index} className="">
                <button className="btn flex flex-row items-center justify-center gap-2 w-full ">
                  <img
                    src={element.icon}
                    className="object-contain"
                    alt="boardIcon"
                  />
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

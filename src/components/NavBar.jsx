import VerticalIcon from "../assets/icon-vertical-ellipsis.svg";
import logo from "../assets/logo-mobile.svg";
function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-light-veryLightSideNavCards flex flex-row  items-center   border-b-[1px] border-black-100 gap-8 ">
      <div className="flex flex-row gap-3 items-center p-7 pl-8 border-r-[1px] border-black-100 w-[350px]">
        <div className="w-6 h-6">
          <img src={logo} alt="icon" className="object-contain" />
        </div>
        <h1 className="font-extrabold text-3xl ">kanban</h1>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-bold text-2xl">Platform Launch</h1>
        <div className="flex flex-row gap-3 justify-center items-center">
          <button className="btn p-3 w-40 text-base font-semibold hover:transition-all hover:duration-150 ">
            {" "}
            + Add New Task
          </button>
          <div className="cursor-pointer mr-3 w-6 h-10 flex items-center justify-center rounded-full hover:bg-primary-btnHover hover:bg-opacity-30 hover:transition-all hover:duration-150">
            <img src={VerticalIcon} alt="vertical" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

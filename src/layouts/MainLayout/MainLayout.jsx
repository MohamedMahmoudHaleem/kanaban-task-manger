import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";

function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row min-h-screen overflow-hidden">
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;

import { KanbanProvider } from "../../Context/kanbanContext.jsx";
import Layout from "./components/Layout.jsx";

function MainLayout() {
  return (
    <KanbanProvider>
      <Layout />
    </KanbanProvider>
  );
}

export default MainLayout;

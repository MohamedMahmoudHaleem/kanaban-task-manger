import { KanbanProvider } from "../../Context/kanbanContext.jsx";
import Layout from "./_components/Layout.jsx";

function MainLayout() {
  return (
    <KanbanProvider>
      <Layout />
    </KanbanProvider>
  );
}

export default MainLayout;

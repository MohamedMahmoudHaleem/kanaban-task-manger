import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import Board from "./pages/Board .jsx";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <MainLayout>
      <Board />
    </MainLayout>
  );
}

import { createBrowserRouter } from "react-router";
import { OnePage } from "./components/OnePage";
import { AIChatPage } from "./components/pages/AIChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: OnePage,
  },
  {
    path: "/chat",
    Component: AIChatPage,
  },
  {
    path: "*",
    Component: OnePage,
  },
]);

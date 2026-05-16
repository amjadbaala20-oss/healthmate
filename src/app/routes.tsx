import { createBrowserRouter } from "react-router";
import { OnePage } from "./components/OnePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: OnePage,
  },
  {
    path: "*",
    Component: OnePage,
  },
]);

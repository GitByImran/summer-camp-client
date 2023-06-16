import { createBrowserRouter } from "react-router-dom";
import Root from "../user-view/root-components/Root";
import Home from "../user-view/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;

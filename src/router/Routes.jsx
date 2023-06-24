import { createBrowserRouter } from "react-router-dom";
import Root from "../user-view/root-components/Root";
import Home from "../user-view/pages/home/Home";
import Login from "../user-view/pages/authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

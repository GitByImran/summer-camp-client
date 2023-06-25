import { createBrowserRouter } from "react-router-dom";
import Root from "../user-view/root-components/Root";
import Home from "../user-view/pages/home/Home";
import Login from "../user-view/pages/authentication/Login";
import Register from "../user-view/pages/authentication/Register";

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
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

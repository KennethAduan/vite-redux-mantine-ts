import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;

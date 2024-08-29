import { Outlet, RouterProvider } from "react-router-dom";
import routers from "./routers/Routers";

const App = () => {
  return (
    <RouterProvider router={routers}>
      <Outlet />
    </RouterProvider>
  );
};

export default App;

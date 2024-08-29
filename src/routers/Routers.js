import { createBrowserRouter } from "react-router-dom";
import UseStateHookPage from "../screens/UseStateHookPage";
import Root from "../screens/Root";
import UseInputHookPage from "../screens/UseInputHookPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/useState",
    element: <UseStateHookPage />,
  },
  {
    path: "/useInput",
    element: <UseInputHookPage />,
  },
]);

export default routers;

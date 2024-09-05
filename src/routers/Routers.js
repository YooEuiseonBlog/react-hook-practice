import { createBrowserRouter } from "react-router-dom";
import UseStateHookPage from "../screens/UseStateHookPage";
import Root from "../screens/Root";
import UseInputHookPage from "../screens/UseInputHookPage";
import UseTabsHookPage from "../screens/UseTabsHookPage";
import UseEffectHookPage from "../screens/UseEffectHookPage";
import UseTitleHookPage from "../screens/UseTitleHookPage";
import UseClickHookPage from "../screens/UseClickHookPage";
import UsePreventLeaveHookPage from "../screens/UsePreventLeaveHookPage";
import UseConfirmHookPage from "../screens/UseConfirmHookPage";

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
  {
    path: "/useTabs",
    element: <UseTabsHookPage />,
  },
  {
    path: "/useEffect",
    element: <UseEffectHookPage />,
  },
  {
    path: "/useTitle",
    element: <UseTitleHookPage />,
  },
  {
    path: "/useClick",
    element: <UseClickHookPage />,
  },
  {
    path: "/usePreventLeave",
    element: <UsePreventLeaveHookPage />,
  },
  {
    path: "/useConfirm",
    element: <UseConfirmHookPage />,
  },
]);

export default routers;

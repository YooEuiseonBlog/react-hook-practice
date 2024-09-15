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
import UseBeforeLeaveHookPage from "../screens/UseBeforeLeaveHookPage";
import UseFadeInHookPage from "../screens/UseFadeInHookPage";
import UseNetworkHookPage from "../screens/UseNetworkHookPage";
import UseScrollHookPage from "../screens/UseScrollHookPage";
import UseFullScreenHookPage from "../screens/UseFullScreenHookPage";
import UseNotificationHookPage from "../screens/UseNotificationHookPage";
import UseAxiosHookPage from "../screens/UseAxiosHookPage";

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
  {
    path: "/useConfirm",
    element: <UseConfirmHookPage />,
  },
  {
    path: "/useBeforeLeave",
    element: <UseBeforeLeaveHookPage />,
  },
  {
    path: "/useFadeIn",
    element: <UseFadeInHookPage />,
  },
  {
    path: "/useNetwork",
    element: <UseNetworkHookPage />,
  },
  {
    path: "/useScroll",
    element: <UseScrollHookPage />,
  },
  {
    path: "/useFullScreen",
    element: <UseFullScreenHookPage />,
  },
  {
    path: "/useNotification",
    element: <UseNotificationHookPage />,
  },
  {
    path: "/useAxios",
    element: <UseAxiosHookPage />,
  },
]);

export default routers;

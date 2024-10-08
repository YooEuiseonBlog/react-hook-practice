import { Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to={"/useState"}>UseState</Link>
        </li>
        <li>
          <Link to={"/useInput"}>useInput</Link>
        </li>
        <li>
          <Link to={"/useTabs"}>useTabs</Link>
        </li>
        <li>
          <Link to={"/useEffect"}>useEffect</Link>
        </li>
        <li>
          <Link to={"/useTitle"}>useTitle</Link>
        </li>
        <li>
          <Link to={"/useClick"}>useClick</Link>
        </li>
        <li>
          <Link to={"/usePreventLeave"}>usePreventLeave</Link>
        </li>
        <li>
          <Link to={"/useConfirm"}>useConfirm</Link>
        </li>
        <li>
          <Link to={"/useBeforeLeave"}>useBeforeLeave</Link>
        </li>
        <li>
          <Link to={"/useFadeIn"}>useFadeIn</Link>
        </li>
        <li>
          <Link to={"/useNetwork"}>useNetwork</Link>
        </li>
        <li>
          <Link to={"/useScroll"}>useScroll</Link>
        </li>
        <li>
          <Link to={"/useFullScreen"}>useFullScreen</Link>
        </li>
        <li>
          <Link to={"/useNotification"}>useNotification</Link>
        </li>
        <li>
          <Link to={"/useAxios"}>useAxios</Link>
        </li>
      </ul>
    </>
  );
};

export default Root;

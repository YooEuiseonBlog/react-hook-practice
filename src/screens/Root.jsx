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
      </ul>
    </>
  );
};

export default Root;

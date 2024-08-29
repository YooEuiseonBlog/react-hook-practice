import { createBrowserRouter, Link } from "react-router-dom";

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
      </ul>
    </>
  );
};

export default Root;

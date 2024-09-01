import { useState } from "react";
import styles from "../css/App.module.css";
import { useEffect } from "react";

const UseEffectHookPage = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  useEffect(sayHello, []);
  return (
    <div className={`${styles.app}`}>
      <div>Hi</div>
      <div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(number + 1)}>{aNumber}</button>
      </div>
    </div>
  );
};

export default UseEffectHookPage;

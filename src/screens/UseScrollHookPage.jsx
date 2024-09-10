import { useEffect, useState } from "react";
import styles from "../css/App.module.css"; // CSS 모듈을 import하여 컴포넌트에 스타일 적용

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = (event) => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const UseScrollHookPage = () => {
  const { y } = useScroll();

  return (
    <div className={`${styles.app}`} style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default UseScrollHookPage; // 컴포넌트 export

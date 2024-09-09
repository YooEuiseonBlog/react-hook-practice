import { useEffect } from "react";
import styles from "../css/App.module.css";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {

    if(typeof onBefore !== "function") {
      return;
    }
    const handle = (event) => {
      const {clientY} = event;

      if(clientY <= 0) {
        onBefore();
      }
      
    };
    
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]);
};

const UseBeforeLeaveHookPage = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className={`${styles.app}`}>
      <h1>Hello</h1>
    </div>
  );
};

export default UseBeforeLeaveHookPage; // 컴포넌트 내보내기

import { useState } from "react";
import styles from "../css/App.module.css"; // CSS 모듈을 import하여 컴포넌트에 스타일 적용
import { useEffect } from "react";
import { useCallback } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = useCallback(() => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }, [onChange]);

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [handleChange]);

  return status;
};

const UseNetworkHookPage = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className={`${styles.app}`}>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default UseNetworkHookPage; // 컴포넌트 export

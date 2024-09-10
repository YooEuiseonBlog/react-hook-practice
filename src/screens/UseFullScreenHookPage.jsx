import { useRef } from "react";
import styles from "../css/App.module.css"; // CSS 모듈을 import하여 컴포넌트에 스타일 적용

const useFullScreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    // if (element.current) {
    //   element.current.requestFullscreen();
    //   if (typeof callback === "function") {
    //     callback(true);
    //   }
    // }
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      runCb(true);
    }
  };

  const exitFull = () => {
    if (document.fullscreenElement) {
      // document.exitFullscreen();
      // if (typeof callback === "function") {
      //   callback(false);
      // }
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      runCb(false);
    }
  };
  return { element, triggerFull, exitFull };
};
const UseFullScreenHookPage = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className={`${styles.app}`} style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://picsum.photos/200/300" alt="Random playing" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default UseFullScreenHookPage; // 컴포넌트 export

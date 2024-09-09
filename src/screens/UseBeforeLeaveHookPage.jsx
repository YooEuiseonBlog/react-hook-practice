import styles from "../css/App.module.css"; // CSS 모듈을 import하여 컴포넌트에 스타일 적용
import { useBeforeLeave } from "../hooks/MyHooks";

// UseBeforeLeaveHookPage 컴포넌트
const UseBeforeLeaveHookPage = () => {
  // 사용자가 페이지를 떠나려고 할 때 실행될 함수 선언
  const begForLife = () => console.log("Pls dont leave");

  // useBeforeLeave 커스텀 Hook 사용하여 begForLife 함수 전달
  useBeforeLeave(begForLife);

  // 스타일을 적용한 div와 Hello 텍스트 출력
  return (
    <div className={`${styles.app}`}>
      <h1>Hello</h1>
    </div>
  );
};

export default UseBeforeLeaveHookPage; // 컴포넌트 export

import styles from "../css/App.module.css"; // CSS 모듈을 가져옴, 특정 스타일을 적용할 때 사용

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

// UseClickHookPage 컴포넌트 정의
const UsePreventLeaveHookPage = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className={`${styles.app}`}>
      <h1>hello PreventLeavePage</h1>
      <div>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
    </div>
  );
};

export default UsePreventLeaveHookPage; // 컴포넌트 내보내기

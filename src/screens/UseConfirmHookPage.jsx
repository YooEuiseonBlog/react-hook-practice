import styles from "../css/App.module.css"; // CSS 모듈을 가져옴, 특정 스타일을 적용할 때 사용

const useConfirm = (message = "", onConfirm, onCancel) => {
  // if (!onConfirm || typeof onConfirm !== "function") {
  //   return;
  // }

  // if (!onCancel || typeof onCancel !== "function") {
  //   return;
  // }

  if (typeof onConfirm !== "function" || typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

// UseClickHookPage 컴포넌트 정의
const UseConfirmHookPage = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className={`${styles.app}`}>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirmHookPage; // 컴포넌트 내보내기

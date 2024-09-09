import styles from "../css/App.module.css"; // CSS 모듈을 가져옴, 특정 스타일을 적용할 때 사용
import { useConfirm } from "../hooks/MyHooks";

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

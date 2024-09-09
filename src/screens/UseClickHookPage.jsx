import styles from "../css/App.module.css"; // CSS 모듈을 가져옴, 특정 스타일을 적용할 때 사용
import { useClick } from "../hooks/MyHooks";

// UseClickHookPage 컴포넌트 정의
const UseClickHookPage = () => {
  const sayHello = () => console.log("say hello"); // 클릭 시 실행될 함수
  const title = useClick(sayHello); // useClick 훅을 사용하여 h1 태그에 클릭 이벤트를 연결
  return (
    <div className={`${styles.app}`}>
      {/* CSS 모듈을 사용하여 스타일 적용 */}
      <h1 ref={title}>Hi</h1>{" "}
      {/* ref로 useClick에서 반환된 title을 연결하여 h1 요소를 참조 */}
    </div>
  );
};

export default UseClickHookPage; // 컴포넌트 내보내기

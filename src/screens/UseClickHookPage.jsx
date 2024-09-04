import { useEffect, useRef } from "react"; // React의 useEffect와 useRef 훅을 가져옴
import styles from "../css/App.module.css"; // CSS 모듈을 가져옴, 특정 스타일을 적용할 때 사용

// useClick 커스텀 훅 정의
// 이 훅은 onClick이라는 함수형 인자를 받고, 이를 특정 요소에 click 이벤트로 연결해줌
const useClick = (onClick) => {
  const element = useRef(); // DOM 요소를 참조할 수 있도록 useRef 훅 사용
  useEffect(() => {
    // onClick이 함수가 아닐 경우 아무 작업도 하지 않음
    if (typeof onClick !== "function") {
      return;
    }
    // element.current가 존재하면 클릭 이벤트 리스너를 추가함
    if (element.current) {
      console.log("useEffect used."); // useEffect가 실행된 것을 콘솔에 출력
      element.current.addEventListener("click", onClick); // onClick 함수를 클릭 이벤트로 추가
    }
    // useEffect의 cleanup 함수: 컴포넌트가 언마운트되거나 업데이트될 때 이벤트 리스너를 제거함
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick); // 클릭 이벤트 리스너 제거
      }
    };
  }, []); // 의존성 배열이 비어있기 때문에 컴포넌트가 마운트될 때 한 번만 실행
  // onClick이 함수가 아닌 경우 undefined를 반환, 그렇지 않으면 ref를 반환
  return typeof onClick !== "function" ? undefined : element;
};

// UseClickHookPage 컴포넌트 정의
const UseClickHookPage = () => {
  const sayHello = () => console.log("say hello"); // 클릭 시 실행될 함수
  const title = useClick(sayHello); // useClick 훅을 사용하여 h1 태그에 클릭 이벤트를 연결
  return (
    <div className={`${styles.app}`}>
      {" "}
      {/* CSS 모듈을 사용하여 스타일 적용 */}
      <h1 ref={title}>Hi</h1>{" "}
      {/* ref로 useClick에서 반환된 title을 연결하여 h1 요소를 참조 */}
    </div>
  );
};

export default UseClickHookPage; // 컴포넌트 내보내기

import styles from "../css/App.module.css"; // CSS 모듈을 import하여 컴포넌트에 스타일 적용
import { useFadeIn } from "../hooks/MyHooks";

const UseFadeInHookPage = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  return (
    <div className={`${styles.app}`}>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalala</p>
    </div>
  );
};

export default UseFadeInHookPage; // 컴포넌트 export

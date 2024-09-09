import styles from "../css/App.module.css";
import { useTitle } from "../hooks/MyHooks";

const UseTitleHookPage = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className={`${styles.app}`}>
      <div>Hi</div>
    </div>
  );
};

export default UseTitleHookPage;

import { useEffect, useState } from "react";
import styles from "../css/App.module.css";
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
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

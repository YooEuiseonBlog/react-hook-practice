import styles from "../css/App.module.css"; // CSS 모듈을 import하여 컴포넌트에 스타일 적용

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const UseNotificationHookPage = () => {
  const triggerNotification = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi. don't you?",
  });
  return (
    <div className={`${styles.app}`}>
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
};

export default UseNotificationHookPage; // 컴포넌트 export

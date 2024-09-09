import styles from "../css/App.module.css";
import { useInput } from "../hooks/MyHooks";

const UseInputHookPage = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className={`${styles.app}`}>
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default UseInputHookPage;

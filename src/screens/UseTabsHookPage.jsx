import styles from "../css/App.module.css";
import styled from "styled-components";
import { useTabs } from "../hooks/MyHooks";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;


const UseTabsHookPage = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className={`${styles.app}`}>
      <Wrapper>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
      </Wrapper>
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabsHookPage;

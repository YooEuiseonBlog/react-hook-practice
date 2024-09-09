import { useEffect, useRef, useState } from "react";

// useTabs Hook: 탭 UI를 관리하는 간단한 커스텀 Hook
// initialTab: 초기 탭의 인덱스
// allTabs: 모든 탭 정보를 담은 배열
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab); // 현재 선택된 탭의 인덱스를 상태로 관리
  if (!allTabs || !Array.isArray(allTabs)) {
    return; // allTabs가 배열이 아니거나 존재하지 않으면 아무 작업도 하지 않음
  }
  return {
    currentItem: allTabs[currentIndex], // 현재 선택된 탭의 정보를 반환
    changeItem: setCurrentIndex, // 탭을 변경하는 함수 반환
  };
};

// useInput Hook: 입력 값과 유효성 검사 기능을 제공하는 커스텀 Hook
// initialValue: 입력 필드의 초기 값
// validator: 유효성 검사를 위한 함수
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue); // 입력 필드의 값을 상태로 관리
  const onChange = (event) => {
    const {
      target: { value }, // 이벤트 객체에서 새로운 입력 값을 추출
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value); // validator 함수가 있을 경우 값의 유효성을 검사
    }
    if (willUpdate) {
      setValue(value); // 유효성 검사를 통과하면 입력 값을 업데이트
    }
  };
  return { value, onChange }; // 입력 값과 onChange 핸들러 반환
};

// useTitle Hook: 문서의 제목(title)을 관리하는 커스텀 Hook
// initialTitle: 초기 문서 제목
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle); // 문서의 제목을 상태로 관리
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); // HTML의 title 요소를 선택
    htmlTitle.innerText = title; // 상태로 관리되는 title 값으로 문서 제목 업데이트
  };
  useEffect(updateTitle, [title]); // title 상태가 변경될 때마다 문서 제목 업데이트
  return setTitle; // 제목을 변경할 수 있는 함수 반환
};

// useClick Hook: 특정 DOM 요소에 클릭 이벤트 리스너를 추가하는 커스텀 Hook
// onClick: 클릭 시 실행할 함수
export const useClick = (onClick) => {
  const element = useRef(); // 클릭 이벤트를 추가할 DOM 요소를 참조하기 위해 useRef 사용

  useEffect(() => {
    if (typeof onClick !== "function") {
      return; // onClick이 함수가 아니면 아무 작업도 하지 않음
    }

    const currentElement = element.current; // element.current 값을 변수에 저장

    if (currentElement) {
      currentElement.addEventListener("click", onClick); // 클릭 이벤트 리스너 추가
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick); // 컴포넌트가 언마운트되면 이벤트 리스너 제거
      }
    };
  }, [onClick]); // onClick이 바뀔 때마다 effect 재실행

  return typeof onClick !== "function" ? undefined : element; // onClick이 함수면 ref 반환
};

// useConfirm Hook: 확인 메시지를 띄우고 사용자의 결정을 처리하는 커스텀 Hook
// message: 확인 메시지
// onConfirm: 확인 시 실행할 함수
// onCancel: 취소 시 실행할 함수
export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function" || typeof onCancel !== "function") {
    return; // onConfirm 또는 onCancel이 함수가 아니면 아무 작업도 하지 않음
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm(); // 확인 버튼을 클릭하면 onConfirm 실행
    } else {
      onCancel(); // 취소 버튼을 클릭하면 onCancel 실행
    }
  };
  return confirmAction; // confirmAction 함수를 반환하여 실행할 수 있도록 함
};

// usePreventLeave Hook: 사용자가 페이지를 떠나려고 할 때 경고 메시지를 띄우는 커스텀 Hook
export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault(); // 브라우저에서 페이지 이탈을 방지
    event.returnValue = ""; // 표준에 맞추기 위해 빈 문자열 할당
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener); // beforeunload 이벤트에 리스너 추가
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener); // beforeunload 이벤트 리스너 제거

  return { enablePrevent, disablePrevent }; // 이탈 방지 기능 활성화 및 비활성화 함수 반환
};

// useBeforeLeave Hook: 사용자가 페이지를 떠나려고 할 때 특정 함수를 실행하는 커스텀 Hook
// onBefore: 사용자가 페이지를 떠나려고 할 때 실행할 함수
export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return; // onBefore가 함수가 아니면 아무 작업도 하지 않음
    }

    const handle = (event) => {
      const { clientY } = event;

      if (clientY <= 0) {
        onBefore(); // 마우스가 브라우저의 상단을 벗어날 때 onBefore 함수 실행
      }
    };

    document.addEventListener("mouseleave", handle); // mouseleave 이벤트 리스너 추가
    return () => document.removeEventListener("mouseleave", handle); // 컴포넌트 언마운트 시 이벤트 리스너 제거
  }, [onBefore]); // onBefore가 변경될 때마다 effect 재실행
};

import { useCallback, useEffect, useRef, useState } from "react";

// useTabs Hook: 탭 UI를 관리하는 커스텀 Hook
// - initialTab: 초기 선택된 탭의 인덱스
// - allTabs: 모든 탭의 정보를 담고 있는 배열
// - currentItem: 현재 선택된 탭의 내용 반환
// - changeItem: 탭을 변경하는 함수 반환
export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab); // 현재 선택된 탭의 인덱스 상태 관리

  // allTabs가 유효하지 않거나 배열이 아니면 아무것도 반환하지 않음
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex], // 현재 선택된 탭의 데이터 반환
    changeItem: setCurrentIndex, // 탭을 변경하는 함수
  };
};

// useInput Hook: 입력 값을 관리하고 유효성 검사를 제공하는 커스텀 Hook
// - initialValue: 입력 필드의 초기 값
// - validator: 유효성 검사 함수
// - value: 입력 필드의 값
// - onChange: 값이 변경될 때 실행되는 함수, 유효성 검사를 통과하면 값이 업데이트 됨
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue); // 입력 값을 상태로 관리

  const onChange = (event) => {
    const {
      target: { value },
    } = event; // 입력 필드의 새로운 값

    let willUpdate = true;

    // validator 함수가 있으면 유효성 검사 실행
    if (typeof validator === "function") {
      willUpdate = validator(value); // 유효성을 통과하면 true 반환
    }

    // 유효성을 통과하면 입력 값을 업데이트
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange }; // 입력 값과 onChange 핸들러 반환
};

// useTitle Hook: 문서의 제목을 관리하는 커스텀 Hook
// - initialTitle: 초기 문서 제목
// - setTitle: 문서 제목을 변경하는 함수 반환
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle); // 문서 제목 상태 관리

  // 제목을 업데이트하는 함수
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); // HTML의 <title> 태그 선택
    htmlTitle.innerText = title; // 현재 상태에 있는 제목으로 문서 제목 업데이트
  };

  // title 상태가 변경될 때마다 문서 제목 업데이트
  useEffect(updateTitle, [title]);

  return setTitle; // 제목을 변경할 수 있는 함수 반환
};

// useClick Hook: 특정 DOM 요소에 클릭 이벤트를 추가하는 커스텀 Hook
// - onClick: 클릭 시 실행할 함수
// - element: 클릭 이벤트를 추가할 DOM 요소를 참조하는 ref 반환
export const useClick = (onClick) => {
  const element = useRef(); // DOM 요소를 참조하기 위한 useRef

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }

    const currentElement = element.current; // 참조한 DOM 요소 가져오기

    // 클릭 이벤트 리스너 추가
    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]); // onClick이 변경될 때마다 effect 재실행

  return element; // DOM 요소의 ref 반환
};

// useConfirm Hook: 확인 메시지를 띄우고 사용자의 결정을 처리하는 커스텀 Hook
// - message: 확인 메시지 내용
// - onConfirm: 확인 시 실행할 함수
// - onCancel: 취소 시 실행할 함수
// - confirmAction: 사용자가 확인 또는 취소를 선택했을 때 해당 함수 실행
export const useConfirm = (message = "", onConfirm, onCancel) => {
  // onConfirm 또는 onCancel이 함수가 아니면 아무 작업도 하지 않음
  if (typeof onConfirm !== "function" || typeof onCancel !== "function") {
    return;
  }

  // 확인 창을 띄우고 사용자의 선택에 따라 실행되는 함수
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm(); // 확인 시 onConfirm 실행
    } else {
      onCancel(); // 취소 시 onCancel 실행
    }
  };

  return confirmAction; // confirmAction 함수 반환
};

// usePreventLeave Hook: 페이지를 떠나기 전에 경고 메시지를 띄우는 커스텀 Hook
// - enablePrevent: 페이지 이탈 방지 활성화 함수
// - disablePrevent: 페이지 이탈 방지 비활성화 함수
export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault(); // 기본 동작 방지
    event.returnValue = ""; // 경고 메시지 띄우기 위한 설정
  };

  // beforeunload 이벤트로 페이지 이탈 방지 활성화
  const enablePrevent = () => window.addEventListener("beforeunload", listener);

  // beforeunload 이벤트 제거로 페이지 이탈 방지 비활성화
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent }; // 이탈 방지 활성화 및 비활성화 함수 반환
};

// useBeforeLeave Hook: 사용자가 페이지를 떠나기 직전에 특정 함수를 실행하는 커스텀 Hook
// - onBefore: 사용자가 페이지를 떠나려고 할 때 실행할 함수
export const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    // onBefore가 함수가 아니면 아무 작업도 하지 않음
    if (typeof onBefore !== "function") {
      return;
    }

    const handle = (event) => {
      const { clientY } = event;

      // 마우스가 페이지의 상단을 벗어날 때 실행
      if (clientY <= 0) {
        onBefore(); // onBefore 함수 실행
      }
    };

    document.addEventListener("mouseleave", handle); // 페이지 이탈 시 이벤트 리스너 추가

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => document.removeEventListener("mouseleave", handle);
  }, [onBefore]); // onBefore가 변경될 때마다 effect 재실행
};

// useFadeIn Hook: 특정 DOM 요소에 페이드 인 효과를 적용하는 커스텀 Hook
// - duration: 페이드 인 효과 지속 시간(초)
// - delay: 페이드 인 효과 시작 전 지연 시간(초)
// - ref: 페이드 인 효과를 적용할 DOM 요소 참조
// - style: 초기에 opacity 0으로 설정, 페이드 인 효과로 1로 변경됨
export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef(); // DOM 요소 참조

  useEffect(() => {
    // duration과 delay가 유효한 숫자가 아니면 아무 작업도 하지 않음
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }

    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1; // 페이드 인 효과로 투명도를 1로 변경
    }
  }, [duration, delay]); // duration과 delay가 변경될 때마다 effect 재실행

  return { ref: element, style: { opacity: 0 } }; // ref와 초기 스타일 반환
};

// useNetwork Hook: 네트워크 상태 변경을 감지하고 상태를 업데이트하는 커스텀 Hook
// - onChange: 네트워크 상태 변경 시 호출되는 콜백 함수
// - status: 현재 네트워크 상태(온라인 또는 오프라인)를 반환
export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); // 네트워크 상태 관리

  const handleChange = useCallback(() => {
    // onChange가 함수이면 네트워크 상태 변경 시 호출
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine); // 네트워크 상태 업데이트
  }, [onChange]); // onChange가 변경될 때마다 handleChange 재정의

  useEffect(() => {
    window.addEventListener("online", handleChange); // 온라인 상태 이벤트 추가
    window.addEventListener("offline", handleChange); // 오프라인 상태 이벤트 추가

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [handleChange]); // handleChange가 변경될 때마다 effect 재실행

  return status; // 네트워크 상태 반환
};

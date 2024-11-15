import { useMemo, useRef, useState } from "react";

// const HookRef: React.FC = () => {
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   const focusInput = () => {
//     inputRef.current?.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text"></input>
//       <button onClick={focusInput}>포커스 설정</button>
//     </div>
//   );
// };

// export default HookRef;

// useMemo: 복잡한 계산(계산에 시간이 3시간 이상 걸린다고 할 때)을 포함하는 값이 존재할 때, 해당 컴포넌트의 계산에 대한 값을 기록해놓고, 렌더링될 때 계산된 동일한 값만 전달하기 위해 사용(단, 결과값(= 스테이트가 변경)이 바뀌게 될 때는 재계산)
// 즉, 불필요한 계산을 방지하기 위해서 사용
const HookMemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<Boolean>(true);

  const excel = useMemo(() => {
    console.log("계산중...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>계산 결과: {excel}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count 증가
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        토글
      </button>
      {show && <p>잘 보임</p>}
    </div>
  );
};

// count에 변화가 없다면 결과값을 기록해두고 재계산 없이 전달하지만,
// count의 값이 변한 경우에는 재계산 실행

export default HookMemo;

import { useCallback, useMemo, useRef, useState } from "react";

//  export const HookRef: React.FC = () => {
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

// useMemo: 복잡한 계산(계산에 시간이 3시간 이상 걸린다고 할 때)을 포함하는 값이 존재할 때, 해당 컴포넌트의 계산에 대한 값을 기록해놓고, 렌더링될 때 계산된 동일한 값만 전달하기 위해 사용(단, 결과값(= 스테이트가 변경)이 바뀌게 될 때는 재계산)
// 즉, 불필요한 계산을 방지하기 위해서 사용
// export const HookMemo: React.FC = () => {
//   const [count, setCount] = useState<number>(0);
//   const [show, setShow] = useState<Boolean>(true);

//   const excel = useMemo(() => {
//     console.log("계산중...");
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <p>계산 결과: {excel}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         count 증가
//       </button>
//       <button
//         onClick={() => {
//           setShow(!show);
//         }}
//       >
//         토글
//       </button>
//       {show && <p>잘 보임</p>}
//     </div>
//   );
// };

// count에 변화가 없다면 결과값을 기록해두고 재계산 없이 전달하지만,
// count의 값이 변한 경우에는 재계산 실행

// useCallback : 함수를 기준으로 Memorisation하는 것 => 결국 useMemo와 동일한 결과값을 반환하지만, useMemo가 기록하는 것이 변수라면, useCallback은 함수
// useMemo, useCallback의 공통점은 불필요한 연산을 반복하는 것을 방지하고 성능을 최적화하는 것
export const HookCallback: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((preCount) => preCount + 1);
  }, []);
  // 의존성 배열에 빈 배열을 넣어주면 useEffect 와 동일하게 첫 진입시에 함수 생성 > 이후 재진입을 하더라도 함수를 재생성하지 않음
  // 페이지의 재렌더링이 자주 일어나는 경우 useCallback을 사용하지만, 무조건 사용한다고 좋지는 않음.
  // Memorisarion 자체가 오버 헤드가 발생하여 사용이 오히려 독이 될 수 있기에 사용 상황을 잘 판단하여 사용해야함.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
};

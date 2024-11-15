import { Component, ReactNode, useEffect, useState } from "react";

interface LifeCycleState {
  count: number;
}

// 컴포넌트의 생명주기(마운트, 언마운트)
// class PD extends Component<{}, LifeCycleState> {
//   constructor(props: {}) {
//     super(props); // 부모 생성자(부모 컴포넌트)
//     this.state = { count: 0 };
//   }

// componentDidMount(): void {
//   console.log("마운트");
// }
// componentDidUpdate(
//   prevProps: Readonly<{}>,
//   prevState: Readonly<{}>,
//   snapshot?: any
// ): void {
//   console.log("업데이트");
// }
// componentWillUnmount(): void {
//   console.log("언마운트");
// }

// render(): ReactNode {
//   return (
//     <div>
//       <p>Count: {this.state.count}</p>
//       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//         증가
//       </button>
//     </div>
//   );
//   }
// }

// 함수형 컴포넌트
// useEffect(() => {
//   // 실행 코드
//   return () => {
//     // 콜백함수(= 클린업 함수)
//   };
// }, [의존성배열]);

// useEffect(() => {
//   // 실행코드: 컴포넌트의 렌더링이 모두 완료된 시점에 실행
//   return () => {
//     // 클린업 함수: 컴포넌트의 언마운트 (정리 작업)
//   }
// }, [state])  // state 값이 비어있으면 처음 한번만 실행되고, state 값이 존재할 땐, 업데이트 될 때마다 실행됨

const PD: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    };
  }, []);

  useEffect(() => {
    console.log("업데이트");
  }, [count]);

  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button> */}
      <h1>타이머: 1초</h1>
    </div>
  );
};

export default PD;

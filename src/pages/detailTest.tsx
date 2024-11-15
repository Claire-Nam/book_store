import { Component, ReactNode, useEffect } from "react";

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
useEffect(() => {
  // 실행 코드
  return () => {
    // 콜백함수(= 클린업 함수)
  };
}, []);

export default PD;

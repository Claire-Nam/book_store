import { Component, ReactNode, useEffect, useState } from "react";

// interface LifeCycleState {
//   count: number;
// }

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
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     // 타이머
  //     const interval = setInterval(() => {
  //       setCount((preCount) => preCount + 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(interval);
  //       console.log("언마운트");
  //     };
  //   }, []);

  //   return (
  //     <div>
  //       {/* <p>Count: {count}</p>
  //       <button onClick={() => setCount(count + 1)}>증가</button> */}
  //       <h1>타이머: {count}초</h1>
  //     </div>
  //   );

  // API 요청
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await res.json();
        setBreeds(data);
      } catch (err) {
        console.log("에러: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>강아지 종류</h2>
      <ul>
        {breeds.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// 의존성 배열을 통한 제어
// [] 는 마운트 될 때 한번만 실행 > useEffect를 사용하지 않으면 재렌더링 할때마다 타이머 재생성
// cleanup 함수를 통해 정리 > 컴포넌트가 언마운트 되는 시점에 메모리에서 계속 동작하지 않도록 타이머 해제

export default PD;

// setCount(preCount => preCount + 1);
// setCount(function(preCount) {
//   return preCount + 1;
// });
// preCount: 현재까지 누적된 카운트의 값

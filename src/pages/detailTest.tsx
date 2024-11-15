import { Component, ReactNode, useEffect, useState } from "react";

const PD: React.FC = () => {
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

export default PD;

// async - await
// 자바스크립트의 비동기 방식을 개선하기 위해 도입됨
// async: 함수앞에 기재(익명함수) > 자동으로 promise를 반환
// await: 프로미스가 완료될 때까지 기다렸다가 완료된 후에 리턴, 및 다음 동작을 실행
// await으로 fetch 데이터가 올 때까지 기다렸다가 fetch()가 완료되면 res.json()을 통해 json 형식으로 데이터값을 리턴하여 setBreeds가 api 데이터 객체를 받게됨
// 

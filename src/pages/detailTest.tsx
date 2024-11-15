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

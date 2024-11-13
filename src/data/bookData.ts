export interface Book {
  id: number;
  title: string;
  content: string;
  price: number;
  author: string;
  star: string;
}

const bookDatas: Book[] = [
  {
    id: 4,
    title: "모던 자바스크립트 & Node.JS",
    content: "백엔드 입문서입니다.",
    price: 34000,
    author: "이창현",
    star: "*****",
  },
  {
    id: 5,
    title: "내 생에 첫번째 코딩 앱 인벤터",
    content: "코딩 입문서입니다.",
    price: 22000,
    author: "이창현",
    star: "*****",
  },
  {
    id: 6,
    title: "C# 프로그래밍 정석",
    content: "닷넷 입문서입니다.",
    price: 26000,
    author: "이창현",
    star: "*****",
  },
];

export default bookDatas;

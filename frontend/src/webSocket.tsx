// import React, { useEffect, useState } from 'react';
// import WebSocket from 'ws';

// type WsData = {
//   type: string;
//   pageCnt: number;
//   userName?: string;
//   fairyTale?: string;
//   gender?: string;
//   age?: number;
//   language?: string;
//   choice?: number;
//   koContent?: string;
//   enContent?: string;
// };

// const WebsocketTest: React.FC = () => {
//   const [socket, setSocket] = useState<WebSocket | null>(null);
//   const [message, setMessage] = useState<string>('');

//   const websocket = (data: WsData): void => {
//     const ws = new WebSocket('ws://localhost:8000/');

//     ws.onopen = () => {
//       setSocket(ws);
//       ws.send(JSON.stringify(data));
//     };

//     ws.onmessage = (event) => {
//       // Buffer를 문자열로 변환
//       const data = JSON.parse(event.data.toString());
//       console.log('Message from server:', data.message);
//       const message: string = data.message;
//       setMessage((m) => m + message);
//     };

//     ws.onclose = () => {
//       setSocket(null);
//     };
//   };

//   const tempdata: WsData = {
//     type: 'ing',
//     pageCnt: 1,
//     choice: 1,
//     koContent: '나중에 state값 들어갈듯',
//     enContent: 'later state값 들어갈듯',
//   };

//   useEffect(() => {
//     websocket(tempdata);
//   });

//   //스트림 데이터 받아오는거 출력
//   console.log(message);

//   //나중에 선택한 스토리 보낼 때
//   socket?.send(
//     JSON.stringify({
//       type: 'ing',
//       pageCnt: 1,
//       choice: '1',
//       koContent: '나중에 state값 들어갈듯',
//       enContent: 'later state값 들어갈듯',
//     })
//   );

//   return <div>{message}</div>;
// };

// export default WebsocketTest;

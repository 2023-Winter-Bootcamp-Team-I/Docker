// WebSocketProvider.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type WsData = {
  type: string;
  pageCnt: number;
  userName?: string;
  fairyTale?: string;
  gender?: string;
  age?: string;
  language?: string;
  choice?: number;
  koContent?: string;
  enContent?: string;
};

interface WebSocketContextProps {
  socket: WebSocket | null;
  send: (data: WsData) => void;
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // const ws = new WebSocket('ws://localhost:8000/ws/books/');
    const ws = new WebSocket(
      import.meta.env.MODE !== 'production' ? 'ws://localhost:8000/ws/books/' : `wss://${window.location.host}/ws/books/`
    );

    ws.onopen = () => {
      setSocket(ws);
    };

    // return () => {
    //   if (ws.readyState === WebSocket.OPEN) {
    //     ws.close();
    //   }
    // };
  }, []);

  const send = (data: WsData) => {
    if (socket) {
      socket.send(JSON.stringify(data));
    }
  };

  const contextValue: WebSocketContextProps = {
    socket,
    send,
  };

  return <WebSocketContext.Provider value={contextValue}>{children}</WebSocketContext.Provider>;
};

export const useWebSocket = (): WebSocketContextProps => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

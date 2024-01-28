import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import BackgroundTemplate from '@/components/BackgroundTemplate';
import { WebSocketProvider } from './websocket/WebSocketProvider';

function App() {
  return (
    <WebSocketProvider>
      <RecoilRoot>
        <BackgroundTemplate>
          <Outlet />
        </BackgroundTemplate>
      </RecoilRoot>
    </WebSocketProvider>
  );
}

export default App;

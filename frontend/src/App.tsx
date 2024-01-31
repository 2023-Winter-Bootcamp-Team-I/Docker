import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import BackgroundTemplate from '@/components/BackgroundTemplate';
import { WebSocketProvider } from './websocket/WebSocketProvider';
// import LoadingPage from './pages/LoadingPage';
// import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <WebSocketProvider>
      <RecoilRoot>
        <BackgroundTemplate>
          <Outlet />
        </BackgroundTemplate>
        {/* <Routes>
          <Route path="/loading" element={<LoadingPage />} />
        </Routes> */}
      </RecoilRoot>
    </WebSocketProvider>
  );
}

export default App;

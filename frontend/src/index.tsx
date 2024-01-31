import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './utils/Routes.tsx';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
// ReactDOM.createRoot(document.getElementById('root')!).render(<BrowserRouter>{router}</BrowserRouter>);

import CreateInfoPage from '@/pages/CreateInfoPage';
import App from '@/App';
import FrontCoverPage from '@/pages/FrontCoverPage';
import BackCoverPage from '@/pages/BackCoverPage';
import LibraryPage from '@/pages/LibraryPage';
import MainPage from '@/pages/MainPage';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import CreateBookPage from '@/pages/CreateBookPage';
import StoryChoiceModal from '@/pages/StoryChoiceModal';
import LogInModal from '@/components/LogInModal';
import ShareModal from '@/components/ShareModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'createinfopage',
        element: <CreateInfoPage />,
      },
      {
        path: 'createbookpage',
        element: <CreateBookPage />,
      },
      {
        path: 'storychoicemodal',
        element: <StoryChoiceModal />,
      },
      {
        path: 'frontcover',
        element: <FrontCoverPage />,
      },
      {
        path: 'backcover',
        element: <BackCoverPage />,
      },
      {
        path: 'library',
        element: <LibraryPage />,
      },
      {
        path: 'loginmodal',
        element: <LogInModal />,
      },
      {
        path: 'sharemodal',
        element: <ShareModal />,
      },
    ],
  },

  // {
  //     path: "*",
  //     element: <NotfoundPage />,
  // },
]);

export default router;

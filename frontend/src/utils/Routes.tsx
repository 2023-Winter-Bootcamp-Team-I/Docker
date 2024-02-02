import CreateInfoPage from '@/pages/CreateInfoPage';
import App from '@/App';
import FrontCoverPage from '@/pages/FrontCoverPage';
import BackCoverPage from '@/pages/BackCoverPage';
import LibraryPage from '@/pages/LibraryPage';
// import MainPage from '@/pages/MainPage';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import CreateBookPage from '@/pages/CreateBookPage';
import StoryChoiceModal from '@/pages/StoryChoiceModal';
import LogInModal from '@/components/LogInModal';
import CreateTitleModal from '@/components/CreateTitleModal';
import ShareModal from '@/components/ShareModal';
import ReadBookPage from '@/pages/ReadBookPage';
import LoadingPage from '@/pages/LoadingPage';
import CreationStartPage from '@/pages/CreationStartPage';
import CreationFinishPage from '@/pages/CreationFinishPage';
import AboutUsPage from '@/pages/AboutUsPage';
import ServicePage from '@/pages/ServicePage';
import SliderPage from '@/pages/SliderPage';
import BookGuidePage from '@/pages/BookGuidePage';
import HomePage from '@/pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
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
        path: 'readbookpage',
        element: <ReadBookPage />,
      },
      {
        path: 'storychoicemodal',
        element: <StoryChoiceModal />,
      },
      {
        path: 'mybook/:book_id',
        element: <FrontCoverPage />,
      },
      {
        path: 'backcover',
        element: <BackCoverPage />,
      },
      {
        path: 'creationstart',
        element: <CreationStartPage />,
      },
      {
        path: 'creationfinish',
        element: <CreationFinishPage />,
      },
      {
        path: 'library',
        element: <LibraryPage />,
      },
      {
        path: 'title',
        element: <CreateTitleModal title={''} />,
      },
      {
        path: 'loginmodal',
        element: (
          <LogInModal
            closeModal={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        ),
      },
      {
        path: 'sharemodal',
        element: (
          <ShareModal
            closeModal={function (): void {
              throw new Error('Function not implemented.');
            }}
            bookId={0}
          />
        ),
      },
      {
        path: '/loading',
        element: <LoadingPage />,
      },
    ],
  },

  {
    path: '/aboutus',
    element: <AboutUsPage />,
  },
  {
    path: '/service',
    element: <ServicePage />,
  },
  {
    path: '/slide',
    element: <SliderPage />,
  },
  {
    path: '/bookguide',
    element: <BookGuidePage />,
  },

  // {
  //     path: "*",
  //     element: <NotfoundPage />,
  // },
]);

export default router;

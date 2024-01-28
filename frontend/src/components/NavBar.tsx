import heartImg from '@/assets/images/heart.svg';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate('/');
  };
  const navigateToLibraryPage = () => {
    navigate('/library');
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={heartImg} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <button
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                  onClick={navigateToHomePage}
                >
                  Home
                </button>
                <button
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  onClick={navigateToLibraryPage}
                >
                  Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

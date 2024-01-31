import homeicon from '@/assets/images/Library/Home Page.svg';
import translation from '@/assets/images/Library/Translation.svg';
import addbook from '@/assets/images/Library/addbook.svg';
import { useState, useEffect } from 'react';
import { Book, getBooks, deleteBook } from '@/api/books';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userIDState, userLanguage } from '@/states/atom';
import ShareModal from '../components/ShareModal';
import { Link, useNavigate } from 'react-router-dom';
import { LuShare } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

const LibraryPage = () => {
  const [hovered, setHovered] = useState<{ [key: number]: boolean }>({});
  const [books, setBooks] = useState<Book[]>([]);
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가
  const userID = useRecoilValue(userIDState);
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);
  const [currentBookId, setCurrentBookId] = useState<number>(0);
  const navigate = useNavigate();

  const setUserID = useSetRecoilState(userIDState);
  const { t } = useTranslation();

  const handleLanguageChange = (newLanguage: string | undefined) => {
    setUserLang(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const handleLogout = () => {
    setUserID(null);
  };

  const navigateToPage = (book_id: number) => {
    navigate(`/mybook/${book_id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await getBooks(userID);
        setBooks(fetchedBooks);

        const initialHoveredState: { [key: number]: boolean } = {};
        fetchedBooks.forEach((book) => {
          initialHoveredState[book.book_id] = false;
        });
        setHovered(initialHoveredState);
      } catch (error) {
        console.error('Error fetching books:');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setUserLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, setUserLang]);

  const handleMouseEnter = (bookId: number) => {
    setHovered((prevHovered) => ({ ...prevHovered, [bookId]: true }));
  };

  const handleMouseLeave = (bookId: number) => {
    setHovered((prevHovered) => ({ ...prevHovered, [bookId]: false }));
  };

  const handleDeleteBook = (bookId: number) => {
    deleteBook(bookId);

    const updatedBooks = books.filter((book) => book.book_id !== bookId);
    setBooks(updatedBooks);
  };

  const openModal = (bookId: number) => {
    setCurrentBookId(bookId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
        <div className=" shadow-[inset_0px_4px_15px_0px_rgba(0,0,0,0.25)] w-screen h-40 bg-mainBlue absolute top-[9rem] z-20" />
        <div className="w-[1200px] mx-auto mt-8">
          <div className="flex flex-row justify-between mb-1">
            <Link to="/">
              <button>
                <img src={homeicon} className="h-[6.5rem] w-[8.5rem] -mt-6 -ml-8 hover:scale-125" />
              </button>
            </Link>
            <div className="flex flex-row gap-8 font-[Jua] text-[1.7rem] -mr-8 ">
              <button
                onClick={() => handleLanguageChange(selectedLanguage === 'ko' ? 'en' : 'ko')}
                className="flex gap-2 w-[11rem] h-[3.5rem] bg-white pt-1 pl-1 rounded-3xl border-[#d1d1d1] border-b-8 border-r-4 hover:scale-110"
              >
                <img src={translation} className="pl-2 -mt-0.5 pt" />
                <p className="text-[#1D92FF] mt-2">{t('languageSelection')}</p>
              </button>
              <Link to="/">
                <button
                  className="w-[11rem] h-[3.5rem] bg-mainBlue pt-2 pl-1 text-white rounded-3xl border-[#4695D9] border-b-8 border-r-4 hover:scale-110"
                  onClick={handleLogout}
                >
                  {t('logout')}
                </button>
              </Link>
            </div>
          </div>
          <div className="relative z-30 ">
            <div className="font-dongle text-[120px] text-[#F1F1F1] ml-8 mt-12 drop-shadow-[2px_3px_0px_rgba(0,0,0,0.35)]">
              <div>{t('library')}</div>
            </div>
            <div className="flex overflow-x-auto overflow-y-hidden m-12 gap-16 scrollbar-thumb-[#5da6ff] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-white hover:scrollbar-thumb-[#37caff] scrollbar">
              {books
                .slice()
                .reverse()
                .map((book) => (
                  <div className="flex-col w-64 h-[21rem] bg-[#f2f2f2] bg-opacity-65 rounded-2xl mt-4 mb-10 hover:bg-[#fbfbfb] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.35)]">
                    <div className="w-64 h-64">
                      <button onClick={() => navigateToPage(book.book_id)}>
                        <img src={book.image_url} className="rounded-t-2xl" />
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-between px-4">
                      <button onClick={() => navigateToPage(book.book_id)}>
                        <div className="text-[#002050] font-dongle text-[2.2rem] py-4 ">{book.title}</div>
                      </button>
                      <div className="flex flex-row">
                        <div>
                          <button>
                            <LuShare
                              className="w-6 h-5 mt-0.5 text-[#797979] transform transition duration-300 ease-in-out hover:text-[#002050]"
                              alt="Share Icon"
                              onClick={() => openModal(book.book_id)}
                            />
                          </button>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke={hovered[book.book_id] ? '#ee0202' : '#797979'}
                          className="w-6 h-6 ml-[1rem] cursor-pointer "
                          onMouseEnter={() => handleMouseEnter(book.book_id)}
                          onMouseLeave={() => handleMouseLeave(book.book_id)}
                          onClick={() => handleDeleteBook(book.book_id)}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                    {showModal && <ShareModal closeModal={closeModal} bookId={currentBookId} />}
                  </div>
                ))}
            </div>
          </div>
          <div className="absolute bottom-10 right-10 flex items-end justify-end w-[7rem] h-[7rem] rounded-full bg-[#309CFF] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.35)] hover:scale-125 transition duration-300">
            <div className="mb-3 mr-1">
              <Link to="/bookguide">
                <img src={addbook} alt="Add Book Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LibraryPage;

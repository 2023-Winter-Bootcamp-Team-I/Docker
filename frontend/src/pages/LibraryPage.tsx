import homeicon from '@/assets/images/Library/Home Page.svg';
import { BsTranslate } from 'react-icons/bs';
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
import line from '@/assets/images/Library/line.png';
import jelly1 from '@/assets/images/Background/jelly-beans 1.svg';
import jelly4 from '@/assets/images/Background/jelly-beans 4.svg';
import jelly6 from '@/assets/images/Background/jelly-beans 6.svg';

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
      <div className="flex flex-row w-screen h-screen bg-mainColor bg-opacity-30 relative z-10">
        <img src={jelly1} className="absolute z-10 top-0 left-12 w-40 h-24 rotate-0" />
        <img src={jelly4} className="absolute z-10 top-80 left-0 w-32 h-36" />
        <img src={jelly6} className="absolute z-10 bottom-0 left-12 w-56 h-36" />
        <img src={line} className="flex absolute left-0 top-0 h-[100%] z-0" />
        <div className="flex w-[12%] h-screen bg-[#e0edff] bg-opacity-40 absolute z-10" />
        {/* <div className=" shadow-[inset_0px_4px_15px_0px_rgba(0,0,0,0.25)] w-screen h-40 bg-mainBlue absolute top-[9rem] z-20" /> */}
        <div className="w-[1200px] 2xl:w-[1350px] mx-auto mt-8">
          <div className="flex flex-row justify-between mb-1">
            <Link to="/">
              <button>
                <img
                  src={homeicon}
                  className="h-[6.5rem] w-[6.5rem] ml-44 z-50 right-72 -mt-6 relative hover:scale-125"
                />
              </button>
            </Link>
            <div className="flex flex-row gap-8 font-[LM] text-[1.7rem]  relative ">
              <button
                onClick={() => handleLanguageChange(selectedLanguage === 'ko' ? 'en' : 'ko')}
                className="flex gap-2 w-[9rem] h-[3rem] bg-[white]  pl-1 rounded-3xl font-[LM] border-[#d1d1d1] border-b-4 border-r-4 hover:scale-110"
              >
                <BsTranslate className="w-[3rem] pl-3 mt-2 pt text-[#305eb3]" />
                <p className="text-[#397acf] mt-3 text-[1.3rem]">{t('languageSelection')}</p>
              </button>
              <Link to="/">
                <button
                  className="w-[9rem] h-[3rem] bg-[#397acf] pt-1 pl-1 text-[1.3rem] font-[LM] text-white rounded-3xl border-[#4071a8] border-b-4 border-r-4 hover:scale-110"
                  onClick={handleLogout}
                >
                  {t('logout')}
                </button>
              </Link>
            </div>
          </div>
          <div className="relative z-30 ">
            <div className="font-[LM] text-[60px] text-[#305eb3] ml-8 mt-12 drop-shadow-[1px_1px_0px_rgba(0,16,60,0.35)]">
              <div>{t('library')}</div>
            </div>
            <div className="flex overflow-x-auto overflow-y-auto m-12 gap-16">
              {books
                .slice()
                .reverse()
                .map((book) => (
                  <div className="flex-col w-64 h-[21rem] bg-[#fcfcfc] bg-opacity-95 rounded-2xl mt-4 mb-10 hover:bg-[#ffffff] hover:shadow-[3px_3px_1px_rgba(0,0,0,0.35)]">
                    <div className="w-64 h-64">
                      <button onClick={() => navigateToPage(book.book_id)}>
                        <img src={book.image_url} className="rounded-t-2xl" />
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-between px-4">
                      <button onClick={() => navigateToPage(book.book_id)}>
                        <div className="text-[#002050] font-[PR2] text-[1.5rem] py-4 ">{book.title}</div>
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
                  </div>
                ))}
            </div>
          </div>

          <div className="absolute bottom-16 right-16 flex items-end justify-end w-[8rem] h-[8rem] rounded-full bg-[#ffffff] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.35)] hover:scale-125 transition duration-300">
            <div className="w-[70%] mb-5 mr-2">
              <Link to="/bookguide">
                <img src={addbook} alt="Add Book Icon" />
              </Link>
            </div>
          </div>
        </div>
        {showModal && <ShareModal closeModal={closeModal} bookId={currentBookId} />}
      </div>
    </>
  );
};
export default LibraryPage;

import { useState } from 'react';
import './FolderTabs.css';
import Modal from '../common/Modal/Modal';

function FolderTabs({ tabs, selectedTab, setSelectedTab, isLoading, isError }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = content => {
    setOpenModal(true);
    setModalContent(content);
  };

  const handleaddClick = () => {
    const content = {
      title: '폴더 추가 ',
      hasInput: true,
      placeHolder: '내용 입력',
      hasSns: false,
      folderAddBtn: true,
      buttonName: '추가하기',
    };

    handleOpenModal(content);
  };

  const handleTabClick = id => {
    setSelectedTab(id);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">로딩중입니다.</div>
      ) : (
        <div className="sorting-area">
          <ul className="sorting-tab">
            <li className="list">
              <button className={selectedTab === null ? 'clicked' : ''} onClick={() => handleTabClick(null)}>
                전체
              </button>
            </li>

            {tabs?.map(tab => {
              return (
                <li key={tab.id} className="list">
                  <button className={selectedTab === tab.id ? 'clicked' : ''} onClick={() => handleTabClick(tab.id)}>
                    {tab.name}
                  </button>
                </li>
              );
            })}
            {isError?.message && <span className="error">{isError.message}</span>}
          </ul>
          <button onClick={handleaddClick}>
            <img className="more-btn" src={process.env.PUBLIC_URL + '/images/add.png'} alt="더보기" />
          </button>
        </div>
      )}
      {openModal && <Modal modalContent={modalContent} closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default FolderTabs;

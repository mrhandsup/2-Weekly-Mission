import { useState } from 'react';
import Modal from '../common/Modal/Modal';

function KebabMenu({ linkUrl, tabs }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = content => {
    setOpenModal(true);
    setModalContent(content);
  };

  const handleRemoveClick = () => {
    const content = {
      title: '링크 삭제',
      hasInput: false,
      hasSns: false,
      linkRemoveBtn: true,
      buttonName: '삭제하기',
      linkUrl,
    };

    handleOpenModal(content);
  };

  const handleAddClick = () => {
    const content = {
      title: '폴더에 추가',
      hasInput: false,
      hasSns: false,
      hasTabList: true,
      linkUrl,
      tabs,
      addToFolderBtn: true,
      buttonName: '추가하기',
    };

    handleOpenModal(content);
  };
  return (
    <>
      <div className="kebab-menu-list">
        <button className="btn" onClick={handleRemoveClick}>
          <span>삭제하기</span>
        </button>
        <button className="btn" onClick={handleAddClick}>
          <span>폴더에 추가</span>
        </button>
      </div>

      {openModal && <Modal modalContent={modalContent} closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default KebabMenu;

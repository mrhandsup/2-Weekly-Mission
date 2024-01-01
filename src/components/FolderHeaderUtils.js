import { useState } from 'react';
import './FolderHeaderUtils.css';
import Modal from '../common/Modal';

function FolderHeaderUtils({ folderName }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = content => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleRenameClick = () => {
    const content = {
      title: '폴더 이름 변경',
      hasInput: true,
      buttonRole: '변경하기',
    };

    handleOpenModal(content);
  };
  const handleRemoveClick = () => {
    const content = {
      title: '폴더 삭제',
      hasInput: false,
      folderName,
      backgroundColor: '#FF5B56',
      buttonRole: '삭제하기',
    };

    handleOpenModal(content);
  };

  return (
    <>
      <div className="utils">
        <div className="share">
          <button>
            <img src={process.env.PUBLIC_URL + '/images/share.png'} alt="공유" />
            <span className="text">공유</span>
          </button>
        </div>
        <div className="rename">
          <button onClick={handleRenameClick}>
            <img src={process.env.PUBLIC_URL + '/images/pen.png'} alt="이름 변경" />
            <span className="text">이름 변경</span>
          </button>
        </div>
        <div className="remove">
          <button onClick={handleRemoveClick}>
            <img src={process.env.PUBLIC_URL + '/images/remove.png'} alt="삭제" />
            <span className="text">삭제</span>
          </button>
        </div>
      </div>

      {openModal && <Modal modalContent={modalContent} closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default FolderHeaderUtils;

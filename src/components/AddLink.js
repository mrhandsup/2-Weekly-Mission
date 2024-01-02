import { useEffect, useState } from 'react';
import { getFolderTabs } from '../api';
import Modal from '../common/Modal/Modal';
import './AddLink.css';
import useAsync from './hooks/useAsync';

function AddLink() {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [linkInput, setLinkInput] = useState(null);
  const [tabs, setTabs] = useState();
  const [, , getFolderTabsAsync] = useAsync(getFolderTabs);

  const fetchData = async () => {
    const data = await getFolderTabsAsync();
    setTabs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddClick = e => {
    e.preventDefault();

    const handleOpenModal = content => {
      setOpenModal(true);
      setModalContent(content);
    };

    const content = {
      title: '폴더에 추가',
      hasInput: false,
      hasSns: false,
      hasTabList: true,
      linkUrl: linkInput,
      tabs,
      addToFolderBtn: true,
      buttonName: '추가하기',
    };

    handleOpenModal(content);
  };

  return (
    <>
      <div className="add-link-area">
        <form className="link-form">
          <img src={process.env.PUBLIC_URL + '/images/link.png'} alt="링크" />
          <input
            name="add-link"
            className="add-input"
            onChange={e => setLinkInput(e.target.value)}
            placeholder="링크를 추가해보세요"
          />
          <button className="link-add-btn" onClick={handleAddClick}>
            <span>추가하기</span>
          </button>
        </form>
      </div>

      {openModal && <Modal modalContent={modalContent} closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default AddLink;

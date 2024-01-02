import { useState } from 'react';
import LayoutSns from './LayoutSns';
import styles from './Modal.module.css';

function Modal({ modalContent, closeModal }) {
  const [selectedTabs, setSelectedTabs] = useState([]);
  console.log(modalContent.linkUrl);
  const handleTabClick = index => {
    setSelectedTabs(prevSelectedTabs => {
      if (prevSelectedTabs.includes(index)) {
        return prevSelectedTabs.filter(selectedTab => selectedTab !== index);
      } else {
        return [...prevSelectedTabs, index];
      }
    });
  };

  const handleBgClick = e => {
    if (e.target.classList.contains(styles.bg)) {
      closeModal();
    }
  };

  return (
    <>
      <div className={styles['modal-container']}>
        <div className={styles['modal-header']}>
          <p className={styles.title}>{modalContent.title}</p>
          {modalContent.folderName ? <p className={styles['folder-name']}>{modalContent.folderName}</p> : null}
          {modalContent.linkUrl ? <p className={styles['link-url']}>{modalContent.linkUrl}</p> : null}
        </div>

        <div className={styles['modal-body']}>
          {modalContent.hasInput && <input className={styles['modal-input']} placeholder={modalContent.placeHolder} />}
          {modalContent.hasSns && <LayoutSns />}

          {modalContent.hasTabList &&
            modalContent.tabs.map((tab, i) => (
              <div
                key={i}
                className={`${styles.tabList} ${selectedTabs.includes(i) ? styles.show : ''}`}
                onClick={() => handleTabClick(i)}>
                <p className={styles.tabName}>{tab.name}</p>
                <p className={styles.tabCount}>{tab.link.count}</p>
              </div>
            ))}
        </div>

        <div className={styles['modal-footer']}>
          <div className={styles['action-btn']}>
            {modalContent.folderAddBtn && <button className={styles['add-btn']}>{modalContent.buttonName}</button>}
            {modalContent.folderNameChageBtn && (
              <button className={styles['add-btn']}>{modalContent.buttonName}</button>
            )}
            {modalContent.folderRemoveBtn && (
              <button className={styles['remove-btn']}>{modalContent.buttonName}</button>
            )}
            {modalContent.linkRemoveBtn && <button className={styles['remove-btn']}>{modalContent.buttonName}</button>}
            {modalContent.addToFolderBtn && <button className={styles['add-btn']}>{modalContent.buttonName}</button>}
          </div>
        </div>

        <button className={styles.close} onClick={closeModal}>
          <img src={process.env.PUBLIC_URL + '/images/modal_close.png'} alt="닫기" />
        </button>
      </div>
      <div className={styles.bg} onClick={handleBgClick}></div>
    </>
  );
}
export default Modal;

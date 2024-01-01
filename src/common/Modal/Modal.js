import LayoutSns from './LayoutSns';
import './Modal.css';

function Modal({ modalContent, closeModal }) {
  const handleBgClick = e => {
    if (e.target.classList.contains('bg')) {
      closeModal();
    }
  };

  return (
    <>
      <div className="modal-container">
        <div className="modal-header">
          <p className="title">{modalContent.title}</p>
          {modalContent.folderName ? <p className="folder-name">{modalContent.folderName}</p> : null}
        </div>

        {modalContent.hasInput && <input className="modal-input" placeholder={modalContent.placeHolder} />}

        {modalContent.hasSns && <LayoutSns />}

        {modalContent.hasBtn && (
          <button className="btn" style={{ background: modalContent.buttonColor }}>
            {modalContent.buttonName}
          </button>
        )}
        <button className="close" onClick={closeModal}>
          <img src={process.env.PUBLIC_URL + '/images/modal_close.png'} alt="닫기" />
        </button>
      </div>
      <div className="bg" onClick={handleBgClick}></div>
    </>
  );
}
export default Modal;

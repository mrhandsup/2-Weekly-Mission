import './Modal.css';

function Modal({ modalContent, closeModal }) {
  console.log(modalContent.backgroundColor);
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

function LayoutSns() {
  return (
    <div className="sns-area">
      <div className="kakao">
        <button className="share-btn">
          <img src={process.env.PUBLIC_URL + '/images/Kakao.png'} alt="카카오톡 공유" />
        </button>
        <span className="text">카카오톡</span>
      </div>
      <div className="facebook">
        <button className="share-btn">
          <img src={process.env.PUBLIC_URL + '/images/Facebook.png'} alt="페이스북 공유" />
        </button>
        <span className="text">페이스북</span>
      </div>
      <div className="link">
        <button className="share-btn">
          <img src={process.env.PUBLIC_URL + '/images/link.png'} alt="링크 공유" />
        </button>
        <span className="text">링크 복사</span>
      </div>
    </div>
  );
}
export default Modal;

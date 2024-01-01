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
        <p className="title">{modalContent.title}</p>
        {modalContent.hasInput && <input className="modal-input" placeholder="유용한 팁" />}
        {modalContent.folderName ? <p className="folder-name">{modalContent.folderName}</p> : null}
        <button className="btn" style={{ background: modalContent.backgroundColor }}>
          {modalContent.buttonRole}
        </button>
        <button className="close" onClick={closeModal}>
          <img src={process.env.PUBLIC_URL + '/images/modal_close.png'} alt="닫기" />
        </button>
      </div>
      <div className="bg" onClick={handleBgClick}></div>
    </>
  );
}

export default Modal;

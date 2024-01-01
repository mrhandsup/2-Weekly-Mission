import './Modal.css';

function Modal({ closeModal }) {
  const handleBgClick = e => {
    if (e.target.classList.contains('bg')) {
      closeModal();
    }
  };

  return (
    <>
      <div className="modal-container">
        <p className="title">폴더 이름 변경</p>
        <input className="modal-input" placeholder="유용한 팁" />
        <button className="btn">변경하기</button>
        <button className="close" onClick={closeModal}>
          <img src={process.env.PUBLIC_URL + '/images/modal_close.png'} alt="닫기" />
        </button>
      </div>
      <div className="bg" onClick={handleBgClick}></div>
    </>
  );
}

export default Modal;

import { useState } from 'react';
import './FolderHeaderUtils.css';
import Modal from '../common/Modal';

function FolderHeaderUtils() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="utils">
        <div className="share">
          <button onClick={() => setOpenModal(true)}>
            <img src={process.env.PUBLIC_URL + '/images/share.png'} alt="공유" />
            <span className="text">공유</span>
          </button>
        </div>
        <div className="rename">
          <button>
            <img src={process.env.PUBLIC_URL + '/images/pen.png'} alt="이름 변경" />
            <span className="text">이름 변경</span>
          </button>
        </div>
        <div className="remove">
          <button>
            <img src={process.env.PUBLIC_URL + '/images/remove.png'} alt="삭제" />
            <span className="text">삭제</span>
          </button>
        </div>
      </div>

      {openModal && <Modal closeModal={() => setOpenModal(false)} />}
    </>
  );
}

export default FolderHeaderUtils;

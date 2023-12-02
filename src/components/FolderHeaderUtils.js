import './FolderHeaderUtils.css';

function FolderHeaderUtils() {
  return (
    <div className="utils">
      <div className="share">
        <button>
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
  );
}

export default FolderHeaderUtils;

import './AddLink.css';

function AddLink() {
  return (
    <div className="add-link-area">
      <form className="link-form">
        <img src={process.env.PUBLIC_URL + '/images/link.png'} alt="링크" />
        <input name="add-link" className="add-input" placeholder="링크를 추가해보세요" />
        <button className="link-add-btn">
          <span>추가하기</span>
        </button>
      </form>
    </div>
  );
}

export default AddLink;

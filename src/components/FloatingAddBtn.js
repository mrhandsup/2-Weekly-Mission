function FloatingAddBtn() {
  return (
    <div className="floating-add-btn">
      <span>폴더 추가</span>
      <img src={process.env.PUBLIC_URL + '/images/floating-add.png'} alt="폴더 추가" />
    </div>
  );
}

export default FloatingAddBtn;

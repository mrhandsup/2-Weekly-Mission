function LayoutSns() {
  const host = window.location.host;
  const userId = 1;
  const folderId = 1;
  const shareUrl = `https://${host}/shared?user=${userId}&folder=${folderId}`;

  const sharetoKakao = () => {
    window.open(`http://www.kakao.com/sharer/sharer.php?u=${shareUrl}`);
  };
  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => alert('링크가 복사되었습니다.'));
  };

  return (
    <div className="sns-area">
      <div className="kakao">
        <button className="share-btn" onClick={sharetoKakao}>
          <img src={process.env.PUBLIC_URL + '/images/Kakao.png'} alt="카카오톡 공유" />
        </button>
        <span className="text">카카오톡</span>
      </div>
      <div className="facebook">
        <button className="share-btn" onClick={shareToFacebook}>
          <img src={process.env.PUBLIC_URL + '/images/Facebook.png'} alt="페이스북 공유" />
        </button>
        <span className="text">페이스북</span>
      </div>
      <div className="link">
        <button className="share-btn" onClick={copyLinkToClipboard}>
          <img src={process.env.PUBLIC_URL + '/images/link.png'} alt="링크 공유" />
        </button>
        <span className="text">링크 복사</span>
      </div>
    </div>
  );
}

export default LayoutSns;

import styles from './Modal.module.css';

function LayoutSns() {
  const host = window.location.host;
  const userId = 1;
  const folderId = 1;
  const shareUrl = `https://${host}/shared?user=${userId}&folder=${folderId}`;

  const sharetoKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('4aad7db0e9b94e630aef9ca060a1d2fa');
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'Linkabrary',
          description: '세상의 모든 링크를 저장하세요.',
          imageUrl: '',
          link: {
            mobileWebUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: '보러 가기',
            link: {
              mobileWebUrl: shareUrl,
            },
          },
        ],
      });
    }
  };

  const shareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => alert('링크가 복사되었습니다.'));
  };

  return (
    <div className={styles['sns-area']}>
      <div className={styles.kakao}>
        <button className={styles['share-btn']} onClick={sharetoKakao}>
          <img src={process.env.PUBLIC_URL + '/images/Kakao.png'} alt="카카오톡 공유" />
        </button>
        <span className={styles.text}>카카오톡</span>
      </div>
      <div className={styles.facebook}>
        <button className={styles['share-btn']} onClick={shareToFacebook}>
          <img src={process.env.PUBLIC_URL + '/images/Facebook.png'} alt="페이스북 공유" />
        </button>
        <span className={styles.text}>페이스북</span>
      </div>
      <div className={styles.link}>
        <button className={styles['share-btn']} onClick={copyLinkToClipboard}>
          <img src={process.env.PUBLIC_URL + '/images/link.png'} alt="링크 공유" />
        </button>
        <span className={styles.text}>링크 복사</span>
      </div>
    </div>
  );
}

export default LayoutSns;

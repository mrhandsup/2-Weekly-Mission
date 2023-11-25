function Nav({ profile }) {
  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {profile ? (
          <div className="profile">
            <img src={profile.profileImageSource} alt="프로필 이미지" />
            <span>{profile.email}</span>
          </div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;

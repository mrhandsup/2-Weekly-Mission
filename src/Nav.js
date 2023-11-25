function Nav() {
  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <a className="cta cta-short" href="signin.html">
          <span>로그인</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;

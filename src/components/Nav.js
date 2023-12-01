import { useEffect, useState } from 'react';
import { getUser } from '../api';

function Nav() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {user ? (
          <div className="profile">
            <img src={user.profileImageSource} alt="프로필 이미지" />
            <span>{user.email}</span>
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

import { useEffect, useState } from 'react';
import { getSampleUser, getUsers } from '../api';
import './Nav.css';

function Nav({ className, type }) {
  const [user, setUser] = useState();

  const fetchData = async () => {
    try {
      let data;

      if (type === 'folder') {
        ({ data } = await getUsers());
      } else if (type === 'shared') {
        data = await getSampleUser();
      }

      setUser(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderProfile = () => {
    if (type === 'folder') {
      return (
        <>
          <img src={user[0].image_source} alt="프로필 이미지" />
          <span className="email">{user[0].email}</span>
        </>
      );
    } else if (type === 'shared') {
      return (
        <>
          <img src={user.profileImageSource} alt="프로필 이미지" />
          <span className="email">{user.email}</span>
        </>
      );
    }
  };

  return (
    <nav className={className}>
      <div className="gnb">
        <a href="index.html">
          <img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {user ? (
          <div className="profile">{renderProfile()}</div>
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

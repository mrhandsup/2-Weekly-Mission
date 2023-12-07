import { useEffect, useState } from 'react';
import { getSampleUser, getUsers } from '../api';
import './Nav.css';

function Nav({ className, type }) {
  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = async () => {
    try {
      setIsloading(true);
      setIsError(null);

      let data;

      if (type === 'folder') {
        ({ data } = await getUsers());
      } else if (type === 'shared') {
        data = await getSampleUser();
      }

      setUser(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RenderProfile = () => {
    if (type === 'folder') {
      return (
        <>
          <img src={user[0]?.image_source} alt="프로필 이미지" />
          <span className="email">{user[0]?.email}</span>
        </>
      );
    }

    if (type === 'shared') {
      return (
        <>
          <img src={user?.profileImageSource} alt="프로필 이미지" />
          <span className="email">{user?.email}</span>
        </>
      );
    }
  };

  return isLoading ? (
    <div className="loading">로딩중입니다.</div>
  ) : (
    <nav className={className}>
      <div className="gnb">
        <a href="index.html">
          <img src="./images/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {user ? (
          <div className="profile">{RenderProfile()}</div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        )}
      </div>
      {isError?.message && <span className="error">{isError.message}</span>}
    </nav>
  );
}

export default Nav;

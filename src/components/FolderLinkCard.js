import { useEffect, useState } from 'react';
import { getTimeAgo } from '../getTimeAgo';
import formatDate from '../utills/formatDate';
import FloatingAddBtn from './FloatingAddBtn';
import './FolderLinkCard.css';
import KebabMenu from './KebabMenu';

function FolderLinkCard({ links, tabs, loading, error }) {
  const [showKebabMenu, setShowKebabMenu] = useState([]);

  useEffect(() => {
    if (links) {
      setShowKebabMenu(links.map(() => false));
    }
  }, [links]);

  const toggleKebabMenu = index => {
    setShowKebabMenu(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      {loading ? (
        <span className="loading">로딩중입니다.</span>
      ) : (
        <>
          <ul className="folder-card">
            {links?.map((link, index) => (
              <li className="link-card" key={link.id}>
                <a href={link.url}>
                  <img
                    className="card-img"
                    src={link.image_source || process.env.PUBLIC_URL + '/images/no-image.png'}
                    alt="카드 이미지"
                  />
                  <div className="info-area">
                    <div className="time-ago-area">
                      <span className="time-ago">{getTimeAgo(link.created_at)}</span>
                      <div className="kebab-menu" onClick={e => e.preventDefault()}>
                        <button
                          className="kebab-btn"
                          onClick={() => {
                            toggleKebabMenu(index);
                          }}>
                          <img src={process.env.PUBLIC_URL + '/images/kebab.png'} alt="추가메뉴 버튼" />
                        </button>
                        {showKebabMenu[index] && <KebabMenu linkUrl={link.url} tabs={tabs} />}
                      </div>
                    </div>
                    <p className="title">{link.title}</p>
                    <span className="date">{formatDate(link.created_at)}</span>
                  </div>
                </a>
                <button className="star-btn">
                  <img src={process.env.PUBLIC_URL + '/images/star.png'} alt="즐겨 찾기" />
                </button>
              </li>
            ))}
            <FloatingAddBtn />
          </ul>
          {error?.message && <span className="error">{error.message}</span>}
        </>
      )}
    </>
  );
}

export default FolderLinkCard;

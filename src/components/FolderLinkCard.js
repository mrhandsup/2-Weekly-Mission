import { getTimeAgo } from '../getTimeAgo';
import formatDate from '../utills/formatDate';
import FloatingAddBtn from './FloatingAddBtn';
import './FolderLinkCard.css';

function FolderLinkCard({ links, loading, error }) {
  return (
    <>
      {loading ? (
        <span className="loading">로딩중입니다.</span>
      ) : (
        <>
          <ul className="folder-card">
            {links?.map(link => (
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
                      <div className="kebab-menu">
                        <button
                          className="kebab-btn"
                          onClick={e => {
                            e.preventDefault();
                          }}>
                          <img src={process.env.PUBLIC_URL + '/images/kebab.png'} alt="추가메뉴 버튼" />
                        </button>
                        <div className="kebab-menu-list">
                          <button className="btn">
                            <span>삭제하기</span>
                          </button>
                          <button className="btn">
                            <span>폴더에 추가</span>
                          </button>
                        </div>
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

function kebabMenu() {
  return;
  <div className="kebab-menu">
    <button className="btn">삭제하기</button>
    <button className="btn">폴더에 추가</button>
  </div>;
}

export default FolderLinkCard;

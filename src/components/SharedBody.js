import SharedFolderCard from './SharedFolderCard';
import './SharedBody.css';

function SharedBody({ links }) {
  return (
    <div className="folder-body">
      <form>
        <div className="search-area">
          <img src={process.env.PUBLIC_URL + '/images/search.png'} alt="검색" />
          <input name="search" className="link-search" placeholder="링크를 검색해보세요" />
        </div>
      </form>
      <SharedFolderCard links={links} />
    </div>
  );
}

export default SharedBody;

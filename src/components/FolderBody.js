import FolderCard from './FolderCard';
import './FolderBody.css';

function FolderBody({ links }) {
  return (
    <div className="folder-body">
      <form>
        <div className="search-area">
          <img src={process.env.PUBLIC_URL + '/images/search.png'} alt="검색" />
          <input name="search" className="link-search" placeholder="링크를 검색해보세요" />
        </div>
      </form>
      <FolderCard links={links} />
    </div>
  );
}

export default FolderBody;

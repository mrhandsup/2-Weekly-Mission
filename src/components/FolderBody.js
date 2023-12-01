import { useState } from 'react';
import FolderCard from './FolderCard';
import './FolderBody.css';

function FolderBody({ links }) {
  const [search, setSearch] = useState(''); //다음 과제에 사용 예정
  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearch(e.target['search'].value);
  };

  return (
    <div className="folder-body">
      <form onSubmit={handleSearchSubmit}>
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

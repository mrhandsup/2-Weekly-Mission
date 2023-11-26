import './styles/index.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FolderHeader from './components/FolderHeader';
import FolderCard from './components/FolderCard';
import { getFolder, getProfile } from './api';
import { useEffect, useState } from 'react';

function App() {
  const [profile, setProfile] = useState({});
  const [folder, setFolder] = useState({});
  const [search, setSearch] = useState(''); //다음 과제에 사용 예정

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearch(e.target['search'].value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getProfile();
        const { folder } = await getFolder();
        setProfile(profileResponse);
        setFolder(folder);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav profile={profile} />
      <FolderHeader folder={folder} />
      <div className="folder-body">
        <form onSubmit={handleSearchSubmit}>
          <div className="search-area">
            <img src={process.env.PUBLIC_URL + '/images/search.png'} alt="검색" />
            <input name="search" className="link-search" placeholder="링크를 검색해보세요" />
          </div>
        </form>
        <FolderCard links={folder.links} />
      </div>
      <Footer />
    </>
  );
}

export default App;

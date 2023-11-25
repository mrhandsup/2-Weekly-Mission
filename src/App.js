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
      <FolderCard links={folder.links} />
      <Footer />
    </>
  );
}

export default App;

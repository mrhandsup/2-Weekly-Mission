import './styles/index.css';
import Nav from './components/Nav';
import FolderHeader from './components/FolderHeader';
import Footer from './components/Footer';
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
      <Footer />
    </>
  );
}

export default App;

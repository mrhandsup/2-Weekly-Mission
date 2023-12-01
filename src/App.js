import Nav from './components/Nav';
import Footer from './components/Footer';
import FolderHeader from './components/FolderHeader';
import FolderBody from './components/FolderBody';
import { getFolder } from './api';
import { useEffect, useState } from 'react';

function App() {
  const [folder, setFolder] = useState('');

  const fetchData = async () => {
    try {
      const { folder } = await getFolder();
      setFolder(folder);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <FolderHeader folder={folder} />
      <FolderBody links={folder.links} />
      <Footer />
    </>
  );
}

export default App;

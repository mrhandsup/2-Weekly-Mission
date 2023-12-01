import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FolderHeader from '../components/FolderHeader';
import FolderBody from '../components/FolderBody';
import { getFolder } from '../api';
import { useEffect, useState } from 'react';

function Shared() {
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
      <FolderHeader folder={folder} />
      <FolderBody links={folder.links} />
    </>
  );
}

export default Shared;

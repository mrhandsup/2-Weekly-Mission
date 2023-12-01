import FolderHeader from '../components/FolderHeader';
import FolderBody from '../components/FolderBody';
import { getFolder } from '../api';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

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
      <Nav />
      <FolderHeader folder={folder} />
      <FolderBody links={folder.links} />
    </>
  );
}

export default Shared;

import SharedHeader from '../components/SharedHeader';
import SharedBody from '../components/SharedBody';
import { getSampleFolder } from '../api';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

function Shared() {
  const [folder, setFolder] = useState('');

  const fetchData = async () => {
    try {
      const { folder } = await getSampleFolder();
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
      <Nav type="shared" />
      <SharedHeader folder={folder} />
      <SharedBody links={folder.links} />
    </>
  );
}

export default Shared;

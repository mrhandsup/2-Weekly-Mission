import SharedHeader from '../components/SharedHeader';
import SharedBody from '../components/SharedBody';
import { getSampleFolder } from '../api';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

function Shared() {
  const [folder, setFolder] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchData = async () => {
    try {
      setIsloading(true);
      setIsError(null);

      const { folder } = await getSampleFolder();
      setFolder(folder);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav type="shared" />
      {isLoading ? (
        <span className="loading">로딩중입니다.</span>
      ) : (
        <>
          <SharedHeader folder={folder} />
          <SharedBody links={folder?.links} />
          {isError?.message && <span className="error">{isError.message}</span>}
        </>
      )}
    </>
  );
}

export default Shared;

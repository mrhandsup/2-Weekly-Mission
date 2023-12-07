import { useEffect, useState } from 'react';
import { getSortingTab, getSearchedFolders } from '../api';
import LinkSearchInput from './LinkSearchInput ';
import FolderHeader from './FolderHeader';
import FolderTabs from './FolderTabs';
import FolderContents from './FolderContents';

function FolderBody() {
  const [tab, setTab] = useState();
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchingError, setSearchingError] = useState(null);

  const fetchData = async () => {
    try {
      setIsloading(true);
      setIsError(null);

      const { data } = await getSortingTab();
      setTab(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsloading(false);
    }
  };

  const selectedfetchData = async () => {
    try {
      setIsloading(true);
      setSearchingError(null);

      const { data } = await getSearchedFolders(selectedTab);
      setSelectedFolder(data);
    } catch (error) {
      setSearchingError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    selectedfetchData();
  }, [selectedTab]);

  const handleTabClick = id => {
    setSelectedTab(id);
  };

  return (
    <>
      <div className="folder-body">
        <LinkSearchInput />
        <FolderTabs tab={tab} selectedTab={selectedTab} handleTabClick={handleTabClick} isError={isError} />
        <FolderHeader tabs={tab} selectedTab={selectedTab} />
        <FolderContents
          isLoading={isLoading}
          searchingError={searchingError}
          tab={tab}
          selectedTab={selectedTab}
          selectedFolder={selectedFolder}
        />
      </div>
    </>
  );
}

export default FolderBody;

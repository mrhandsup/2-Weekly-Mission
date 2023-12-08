import { useEffect, useState } from 'react';
import { getFolderTabs, getSearchedFolders } from '../api';
import LinkSearchInput from './LinkSearchInput ';
import FolderHeader from './FolderHeader';
import FolderTabs from './FolderTabs';
import FolderContents from './FolderContents';
import useAsync from './hooks/useAsync';

function FolderBody() {
  const [tab, setTab] = useState();
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState();
  const [isLoading, isError, getFolderTabsAsync] = useAsync(getFolderTabs);
  const [searchingLoading, searchingError, getSearchedFoldersAsync] = useAsync(getSearchedFolders);

  const fetchData = async () => {
    const data = await getFolderTabsAsync();
    setTab(data);
  };

  const selectedfetchData = async () => {
    const data = await getSearchedFoldersAsync(selectedTab);
    setSelectedFolder(data);
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
        <FolderTabs
          tab={tab}
          selectedTab={selectedTab}
          handleTabClick={handleTabClick}
          isLoading={isLoading}
          isError={isError}
        />
        <FolderHeader tabs={tab} selectedTab={selectedTab} />
        <FolderContents
          tab={tab}
          selectedTab={selectedTab}
          selectedFolder={selectedFolder}
          searchingLoading={searchingLoading}
          searchingError={searchingError}
        />
      </div>
    </>
  );
}

export default FolderBody;

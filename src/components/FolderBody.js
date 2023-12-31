import { useEffect, useState } from 'react';
import { getFolderTabs } from '../api';
import LinkSearchInput from './LinkSearchInput ';
import FolderHeader from './FolderHeader';
import FolderTabs from './FolderTabs';
import FolderContents from './FolderContents';
import useAsync from './hooks/useAsync';

function FolderBody() {
  const [tab, setTab] = useState();
  const [selectedTab, setSelectedTab] = useState(null);
  const [isLoading, isError, getFolderTabsAsync] = useAsync(getFolderTabs);

  const fetchData = async () => {
    const data = await getFolderTabsAsync();
    setTab(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="folder-body">
        <LinkSearchInput />
        <FolderTabs
          tab={tab}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          isLoading={isLoading}
          isError={isError}
        />
        <FolderHeader tabs={tab} selectedTab={selectedTab} />
        <FolderContents selectedTab={selectedTab} />
      </div>
    </>
  );
}

export default FolderBody;

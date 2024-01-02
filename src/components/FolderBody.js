import { useEffect, useState } from 'react';
import { getFolderTabs } from '../api';
import LinkSearchInput from './LinkSearchInput ';
import FolderHeader from './FolderHeader';
import FolderTabs from './FolderTabs';
import FolderContents from './FolderContents';
import useAsync from './hooks/useAsync';

function FolderBody() {
  const [tabs, setTabs] = useState();
  const [selectedTab, setSelectedTab] = useState(null);
  const [isLoading, isError, getFolderTabsAsync] = useAsync(getFolderTabs);

  const fetchData = async () => {
    const data = await getFolderTabsAsync();
    setTabs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="folder-body">
        <LinkSearchInput />
        <FolderTabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          isLoading={isLoading}
          isError={isError}
        />
        <FolderHeader tabs={tabs} selectedTab={selectedTab} />
        <FolderContents tabs={tabs} selectedTab={selectedTab} />
      </div>
    </>
  );
}

export default FolderBody;

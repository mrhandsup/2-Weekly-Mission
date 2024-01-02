import { useEffect, useState } from 'react';
import FolderLinkCard from './FolderLinkCard';
import useAsync from './hooks/useAsync';
import { getSearchedFolders, getUserLinks } from '../api';

function FolderContents({ tabs, selectedTab }) {
  const [selectedFolder, setSelectedFolder] = useState();
  const [allLinks, setAllLinks] = useState([]);
  const [allLinkLoading, allLinkError, getUserLinksAsync] = useAsync(getUserLinks);
  const [selectedLinkLoading, selectedLinkError, getSearchedFoldersAsync] = useAsync(getSearchedFolders);

  const getAllLinks = async () => {
    const data = await getUserLinksAsync();
    setAllLinks(data);
  };

  const getSelectedLinks = async () => {
    const data = await getSearchedFoldersAsync(selectedTab);
    setSelectedFolder(data);
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  useEffect(() => {
    getSelectedLinks();
  }, [selectedTab]);

  return (
    <>
      {selectedTab === null && (
        <FolderLinkCard links={allLinks} tabs={tabs} loading={allLinkLoading} error={allLinkError} />
      )}
      {selectedTab !== null && (
        <FolderLinkCard links={selectedFolder} tabs={tabs} loading={selectedLinkLoading} error={selectedLinkError} />
      )}

      {!selectedLinkLoading && selectedFolder?.length === 0 && (
        <div className="nothing-data">
          <span>저장된 링크가 없습니다</span>
        </div>
      )}
    </>
  );
}

export default FolderContents;

import { useEffect, useState } from 'react';
import { getSortingTab, getSearchedFolders } from '../api';
import FolderCard from './FolderCard';
import FolderHeader from './FolderHeader';
import SelectedFolderRender from './SelectedFolderRender';
import './FolderSortingTab.css';

function FolderSortingTab() {
  const [tab, setTab] = useState();
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [SearchingError, setSearchingError] = useState(null);

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

  const nothingDataRender = () => {
    return (
      <div className="nothing-data">
        <span>저장된 링크가 없습니다</span>
      </div>
    );
  };

  return (
    <>
      <div className="sorting-area">
        <ul className="sorting-tab">
          <li className="list">
            <button className={selectedTab === null ? 'clicked' : ''} onClick={() => handleTabClick(null)}>
              전체
            </button>
          </li>
          {tab?.map(list => {
            return (
              <li key={list.id} className="list">
                <button className={selectedTab === list.id ? 'clicked' : ''} onClick={() => handleTabClick(list.id)}>
                  {list.name}
                </button>
              </li>
            );
          })}
          {isError?.message && <span className="error">{isError.message}</span>}
        </ul>
        <button>
          <img className="more-btn" src={process.env.PUBLIC_URL + '/images/add.png'} alt="더보기" />
        </button>
      </div>

      {isLoading ? (
        <div className="loading">로딩중입니다.</div>
      ) : (
        <>
          <FolderHeader tabs={tab} selectedTab={selectedTab} />
          {SearchingError?.message ? (
            <span className="error">{SearchingError.message}</span>
          ) : (
            <>
              {selectedFolder === undefined && <FolderCard />}
              {selectedFolder !== undefined && selectedFolder.length === 0 && nothingDataRender()}
              {selectedFolder !== undefined && selectedFolder.length > 0 && (
                <SelectedFolderRender selectedFolder={selectedFolder} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default FolderSortingTab;

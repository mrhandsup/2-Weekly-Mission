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

  const fetchData = async () => {
    try {
      const { data } = await getSortingTab();
      setTab(data);
    } catch (error) {
      alert(error);
    }
  };

  const selectedfetchData = async () => {
    try {
      const { data } = await getSearchedFolders(selectedTab);
      setSelectedFolder(data);
    } catch (error) {
      alert(error);
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
        </ul>
        <button>
          <img className="more-btn" src={process.env.PUBLIC_URL + '/images/add.png'} alt="더보기" />
        </button>
      </div>

      <FolderHeader tabs={tab} selectedTab={selectedTab} />

      {selectedFolder === undefined && <FolderCard />}
      {selectedFolder !== undefined && selectedFolder.length === 0 && nothingDataRender()}
      {selectedFolder !== undefined && selectedFolder.length > 0 && (
        <SelectedFolderRender selectedFolder={selectedFolder} />
      )}
    </>
  );
}

export default FolderSortingTab;

import { useEffect, useState } from 'react';
import { getSortingTab, getSearchedFolders } from '../api';
import { getTimeAgo } from '../getTimeAgo';
import FolderCard from './FolderCard';
import './FolderSortingTab.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderSortingTab() {
  const [tab, setTab] = useState();
  const [selectedTab, setSelectedTab] = useState();
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
    console.log(selectedFolder);
  }, [selectedFolder]);

  useEffect(() => {
    fetchData();
  }, []); // 마운트 시에만 호출

  useEffect(() => {
    selectedfetchData();
  }, [selectedTab]); // selectedTab이 변경될 때만 호출

  const handleTabClick = id => {
    setSelectedTab(id);
  };

  const selectedFolderRender = selectedFolder => {
    return (
      <ul className="folder-card">
        {selectedFolder?.map(link => (
          <li className="link-card" key={link.id}>
            <a href={link.url}>
              <img src={link.image_source || process.env.PUBLIC_URL + '/images/no-image.png'} alt="카드 이미지" />
              <div className="info-area">
                <span className="time-ago">{getTimeAgo(link.created_at)}</span>
                <p className="title">{link.title}</p>
                <span className="date">{formatDate(link.created_at)}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
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

      {selectedFolder === undefined && <FolderCard />}
      {selectedFolder !== undefined && selectedFolder.length === 0 && <div>데이터없음</div>}
      {selectedFolder !== undefined && selectedFolder.length > 0 && selectedFolderRender(selectedFolder)}
    </>
  );
}

export default FolderSortingTab;

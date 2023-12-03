import { useEffect, useState } from 'react';
import { getSortingTab, getSearchedFolders } from '../api';
import { getTimeAgo } from '../getTimeAgo';
import FolderCard from './FolderCard';
import FolderHeader from './FolderHeader';
import FloatingAddBtn from './FloatingAddBtn';
import './FolderSortingTab.css';
import './FloatingAddBtn.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

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

  const selectedFolderRender = selectedFolder => {
    return (
      <ul className="folder-card">
        {selectedFolder?.map(link => (
          <li className="link-card" key={link.id}>
            <a href={link.url}>
              <img
                className="card-img"
                src={link.image_source || process.env.PUBLIC_URL + '/images/no-image.png'}
                alt="카드 이미지"
              />
              <div className="info-area">
                <div className="time-ago-area">
                  <span className="time-ago">{getTimeAgo(link.created_at)}</span>
                  <button
                    onClick={e => {
                      e.preventDefault();
                    }}>
                    <img className="kebab-btn" src={process.env.PUBLIC_URL + '/images/kebab.png'} alt="케밥 메뉴" />
                  </button>
                </div>
                <p className="title">{link.title}</p>
                <span className="date">{formatDate(link.created_at)}</span>
              </div>
            </a>
            <button>
              <img className="star-btn" src={process.env.PUBLIC_URL + '/images/star.png'} alt="즐겨 찾기" />
            </button>
          </li>
        ))}
        <FloatingAddBtn />
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

      <FolderHeader tabs={tab} selectedTab={selectedTab} />

      {selectedFolder === undefined && <FolderCard />}
      {selectedFolder !== undefined && selectedFolder.length === 0 && nothingDataRender()}
      {selectedFolder !== undefined && selectedFolder.length > 0 && selectedFolderRender(selectedFolder)}
    </>
  );
}

export default FolderSortingTab;

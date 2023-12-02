import { useEffect, useState } from 'react';
import { getSortingTab } from '../api';
import './FolderSortingTab.css';

function FolderSortingTab() {
  const [tab, setTab] = useState();
  const [selectedTab, setSelectedTab] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await getSortingTab();
      setTab(data);
      console.log('data:', data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleTabClick = id => {
    setSelectedTab(id);
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
    </>
  );
}

export default FolderSortingTab;

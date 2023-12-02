import { useEffect, useState } from 'react';
import { getSortingTab } from '../api';
import './FolderSortingTab.css';

function FolderSortingTab() {
  const [tab, setTab] = useState();

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

  return (
    <>
      <div className="sorting-area">
        <ul className="sorting-tab">
          <li className="list">
            <button>전체</button>
          </li>
          {tab?.map(list => {
            return (
              <li key={list.id} className="list">
                <button>{list.name}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FolderSortingTab;

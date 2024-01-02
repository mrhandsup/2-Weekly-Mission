import './FolderTabs.css';

function FolderTabs({ tabs, selectedTab, setSelectedTab, isLoading, isError }) {
  const handleTabClick = id => {
    setSelectedTab(id);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">로딩중입니다.</div>
      ) : (
        <div className="sorting-area">
          <ul className="sorting-tab">
            <li className="list">
              <button className={selectedTab === null ? 'clicked' : ''} onClick={() => handleTabClick(null)}>
                전체
              </button>
            </li>

            {tabs?.map(tab => {
              return (
                <li key={tab.id} className="list">
                  <button className={selectedTab === tab.id ? 'clicked' : ''} onClick={() => handleTabClick(tab.id)}>
                    {tab.name}
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
      )}
    </>
  );
}

export default FolderTabs;

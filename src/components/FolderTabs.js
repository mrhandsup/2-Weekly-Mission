import './FolderTabs.css';

function FolderTabs({ tab, selectedTab, handleTabClick, isLoading, isError }) {
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
      )}
    </>
  );
}

export default FolderTabs;

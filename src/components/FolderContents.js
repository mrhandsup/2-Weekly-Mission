import AllFolderLinks from './AllFolderLinks';
import SelectedFolderLinks from './SelectedFolderLinks';

function FolderContents({ selectedFolder, searchingLoading, searchingError }) {
  return (
    <>
      {searchingLoading ? (
        <div className="loading">로딩중입니다.</div>
      ) : (
        <>
          {searchingError?.message ? (
            <span className="error">{searchingError.message}</span>
          ) : (
            <>
              {selectedFolder === undefined && <AllFolderLinks />}
              {selectedFolder !== undefined && selectedFolder.length === 0 && (
                <div className="nothing-data">
                  <span>저장된 링크가 없습니다</span>
                </div>
              )}
              {selectedFolder !== undefined && selectedFolder.length > 0 && (
                <SelectedFolderLinks links={selectedFolder} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default FolderContents;

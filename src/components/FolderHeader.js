import FolderHeaderUtils from './FolderHeaderUtils';
import styles from './FolderHeader.module.css';

function FolderHeader({ tabs, selectedTab }) {
  const matchingFolder = tabs?.find(tab => tab.id === selectedTab);

  return (
    <>
      {matchingFolder === undefined ? (
        <h2 className={styles['folder-header']}>전체</h2>
      ) : (
        <div className={styles['folder-header']}>
          <h2>{matchingFolder.name}</h2>
          <FolderHeaderUtils folderName={matchingFolder.name} />
        </div>
      )}
    </>
  );
}

export default FolderHeader;

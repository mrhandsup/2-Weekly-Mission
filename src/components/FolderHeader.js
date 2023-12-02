import FolderHeaderUtils from './FolderHeaderUtils';
import styles from './FolderHeader.module.css';

function FolderHeader({ tabs, selectedTab }) {
  const matchingFolder = tabs?.find(tab => tab.id === selectedTab);

  return (
    <>
      {matchingFolder === undefined ? (
        <h2>전체</h2>
      ) : (
        <div className={styles['folder-header']}>
          <h2>{matchingFolder.name}</h2>
          <FolderHeaderUtils />
        </div>
      )}
    </>
  );
}

export default FolderHeader;

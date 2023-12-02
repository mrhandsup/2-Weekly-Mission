import SearchLink from './SearchLink';
import FolderSortingTab from './FolderSortingTab';
import './FolderBody.css';

function FolderBody() {
  return (
    <>
      <div className="folder-body">
        <SearchLink />
        <FolderSortingTab />
      </div>
    </>
  );
}

export default FolderBody;

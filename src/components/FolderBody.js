import LinkSearchInput from './LinkSearchInput ';
import FolderSortingTab from './FolderSortingTab';
import './FolderBody.css';

function FolderBody() {
  return (
    <>
      <div className="folder-body">
        <LinkSearchInput />
        <FolderSortingTab />
      </div>
    </>
  );
}

export default FolderBody;

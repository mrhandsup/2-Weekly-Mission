import SearchLink from './SearchLink';
import FolderSortingTab from './FolderSortingTab';
import FolderCard from './FooterCard';

function FolderBody() {
  return (
    <>
      <div className="folder-body">
        <SearchLink />
        <FolderSortingTab />
        <FolderCard />
      </div>
    </>
  );
}

export default FolderBody;

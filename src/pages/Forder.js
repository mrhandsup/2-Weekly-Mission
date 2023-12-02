import AddLink from '../components/AddLink';
import Nav from '../components/Nav';
import FolderBody from '../components/FolderBody';
import './Folder.css';

function Folder() {
  return (
    <>
      <Nav className="folder-page-nav" type="folder" />
      <AddLink />
      <FolderBody />
    </>
  );
}

export default Folder;

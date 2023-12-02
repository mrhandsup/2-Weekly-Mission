import LinkInput from '../components/LinkInput';
import Nav from '../components/Nav';
import './Folder.css';

function Folder() {
  return (
    <>
      <Nav className="folder-page-nav" type="folder" />
      <LinkInput />
    </>
  );
}

export default Folder;

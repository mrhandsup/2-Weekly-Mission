function FolderHeader({ folder }) {
  if (!folder.owner) {
    return <div>Loading...</div>;
  }

  return (
    <div className="folder-header">
      <div className="folder-info">
        <img className="img" src={folder.owner.profileImageSource} alt="폴더 프로필" />
        <span className="name">{folder.owner.name}</span>
      </div>
      <p className="favorite">{folder.name}</p>
    </div>
  );
}

export default FolderHeader;

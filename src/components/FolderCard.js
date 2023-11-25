function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderCard({ links }) {
  if (!links) {
    return <div>Loading...</div>;
  }

  return (
    <div className="folder-body">
      <ul className="folder-card">
        {links.map(link => (
          <li className="link-card" key={link.id}>
            <img src={link.imageSource} alt="카드 이미지" />
            <div className="info-area">
              <p className="title">{link.title}</p>
              <span className="date">{formatDate(link.createdAt)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FolderCard;

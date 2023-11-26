import { getTimeAgo } from '../getTimeAgo';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderCard({ links }) {
  if (!links) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="folder-card">
      {links.map(link => (
        <li className="link-card" key={link.id}>
          <a href={link.url}>
            <img src={link.imageSource || process.env.PUBLIC_URL + '/images/no-image.png'} alt="카드 이미지" />
            <div className="info-area">
              <span className="time-ago">{getTimeAgo(link)}</span>
              <p className="title">{link.title}</p>
              <span className="date">{formatDate(link.createdAt)}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FolderCard;

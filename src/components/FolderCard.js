import { useState, useEffect } from 'react';
import { getFolders } from '../api';
import { getTimeAgo } from '../getTimeAgo';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderCard({ selectedTab }) {
  const [folder, setFolder] = useState([]);
  console.log(selectedTab);
  const fetchData = async () => {
    try {
      const { data } = await getFolders();
      setFolder(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul className="folder-card">
        {folder?.map(link => (
          <li className="link-card" key={link.id}>
            <a href={link.url}>
              <img src={link.image_source || process.env.PUBLIC_URL + '/images/no-image.png'} alt="카드 이미지" />
              <div className="info-area">
                <span className="time-ago">{getTimeAgo(link.created_at)}</span>
                <p className="title">{link.title}</p>
                <span className="date">{formatDate(link.created_at)}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FolderCard;

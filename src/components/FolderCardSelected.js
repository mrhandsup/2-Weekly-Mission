// import { useEffect, useState } from 'react';
// import { getSearchedFolders } from '../api';

// function FolderCardSelected({ selectedFolderId }) {
//   const [selectedFolder, setSelectedFolder] = useState([]);

//   const fetchData = async () => {
//     try {
//       const { data } = await getSearchedFolders(selectedFolderId);
//       setSelectedFolder(data);
//     } catch (error) {
//       alert(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [selectedFolderId]);

//   return (
//     <ul className="folder-card">
//       {selectedFolder?.map(link => (
//         <li className="link-card" key={link.id}>
//           <a href={link.url}>
//             <img src={link.image_source || process.env.PUBLIC_URL + '/images/no-image.png'} alt="카드 이미지" />
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default FolderCardSelected;

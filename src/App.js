import './styles/index.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { getProfile } from './api';
import { useEffect, useState } from 'react';

function App() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav profile={profile} />
      <Footer />
    </>
  );
}

export default App;

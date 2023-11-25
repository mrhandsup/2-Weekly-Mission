import ReactDOM from 'react-dom/client';
import './style/index.css';
import Nav from './Nav';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <Footer />
  </>,
);

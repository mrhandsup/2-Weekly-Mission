import Nav from './Nav';
import Footer from './Footer';

function App({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default App;

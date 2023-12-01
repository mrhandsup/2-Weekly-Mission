import Nav from './Nav';
import Footer from './Footer';

function App({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default App;

import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;

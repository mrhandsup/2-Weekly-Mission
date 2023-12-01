import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared';
import App from './components/App';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/shared" element={<Shared />}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;

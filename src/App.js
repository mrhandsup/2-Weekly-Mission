import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shared from './pages/Shared';
import Folder from './pages/Forder';
import MainLayout from './pages/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/folder" />} />
          <Route path="/shared" element={<Shared />}></Route>
          <Route path="/folder" element={<Folder />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
export default App;

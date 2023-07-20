import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';


const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default UserRoutes;
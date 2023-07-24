import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Calls from './pages/Calls/Calls';
import TableCalls from './components/TableCalls/TableCalls';
import Courses from './pages/Сourses/Courses';
import Schedule from './pages/Schedule/Schedule';


const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calls" element={<Calls />}>
        <Route path="tablecalls/:id" element={<TableCalls/>}/>
      </Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default UserRoutes;


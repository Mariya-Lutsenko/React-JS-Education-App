import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Calls from './pages/Calls/Calls';
import TableCalls from './components/TableCalls/TableCalls';
// import Courses from './pages/Сourses/Courses';
// import Schedule from './pages/Schedule/Schedule';
import Loader from './components/Loader/Loader';

const Home = lazy(()=> import('./pages/Home/Home'))
const Calls = lazy(()=> import('./pages/Calls/Calls'))
const Courses = lazy(()=> import('./pages/Сourses/Courses'))
const Schedule = lazy(()=> import('./pages/Schedule/Schedule'))


const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calls" element={<Calls />}>
        <Route path="tablecalls/:id" element={<TableCalls/>}/>
      </Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </Suspense>
  );
};
export default UserRoutes;


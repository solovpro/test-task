import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import NoMatch from './pages/NoMatch';
import Browse from './pages/Browse';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => {
   const [isLogin, setIsLogin] = useState<boolean>(false);
   const [isLogout, setIsLogout] = useState<boolean>(false);

   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === '/browse' && !isLogin && !isLogout) {
         navigate('/');
      } else if (location.pathname === '/login' && localStorage.getItem('isLogin') === 'true') {
         navigate('/browse');
      }

      setIsLogout(false);
   }, [location.pathname]);

   useEffect(() => {
      if (localStorage.getItem('isLogin') === 'true') {
         setIsLogin(true);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem('isLogin', `${isLogin}`);
   }, [isLogin]);

   return (
      <Routes>
         <Route path={`/`} element={<Main isLogin={isLogin} />} />
         <Route
            path={`/browse`}
            element={
               <Browse setIsLogin={setIsLogin} setIsLogout={setIsLogout} isLogout={isLogout} />
            }
         />
         <Route path={`/login`} element={<Login setIsLogin={setIsLogin} />} />
         <Route path='*' element={<NoMatch />} />
      </Routes>
   );
};

export default App;

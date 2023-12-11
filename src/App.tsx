import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import NoMatch from './pages/NoMatch';
import Browse from './pages/Browse';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => {
   const [isLogin, setIsLogin] = useState<boolean>(false);
   const navigate = useNavigate();

   useEffect(() => {
      if (window.location.pathname === '/login' && localStorage.getItem('isLogin') === 'true') {
         // Если авториз-ный user переходит на страницу /login, то он попадает на browse страницу
         navigate('/browse');
      } else if (
         window.location.pathname === '/browse' &&
         localStorage.getItem('isLogin') !== 'true'
      ) {
         // Если неавториз-ный user переходит на страницу /browse, то он попадает на login страницуs
         navigate('/login');
      }
   }, [window.location.pathname]);

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
         <Route path='/' element={<Main isLogin={isLogin} />} />
         <Route path='/browse' element={<Browse setIsLogin={setIsLogin} />} />
         <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
         <Route path='*' element={<NoMatch />} />
      </Routes>
   );
};

export default App;

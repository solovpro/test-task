import { Link, useNavigate } from 'react-router-dom';

import { setState } from '../types';

import s from '../App.module.scss';

interface LoginProps {
   setIsLogin: setState<boolean>;
}

const Login: React.FC<LoginProps> = ({ setIsLogin }) => {
   const navigate = useNavigate();

   const login = () => {
      setIsLogin(true);

      navigate(`${process.env.REACT_APP_PUBLIC_URL}/`);
   };

   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>Login Page</h1>
         <div className={s.buttons}>
            <Link to={`${process.env.REACT_APP_PUBLIC_URL}/`} className={s.button}>
               <button className={s.buttonMain}>Main Page</button>
            </Link>
            <button onClick={login} className={s.buttonLogin}>
               Войти
            </button>
         </div>
      </div>
   );
};

export default Login;

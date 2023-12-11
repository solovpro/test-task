import { Link } from 'react-router-dom';

import s from '../App.module.scss';

interface MainProps {
   isLogin: boolean;
}

const Main: React.FC<MainProps> = ({ isLogin }) => {
   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>Main Page</h1>
         <div className={s.buttons}>
            {isLogin ? (
               <Link to={`${process.env.REACT_APP_PUBLIC_URL}/browse`} className={s.button}>
                  <button className={s.buttonBrowse}>Browse Page</button>
               </Link>
            ) : (
               <Link to={`${process.env.REACT_APP_PUBLIC_URL}/login`} className={s.button}>
                  <button className={s.buttonLogin}>Login Page</button>
               </Link>
            )}
         </div>
      </div>
   );
};

export default Main;

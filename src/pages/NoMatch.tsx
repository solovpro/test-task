import { Link } from 'react-router-dom';

import s from '../App.module.scss';

const NoMatch = () => {
   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>Pages is not found</h1>
         <div className={s.buttons}>
            <Link to={`test-task/`} className={s.button}>
               <button className={s.buttonMain}>MainPage</button>
            </Link>
         </div>
      </div>
   );
};

export default NoMatch;

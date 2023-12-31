import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ChildrenList from '../components/ChildrenList/ChildrenList';
import ParentList from '../components/ParentList/ParentList';

import { IFlattenDataEl, setState } from '../types';
import { flattenData } from '../helpers/flatten';
import { getData } from '../data/getData';

import s from '../App.module.scss';

interface BrowseProps {
   setIsLogin: setState<boolean>;
   setIsLogout: setState<boolean>;
   isLogout: boolean;
}

const Browse: React.FC<BrowseProps> = ({ setIsLogin, setIsLogout, isLogout }) => {
   const [data, setData] = useState<IFlattenDataEl[]>([]);

   const [filteredChilden, setFilteredChildren] = useState<IFlattenDataEl[]>([]);
   const [childen, setChildren] = useState<IFlattenDataEl[]>([]);

   const navigate = useNavigate();

   useEffect(() => {
      getData().then((res: any) => {
         const flattenedData = flattenData(res);

         setData(flattenedData);
      });
   }, []);

   useEffect(() => {
      if (isLogout) {
         navigate(`/login`);
      }
   }, [isLogout]);

   const logout = () => {
      setIsLogin(false);
      setIsLogout(true);
   };

   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>Browse Page</h1>
         <div className={s.buttons}>
            <Link to={`/`} className={s.button}>
               <button className={s.buttonMain}>Main Page</button>
            </Link>
            <button onClick={logout} className={s.buttonLogout}>
               Выйти
            </button>
         </div>
         <div className={s.data}>
            <ParentList
               data={data}
               setFilteredChildren={setFilteredChildren}
               setChildren={setChildren}
            />
            {!!filteredChilden.length && (
               <ChildrenList
                  childen={childen}
                  filteredChilden={filteredChilden}
                  setFilteredChildren={setFilteredChildren}
               />
            )}
         </div>
      </div>
   );
};

export default Browse;

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
}

const Browse: React.FC<BrowseProps> = ({ setIsLogin }) => {
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

   const logout = () => {
      setIsLogin(false);

      navigate(`${process.env.REACT_APP_PUBLIC_URL}/login`);
   };

   useEffect(() => {
      console.log(filteredChilden);
   }, [filteredChilden]);

   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>Browse Page</h1>
         <div className={s.buttons}>
            <Link to={`${process.env.REACT_APP_PUBLIC_URL}/`} className={s.button}>
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

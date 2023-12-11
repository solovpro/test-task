import cn from 'classnames';

import { IFlattenDataEl, setState } from '../../types';
import loading from '../../assets/icons/loading.gif';

import s from './ParentList.module.scss';

interface ParentListProps {
   data: IFlattenDataEl[];
   setFilteredChildren: setState<IFlattenDataEl[]>;
   setChildren: setState<IFlattenDataEl[]>;
}

const ParentList: React.FC<ParentListProps> = ({ data, setFilteredChildren, setChildren }) => {
   const onClickParent = (children: string[] | null) => {
      const filteredData = data?.filter((el) => children?.includes(el.key));

      setChildren(filteredData);
      setFilteredChildren(filteredData);
   };

   return (
      <div className={s.dataParent}>
         {data.length ? (
            data.map((el) => {
               const deepEl = el.key.split('-').filter((item) => item !== '_').length;
               return (
                  el.children?.length && (
                     <div
                        key={el.key}
                        className={cn(s.dataParent__Item, {
                           [s.dataParent__Deep1]: deepEl === 1,
                           [s.dataParent__Deep2]: deepEl === 2,
                           [s.dataParent__Deep3]: deepEl === 3,
                           [s.dataParent__Deep4]: deepEl === 4,
                        })}
                        onClick={() => onClickParent(el.children)}
                     >
                        <div>key: {el.key}</div>
                        <div>name: {el.name}</div>
                     </div>
                  )
               );
            })
         ) : (
            <div className={s.dataParent__Loading}>
               <p>Loading...</p>
               <img className={s.dataParent__LoadingImg} src={loading} alt='' />
            </div>
         )}
      </div>
   );
};

export default ParentList;

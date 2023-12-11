import ChildrenListHeader from './ChildrenListHeader/ChildrenListHeader';

import { IFlattenDataEl, setState } from '../../types';

import s from './ChildrenList.module.scss';

interface ChildrenListProps {
   childen: IFlattenDataEl[];
   filteredChilden: IFlattenDataEl[];
   setFilteredChildren: setState<IFlattenDataEl[]>;
}

const ChildrenList: React.FC<ChildrenListProps> = ({
   childen,
   filteredChilden,
   setFilteredChildren,
}) => (
   <div className={s.dataChildren}>
      <ChildrenListHeader
         childen={childen}
         filteredChilden={filteredChilden}
         setFilteredChildren={setFilteredChildren}
      />
      {filteredChilden.map((child: IFlattenDataEl) => (
         <div key={child.key} className={s.dataChildren__Item}>
            <div>key: {child.key}</div>
            <div>name: {child.name}</div>
         </div>
      ))}
   </div>
);

export default ChildrenList;

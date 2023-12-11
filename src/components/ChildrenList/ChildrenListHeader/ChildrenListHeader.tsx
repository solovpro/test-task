import { FormEvent, useState } from 'react';

import { IFlattenDataEl, setState } from '../../../types';

import s from '../ChildrenList.module.scss';

interface ChildrenListHeaderProps {
   childen: IFlattenDataEl[];
   filteredChilden: IFlattenDataEl[];
   setFilteredChildren: setState<IFlattenDataEl[]>;
}

const ChildrenListHeader: React.FC<ChildrenListHeaderProps> = ({
   childen,
   filteredChilden,
   setFilteredChildren,
}) => {
   const [sortByName, setSortByName] = useState<boolean>(true);
   const [searchValue, setSearchValue] = useState<string>('');

   const onSubmitForm = (e: FormEvent) => {
      e.preventDefault();

      const searchedElements = childen?.filter((el) => el.name.includes(searchValue));

      setFilteredChildren(searchedElements);
   };

   const sortedElements = (e: FormEvent) => {
      e.preventDefault();

      const sortedChildren = filteredChilden?.sort((a, b) =>
         sortByName ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
      );

      setFilteredChildren(sortedChildren);
      setSortByName((value) => !value);
   };
   return (
      <div className={s.dataChildren__Header}>
         <form className={s.dataChildren__HeaderForm} onSubmit={(e) => onSubmitForm(e)}>
            <input
               type='text'
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               className={s.dataChildren__HeaderForm_Input}
            />
            <button className={s.dataChildren__HeaderForm_Button} type={'submit'}>
               search
            </button>
         </form>
         <form onSubmit={(e) => sortedElements(e)}>
            <button className={s.dataChildren__HeaderSortButton}>sort by name</button>
         </form>
      </div>
   );
};

export default ChildrenListHeader;

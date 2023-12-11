import { IDataEl, IFlattenDataEl } from '../types';

export function flattenData(data: IDataEl[]): IFlattenDataEl[] {
   const result: IFlattenDataEl[] = [];

   function flatten(node: IDataEl) {
      const { key, name, children } = node;

      let childrenKeys: string[] | null = null;

      if (children?.length) {
         childrenKeys = children.map((child) => child.key);
      }

      const flattenedNode: IFlattenDataEl = { key, name, children: childrenKeys };

      result.push(flattenedNode);

      if (children && children.length > 0) {
         children.forEach((child) => {
            flatten(child);
         });
      }
   }

   data.forEach((node: IDataEl) => {
      flatten(node);
   });

   return result;
}

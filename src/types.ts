export type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IData {
   key: string;
   name: string;
}

export interface IDataEl extends IData {
   children?: this[];
}

export interface IFlattenDataEl extends IData {
   children: string[] | null;
}

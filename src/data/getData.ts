import { data } from './data';

export const getData = async () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(data);
      }, 1500);
   });
};

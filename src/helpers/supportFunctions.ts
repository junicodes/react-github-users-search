export function capitalizeFLetter(string: string=""): string {
  return string && string[0].toUpperCase() + string.slice(1);
}

// export const sortObjectArrayAsc =
//   (key: string | number) =>
//   (
//     a: { [x: string]: { toLowerCase: () => number } },
//     b: { [x: string]: { toLowerCase: () => number } }
//   ): number =>
//     a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1; // usecase string.sort(sortArray("name")) where name is the key to sort

// export const sortObjectArrayDec =
//   (key: string) =>
//   (
//     a: { [x: string]: { toLowerCase: () => number } },
//     b: { [x: string]: { toLowerCase: () => number } }
//   ): number =>
//     b[key].toLowerCase() > a[key].toLowerCase() ? 1 : -1; // usecase string.sort(sortArray("name")) where name is the key to sort

export const sortObjectArrayAsc = (key: string) => (a:any, b: any) => a[key].localeCompare(b[key]);
export const sortObjectArrayDesc = (key: string) => (a:any, b: any) => b[key].localeCompare(a[key]);

export const sortNumberAsc = (key: string) => (a: any, b: any) => a[key] -  b[key];
export const sortNumberDesc = (key: string) => (a: any, b: any) => b[key] -  a[key];

export const sortObjectItem = (key: string, order: string, type: string) => {
    if(type === 'object' && order === 'asc') return sortObjectArrayAsc(key);
    if(type === 'object' && order === 'desc') return sortObjectArrayDesc(key);
    if(type === 'number' && order === 'asc') return sortNumberAsc(key);
    if(type === 'number' && order === 'desc') return sortNumberDesc(key);
}

//Loadin State Helper Functio
export const removeLoadingState = (
  loading: string[],
  type: string
): string[] => {
  return loading.filter((l) => !l.includes(type));
};

export const getLoadingState = (loading: string[], type: string): boolean => {
  return loading.includes(type);
};

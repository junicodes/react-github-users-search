
export function capitalizeFLetter(string: string): string {
    return string && string[0].toUpperCase() + string.slice(1);
}

export const sortArray = (key: string) => (a: { [x: string]: { toLowerCase: () => number; }; }, b: { [x: string]: { toLowerCase: () => number; }; }) => a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1; // usecase string.sort(sortArray("name")) where name is the key to sort


//Loadin State Helper Functio
export const removeLoadingState = (loading: string[], type: string): string[] => {
    return loading.filter(l => !l.includes(type));
}

export const getLoadingState = (loading: string[], type: string): boolean => {
    return loading.includes(type);
}



export const TrueOrFalse = (bool: boolean | string) => {
   const booleanValue = typeof bool === 'string' ? bool === 'true' : bool;

   return booleanValue
      ? 'px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800'
      : 'px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800';
};

export const StatusStyle = (status: string) => {
   switch (status?.toLowerCase()) {
      case 'confirmed':
         return 'px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800 uppercase';
      case 'unconfirmed':
         return 'px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800 uppercase';
      case 'canceled':
         return 'px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800 uppercase';
      case 'old':
         return 'px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 uppercase';
      default:
         return 'px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 uppercase';
   }
};

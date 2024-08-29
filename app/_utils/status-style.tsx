export const StatusStyle = (status: string) => {
   switch (status.toLowerCase()) {
      case 'confirmed':
         return 'bg-green-100 text-green-800';
      case 'unconfirmed':
         return 'bg-yellow-100 text-yellow-800';
      case 'canceled':
         return 'bg-red-100 text-red-800';
      default:
         return 'bg-gray-100 text-gray-800';
   }
};

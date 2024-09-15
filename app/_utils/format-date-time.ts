export function formatDateTime(dateString: string) {
   const date = new Date(dateString);
   return date.toLocaleString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
   });
}

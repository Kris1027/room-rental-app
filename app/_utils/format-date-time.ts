export function formatDateTime(dateString: string) {
   const date = new Date(dateString);
   return date.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
   });
}

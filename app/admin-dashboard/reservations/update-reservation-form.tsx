import { reservationsProps } from '@/app/types/data-types';
import { updateReservationSchema } from '@/app/_schemas/reservations-zod';
import { z } from 'zod';

type FormFields = z.infer<typeof updateReservationSchema>;

export function UpdateReservationForm({
   setIsEditing,
   reservation,
}: {
   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
   reservation: reservationsProps;
}) {
   const handleCancel = () => {
      setIsEditing(false);
   };

   return <form>update form</form>;
}

import { getRoom } from '@/app/_lib/rooms-api';
import { formatDateTime } from '@/app/_utils/format-date-time';
import type { reservationsProps, roomsProps } from '@/app/types/data-types';
import { IconType } from 'react-icons';
import {
   FaBed,
   FaCalendarAlt,
   FaCheckCircle,
   FaClock,
   FaDollarSign,
   FaMoon,
   FaTag,
   FaTimesCircle,
   FaUsers,
} from 'react-icons/fa';

type ReservationStatus = 'confirmed' | 'unconfirmed' | 'canceled';
type StatusText =
   | 'Confirmed'
   | 'Unconfirmed'
   | 'Canceled'
   | 'Paid'
   | 'Not Paid';
type StatusColor = 'text-green-600' | 'text-yellow-600' | 'text-red-600';

type StatusProps = {
   icon: IconType;
   text: StatusText;
   color: StatusColor;
};

const InfoItem = ({
   icon: Icon,
   text,
   color = 'text-blue-500',
}: {
   icon: IconType;
   text: string;
   color?: string;
}) => (
   <div className='flex items-center space-x-3'>
      <Icon className={`w-5 h-5 ${color}`} />
      <p className={`text-gray-700 ${color}`}>{text}</p>
   </div>
);

const StatusItem = ({ icon: Icon, text, color }: StatusProps) => (
   <div className={`flex items-center space-x-2 ${color}`}>
      <Icon className='w-5 h-5' />
      <p className='text-sm font-semibold'>{text}</p>
   </div>
);

export async function ReservationCard({
   reservation,
}: {
   reservation: reservationsProps;
}) {
   const room = (await getRoom(reservation.room_id)) as roomsProps;
   const roomName = room?.name;
   const roomImage = room?.image_url;
   const roomDiscount = room?.discount * reservation.num_nights;
   const roomPrice = room?.regular_price;
   const roomTotalPrice = roomPrice * reservation.num_nights - roomDiscount;

   const getStatusText = (status: ReservationStatus): StatusText => {
      switch (status) {
         case 'confirmed':
            return 'Confirmed';
         case 'unconfirmed':
            return 'Unconfirmed';
         case 'canceled':
            return 'Canceled';
         default:
            return 'Unconfirmed';
      }
   };

   const getStatusColor = (status: ReservationStatus): StatusColor => {
      switch (status) {
         case 'confirmed':
            return 'text-green-600';
         case 'unconfirmed':
            return 'text-yellow-600';
         case 'canceled':
            return 'text-red-600';
         default:
            return 'text-yellow-600';
      }
   };

   return (
      <div className='bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-gray-200'>
         <div
            className='relative h-48 bg-cover bg-center'
            style={{ backgroundImage: `url(${roomImage})` }}
         >
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6'>
               <h2 className='text-2xl font-semibold text-white'>
                  Reservation #{reservation.id}
               </h2>
               <p className='text-sm text-white opacity-80'>
                  Created on {formatDateTime(reservation.created_at)}
               </p>
            </div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
            <InfoItem icon={FaBed} text={`Room: ${roomName}`} />
            <InfoItem
               icon={FaCalendarAlt}
               text={`${formatDateTime(
                  reservation.start_date
               )} - ${formatDateTime(reservation.end_date)}`}
            />
            <InfoItem
               icon={FaMoon}
               text={`${reservation.num_nights} night${
                  reservation.num_nights > 1 ? 's' : ''
               }`}
            />
            <InfoItem
               icon={FaUsers}
               text={`${reservation.num_guests} guest${
                  reservation.num_guests > 1 ? 's' : ''
               }`}
            />
            <InfoItem
               icon={FaDollarSign}
               text={`Regular price: $${roomPrice}/night`}
            />
            <InfoItem
               icon={FaDollarSign}
               text={`Total: $${roomTotalPrice.toFixed(2)}`}
            />
            <InfoItem
               icon={FaTag}
               text={`Discount: $${roomDiscount.toFixed(2)}`}
               color='text-green-600'
            />
         </div>
         <div className='bg-gray-100 px-6 py-4 flex justify-between items-center'>
            <StatusItem
               icon={FaClock}
               text={getStatusText(reservation.status as ReservationStatus)}
               color={getStatusColor(reservation.status as ReservationStatus)}
            />
            <StatusItem
               icon={reservation.is_paid ? FaCheckCircle : FaTimesCircle}
               text={reservation.is_paid ? 'Paid' : 'Not Paid'}
               color={reservation.is_paid ? 'text-green-600' : 'text-red-600'}
            />
         </div>
      </div>
   );
}

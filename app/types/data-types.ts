export type usersProps = {
   id: number;
   created_at: string;
   email: string;
   full_name: string;
   is_admin: boolean;
};

export type roomsProps = {
   id: number;
   created_at: string;
   name: string;
   description: string;
   regular_price: number;
   image_url: string;
   max_capacity: number;
   discount: number;
};

export type reservationsProps = {
   id: number;
   created_at: string;
   user_id: number;
   room_id: number;
   start_date: string;
   end_date: string;
   num_nights: number;
   num_guests: number;
   total_price: number;
   status: 'unconfirmed' | 'confirmed' | 'canceled';
   is_paid: 'Yes' | 'No';
};

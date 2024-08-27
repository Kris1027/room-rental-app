export type usersProps = {
   id: number;
   created_at: string;
   email: string;
   password: string;
   is_admin: boolean;
   full_name: string;
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

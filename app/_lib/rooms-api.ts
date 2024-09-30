import { supabase } from '@/app/_lib/supabase';
import { roomsProps } from '@/app/types/data-types';

export async function getRooms() {
   const { data: rooms, error } = await supabase.from('rooms').select('*');

   if (error) {
      console.error('Error fetching rooms:', error);
      return null;
   }

   return rooms;
}

export async function getRoom(roomId: number): Promise<roomsProps> {
   const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('id', roomId)
      .single();

   if (error) {
      throw new Error('Error fetching room data');
   }

   return data;
}

export async function getRoomByName(roomName: string) {
   const { data: room, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('name', roomName)
      .single();

   if (error) {
      console.error('Error fetching room:', error);
      return null;
   }

   return room;
}

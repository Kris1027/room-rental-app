import type {roomsProps} from '@/app/types/data-types';
import {Link} from 'next-view-transitions';
import Image from 'next/image';
import {FaDollarSign, FaEye, FaTag, FaUserFriends} from 'react-icons/fa';

export function RoomsListItem({room}: { room: roomsProps }) {
    return (
        <div
            className='bg-white border rounded-lg overflow-hidden shadow-lg transition-transform transform lg:hover:scale-105 duration-300 flex flex-col w-full'>
            <div className='relative'>
                <Image
                    src={room.image_url}
                    alt={room.name}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-48 object-cover'
                />
            </div>
            <div className='p-5 flex-grow flex flex-col'>
                <h2 className='text-xl font-bold text-gray-800 mb-3'>
                    {room.name}
                </h2>
                <div className='space-y-3'>
                    <div className='flex justify-between items-center text-gray-800 font-medium'>
                        <div className='flex items-center'>
                            <FaDollarSign size={24} className='mr-2 text-green-600'/>
                            <span>Price:</span>
                        </div>
                        <span className='font-bold text-gray-900'>
                     {room.regular_price} $
                  </span>
                    </div>
                    <div className='flex justify-between items-center text-gray-800 font-medium'>
                        <div className='flex items-center'>
                            <FaUserFriends size={24} className='mr-2 text-blue-500'/>
                            <span>Max Capacity:</span>
                        </div>
                        <span>{room.max_capacity}</span>
                    </div>
                    {room.discount > 0 && (
                        <div className='flex justify-between items-center text-green-600 font-semibold'>
                            <div className='flex items-center'>
                                <FaTag size={24} className='mr-2'/>
                                <span>Discount:</span>
                            </div>
                            <span>{room.discount}$</span>
                        </div>
                    )}
                </div>
            </div>
            <div className='p-4'>
                <Link
                    href={`/rooms/${room.id}`}
                    className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
                >
                <span
                    className="relative flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                    <FaEye className="h-5 w-5"/>
                    <span className="text-sm font-semibold">Details</span>
                </span>
                </Link>
            </div>
        </div>
    );
}

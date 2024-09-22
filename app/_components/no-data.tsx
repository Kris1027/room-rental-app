import { IconType } from 'react-icons';
import { FaRegFileAlt } from 'react-icons/fa';

export function NoData(
    { message = "No data available", icon: Icon = FaRegFileAlt, className = "" }:
    { message?: string, icon?: IconType, className?: string }
)
{
  return (
    <div className={`flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow-sm ${className}`}>
      <div className="text-gray-400 mb-4">
        <Icon size={48} />
             </div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{message}</h2>
      <p className="text-gray-500 text-center">
        No data found to display at the moment.
      </p>
    </div>
  );
};

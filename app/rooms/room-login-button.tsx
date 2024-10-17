import {Link} from "next-view-transitions";
import {FaUserCircle} from "react-icons/fa";

export function RoomLoginButton() {
    return (
        <Link
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
            href="/login"
        >
      <span
          className="relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        <FaUserCircle className="h-5 w-5"/>
        <span className="text-sm font-semibold">Login to make a reservation!</span>
      </span>
        </Link>
    );
}
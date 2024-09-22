export const StatusStyle = (status: string) => {
	switch (status?.toLowerCase()) {
		case "confirmed":
			return "px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800";
		case "unconfirmed":
			return "px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800";
		case "canceled":
			return "px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800";
		case "old":
			return "px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800";
		default:
			return "px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800";
	}
};

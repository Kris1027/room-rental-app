"use client";

import { Button } from "@/app/_components/button";
import { deleteMessageAction } from "@/app/_lib/actions/messages-action";
import { useTransition } from "react";
import { IoTrashBin } from "react-icons/io5";

export function DeleteButton({ messageId }: { messageId: number }) {
	const [isPending, startTransition] = useTransition();

	const handleDelete = async () => {
		startTransition(() => {
			deleteMessageAction(messageId);
		});
	};

	return (
		<Button onClick={handleDelete} disabled={isPending} variant="danger">
			<IoTrashBin />
			{isPending ? "Deleting..." : "Delete"}
		</Button>
	);
}

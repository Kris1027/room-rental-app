"use server";

import { supabase } from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateUserAction(formData: FormData) {
	const id = formData.get("id") as string;
	const email = formData.get("email") as string;
	const full_name = formData.get("full_name") as string;

	const updatedFields = {
		email,
		full_name,
	};

	const { error } = await supabase
		.from("users")
		.update(updatedFields)
		.eq("id", id);

	if (error) throw new Error("User could not be updated");

	revalidatePath("/account");
	redirect("/account");
}

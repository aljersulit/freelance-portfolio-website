'use client'

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sendContactEmail, State } from "@/lib/actions";

export default function ContactForm() {
	const initialState: State = { message: null, errors: {} };
	const [formState, action, isPending] = useActionState(
		sendContactEmail,
		initialState
	);
	return (
		<form
			action={action}
			className="border-2 border-red-200 w-[27rem] font-montserrat text-sm"
		>
			<div className="flex gap-1 mb-4">
				<label className="flex-1">
					First Name
					<input
						type="text"
						name="firstName"
						className="border-[1px] border-blue-500 block w-full leading-10"
					/>
				</label>
				<label className="flex-1">
					Last Name
					<input
						type="text"
						name="lastName"
						className="border-[1px] border-blue-500 block w-full leading-10"
					/>
				</label>
			</div>
			<label>
				Email
				<input
					type="email"
					name="email"
					className="border-[1px] border-blue-500 block leading-10 w-full mb-4"
				/>
			</label>

			<label>
				Message
				<textarea
					name="message"
					className="border-[1px] border-blue-500 resize-none block w-full h-32 mb-4"
				/>
			</label>
			<Button variant="default" type="submit">
				{isPending ? "Sending..." : "Send"}
			</Button>
		</form>
	);
}

















































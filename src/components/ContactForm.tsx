'use client'

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { sendContactEmail, FormState } from "@/lib/actions";
import { toast } from "sonner";

export default function ContactForm() {
	const initialState: FormState = {
		status: {},
		errors: {},
		contactFormData: {
			firstname: "",
			lastname: "",
			email: "",
			message: "",
		},
	};
	const [formState, action, isPending] = useActionState(
		sendContactEmail,
		initialState
	);

	const { errors, status, contactFormData } = formState;

	useEffect(() => {
		const { type, message } = status;

		switch (type) {
			case "Success":
				toast.success(message);
				break;
			case "Error":
				toast.error(message);
				break;
			default:
				toast(message);
		}
		console.log(formState);
	}, [formState.status]);

	return (
		<form
			action={action}
			aria-labelledby="form-message"
			className="border-2 border-red-200 w-[27rem] font-montserrat text-sm"
		>
			<div className="flex gap-1 mb-4">
				<div className="flex-1">
					<label>
						First Name
						<input
							type="text"
							name="firstname"
							className="border-[1px] border-blue-500 block w-full leading-10"
							defaultValue={
								!errors.firstname
									? contactFormData.firstname
									: ""
							}
							aria-describedby="firstname-error"
						/>
					</label>
					<div
						id="firstname-error"
						aria-live="polite"
						aria-atomic="true"
					>
						{errors?.firstname && (
							<p className="mt-2 text-sm text-red-500">
								{errors?.firstname[0]}
							</p>
						)}
					</div>
				</div>
				<div className="flex-1">
					<label>
						Last Name
						<input
							type="text"
							name="lastname"
							className="border-[1px] border-blue-500 block w-full leading-10"
							defaultValue={
								!errors.lastname ? contactFormData.lastname : ""
							}
							aria-describedby="lastname-error"
						/>
					</label>
					<div
						id="lastname-error"
						aria-live="polite"
						aria-atomic="true"
					>
						{errors?.lastname && (
							<p className="mt-2 text-sm text-red-500">
								{errors?.lastname[0]}
							</p>
						)}
					</div>
				</div>
			</div>
			<label>
				Email
				<input
					type="text"
					name="email"
					className="border-[1px] border-blue-500 block leading-10 w-full mb-4"
					defaultValue={!errors.email ? contactFormData.email : ""}
					aria-describedby="email-error"
				/>
			</label>
			<div id="email-error" aria-live="polite" aria-atomic="true">
				{errors?.email && (
					<p className="mt-2 text-sm text-red-500">
						{errors?.email[0]}
					</p>
				)}
			</div>
			<label>
				Message
				<textarea
					name="message"
					className="border-[1px] border-blue-500 resize-none block w-full h-32 mb-4"
					defaultValue={
						!errors.message ? contactFormData.firstname : ""
					}
					aria-labelledby="form-message-error"
				/>
			</label>
			<div id="form-message-error" aria-live="polite" aria-atomic="true">
				{errors?.message && (
					<p className="mt-2 text-sm text-red-500">
						{errors?.message[0]}
					</p>
				)}
			</div>
			<Button
				variant="default"
				type="submit"
				disabled={isPending}
				className="disabled:opacity-75 disabled:cursor-not-allowed"
			>
				{isPending ? "Sending..." : "Send"}
			</Button>
		</form>
	);

}
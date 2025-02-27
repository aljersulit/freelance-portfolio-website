'use client'

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sendContactEmail, State } from "@/lib/actions";

export default function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [formState, action, isPending] = useActionState(sendContactEmail, initialState)
  return (
    <form
        action={action}
				className="flex flex-col max-w-lg gap-2"
			>
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="border-2 border-blue-500"
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className="border-2 border-blue-500"
				/>
				<input
					type="text"
					name="company"
					placeholder="Company(optional)"
					className="border-2 border-blue-500"
				/>
				<textarea
					name="message"
					className="border-2 border-blue-500"
				></textarea>
				<Button variant="default" type="submit">
					{isPending ? "Sending..." : "Send"}
				</Button>
			</form>
  )
}

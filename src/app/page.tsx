import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/lib/actions";

export default function Home() {
	return (
		<main>
			<h1>Hello World!</h1>
			<form
				className="flex flex-col max-w-lg gap-2"
				action={sendContactEmail}
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
					Button
				</Button>
			</form>
		</main>
	);
}


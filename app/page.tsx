import Link from "next/link";
export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Link href="/users" className="px-4 py-2 rounded-full inline-block bg-blue-600 text-white">
				Users
			</Link>
		</div>
	);
}

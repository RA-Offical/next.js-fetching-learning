import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

async function Users() {
	const usersPromise: Promise<User[]> = getAllUsers();

	const users = await usersPromise;

	return (
		<div className="px-4">
			<h2 className="mt-2 mb-4 font-medium text-slate-700 text-2xl">Users</h2>

			<div>
				{users.map((user) => (
					<div key={user.id} className="mb-2 last:mb-0 py-3 bg-blue-100 px-4 rounded-md">
						<Link href={`/users/${user.id}`} className="hover:underline hover:text-blue-700">
							{user.name}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
export default Users;

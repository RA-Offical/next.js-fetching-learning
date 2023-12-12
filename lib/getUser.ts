export default async function getUser(userId: string): Promise<User> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	if (!response.ok) throw new Error("Something went wrong");
	return await response.json();
}

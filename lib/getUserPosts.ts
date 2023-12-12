export default async function getUserPosts(userId: string): Promise<Post[]> {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userid=${userId}`);
	if (!response.ok) throw new Error("Something went wrong");
	return await response.json();
}

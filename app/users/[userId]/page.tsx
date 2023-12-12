import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";

// defining type of params received
type Props = {
	params: { userId: string };
};

/**
 * This component represents the page for a specific user.
 * It is used to display information.
 */
async function User({ params: { userId } }: Props) {
	const user: Promise<User> = getUser(userId);
	const userPosts: Promise<Post[]> = getUserPosts(userId);

	const [userResult, userPostsResult] = await Promise.all([user, userPosts]);

	return (
		<div className="py-4">
			<h2 className="font-medium text-blue-500 text-2xl mb-4">{userResult.name}</h2>
			<UserPosts posts={userPostsResult} />
		</div>
	);
}
export default User;

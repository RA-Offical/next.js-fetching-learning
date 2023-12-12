import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";

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

	// const [userResult, userPostsResult] = await Promise.all([user, userPosts]);
	const userResult = await user;

	return (
		<div className="p-4">
			<h2 className="font-medium text-blue-500 text-2xl mb-4">{userResult.name}</h2>
			{/* <UserPosts posts={userPostsResult} /> */}
			<Suspense fallback={<p className="text-2xl text-red-500 text-center">Loading...</p>}>
				<UserPosts promise={userPosts} />
			</Suspense>
		</div>
	);
}
export default User;

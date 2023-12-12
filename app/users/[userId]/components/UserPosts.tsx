type Props = {
	posts: Post[];
};
function UserPosts({ posts }: Props) {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id} className="mb-2 last:mb-0">
					<h3 className="font-medium text-blue-400 text-lg capitalize">
						{post.title.slice(0, 30)}
					</h3>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}
export default UserPosts;

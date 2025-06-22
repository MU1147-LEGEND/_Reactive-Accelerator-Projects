export default function Posts({ posts, onDeletePost, onEditClick }) {

    return (
        <div>
            <h2>All Posts</h2>
            <div>
                <ul>
                    {posts.map((post,i) => (
                        <li key={post.id}>
                            <span>{i+1}</span>
                            <span>{post.title}</span>
                            <div>
                                <span onClick={() => onDeletePost(post.id)}>
                                    ❌
                                </span>
                                <span onClick={() => onEditClick(post)}>
                                    ✏️
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

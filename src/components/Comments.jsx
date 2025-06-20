import { lazy } from "react";
import { useEffect, useState } from "react";

const Comments = ({ postId }) => {
    const [comments, setComments] = useState();

    useEffect(() => {
        const getComments = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
                );
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            }
        };

        getComments();
    }, [postId]);

    return (
        <div className="bg-amber-300/50">
            <h1 className="mt-5">Comments</h1>
            <ul>
                {comments?.map((comment) => (
                    <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default Comments;

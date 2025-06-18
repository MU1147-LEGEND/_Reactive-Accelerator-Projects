import { useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import Posts from "./components/Posts";
import { useEffect } from "react";
import axios from "axios";
import api from "./api/api.js";
// import initialPosts from "./data/db.js";

export default function App() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null); // post I am editing
    const [error, setError] = useState(null);

    const handleAddPost = async (newPost) => {
        try {
            const id = posts.length
                ? Number(posts[posts.length - 1].id) + 1
                : 1;
            const finalPost = {
                id: id.toString(),
                ...newPost,
            };
            const { data } = await api.post("/posts", finalPost); /// === const response, response.data
            setPosts([...posts, data]);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            if (confirm("Are you sure you want to delete the post?")) {
                await api.delete(`/posts/${postId}`);
                const newPosts = posts.filter((post) => post.id !== postId);
                setPosts(newPosts);
            } else {
                console.log("You chose not to delete the post!");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleEditPost = async (updatedPost) => {
        try {
            const response = await api.patch(
                `/posts/${updatedPost.id}`,
                updatedPost
            );
            const updatedPosts = posts.map((post) => {
                if (post.id === updatedPost.id) return response.data;
                return post;
            });

            setPosts(updatedPosts);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/posts");

                if (response && response.data) setPosts(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <div>
                <h1>API Request with Axios</h1>
                <hr />

                <div>
                    <Posts
                        posts={posts}
                        onDeletePost={handleDeletePost}
                        onEditClick={setPost}
                    />

                    <hr />

                    {!post ? (
                        <AddPost onAddPost={handleAddPost} />
                    ) : (
                        <EditPost post={post} onEditPost={handleEditPost} />
                    )}
                </div>

                {error && (
                    <>
                        <br />
                        <hr />
                        <div className="error">{error}</div>
                    </>
                )}
            </div>
        </div>
    );
}

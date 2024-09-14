import React, { useEffect, useState } from "react";
import { getPosts, Post } from "./services/posts";

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getPosts();
                console.log("Posts from API:", postsData); // Logge die Daten, die von der API kommen
                setPosts(postsData); // Setze die Posts im State
            } catch (error) {
                console.error("Fehler beim Abrufen der Posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="App">
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <small>
                            Erstellt am:{" "}
                            {new Date(post.created_at).toLocaleDateString()}
                        </small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

import { useState } from "react";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

const App = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleSelectedPost = (e) => {
        setSelectedPostId(e.target.value);
    };
    return (
        <div className="w-4/5 m-auto bg-black/5">
            <p>React Suspense (not implimented)</p>

            <PostSelector onSelect={handleSelectedPost} />

            {selectedPostId && <Comments postId={selectedPostId} />}
        </div>
    );
};
export default App;

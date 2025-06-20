import { Suspense } from "react";
import { useState } from "react";
import { lazy } from "react";

const Comments = lazy(() => import("./components/Comments"));
const PostSelector = lazy(() => import("./components/PostSelector"));
const App = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleSelectedPost = (e) => {
        setSelectedPostId(e.target.value);
    };
    return (
        <div className="w-4/5 m-auto bg-black/5">
            <p>React Suspense (not implemented)</p>
            <Suspense fallback={<div>Loading Post Selector...</div>}>
                <PostSelector onSelect={handleSelectedPost} />
            </Suspense>

            {selectedPostId && (
                <Suspense fallback={<div>Loading Comments...</div>}>
                    <Comments postId={selectedPostId} />
                </Suspense>
            )}
        </div>
    );
};
export default App;

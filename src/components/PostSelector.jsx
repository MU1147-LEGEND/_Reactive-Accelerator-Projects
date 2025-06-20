import { useQuery } from "@tanstack/react-query";
import { callAxios } from "../api/callAxios";
import { PropagateLoader } from "react-spinners";

const PostSelector = ({ onSelect }) => {
    const getPosts = async ({ queryKey }) => {
        const response = await callAxios.get(`/${queryKey[0]}?_limit=5`);
        return response.data;
    };
    const { data, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });

    if (isLoading)
        return (
            <div className="w-full h-screen absolute inset-0 flex items-center justify-center m-auto bg-gray-400/50">
                <PropagateLoader />
            </div>
        );

    return (
        <div>
            <select onChange={onSelect}>
                <option value="">Select Post</option>
                {data?.map((post) => (
                    <option key={post.title} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default PostSelector;

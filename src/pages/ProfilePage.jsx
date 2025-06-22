import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";
import { useEffect } from "react";
import SinglePost from "../components/SinglePost";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(false);

    const { auth } = useAuth();
    const api = useAxios();

    const userId = auth.user.id;

    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            try {
                const response = await api.get(`/profile/${userId}`);
                setUser(response?.data?.user);
                setPosts(response?.data?.posts);
            } catch (err) {
                console.log(err);
                setError(err);
            } finally {
                // hide the loading
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId]);

    if(Loading) return;
    return (
        <>
            {user ? (
                <main className="mx-auto max-w-[1020px] py-8">
                    <div className="container">
                        {/* profile info */}
                        <div className="flex flex-col items-center py-8 text-center">
                            {/* profile image */}
                            <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
                                <img
                                    className="max-w-full"
                                    src="./assets/images/avatars/avatar_1.png"
                                    alt="sumit saha"
                                />
                                <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80">
                                    <img
                                        src="./assets/icons/edit.svg"
                                        alt="Edit"
                                    />
                                </button>
                            </div>
                            {/* name , email */}
                            <div>
                                <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                                    {user.firstName} {user.lastName}
                                </h3>
                                <p className="leading-[231%] lg:text-lg">
                                    {user.email}
                                </p>
                            </div>
                            {/* bio */}
                            <div className="mt-4 flex items-start gap-2 lg:mt-6">
                                <div className="flex-1">
                                    <p className="leading-[188%] text-gray-400 lg:text-lg">
                                        {user.bio}
                                    </p>
                                </div>
                                {/* Edit Bio button. The Above bio will be editable when clicking on the button */}
                                <button className="flex-center h-7 w-7 rounded-full">
                                    <img
                                        src="./assets/icons/edit.svg"
                                        alt="Edit"
                                    />
                                </button>
                            </div>
                            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8" />
                        </div>
                        {/* end profile info */}
                        <h4 class="mt-6 text-xl lg:mt-8 lg:text-2xl">
                            Your Posts
                        </h4>

                        {/* posts */}
                        {posts?.map((post) => (
                            <SinglePost user={user} post={post} />
                        ))}
                    </div>
                </main>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};
export default ProfilePage;

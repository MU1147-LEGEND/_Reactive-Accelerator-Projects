import like from "../assets/icons/like.svg";
import comment from "../assets/icons/comment.svg";
import time from "../assets/icons/time.svg";
import threeDots from "../assets/icons/3dots.svg";
import edit from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/delete.svg";
import share from "../assets/icons/share.svg";
import { useState } from "react";

const SinglePost = ({ user, post }) => {
    const [threeDotActive, setThreeDotActive] = useState(false);
    const [truncated, setTruncated] = useState(true);
    const isTruncatable = post.content.length > 200;

    const fullName = user.firstName + " " + user.lastName;

    const handleTruncate = () => {
        setTruncated(!truncated);
    };

    return (
        <>
            {/* post  */}
            <article className="card mt-6 lg:mt-8">
                {/* post header */}
                <header className="flex items-center justify-between gap-4">
                    {/* author info */}
                    <div className="flex items-center gap-3">
                        <img
                            className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                            src="./assets/images/avatars/avatar_1.png"
                            alt="avatar"
                        />
                        <div>
                            <h6 className="text-lg lg:text-xl">{fullName}</h6>
                            <div className="flex items-center gap-1.5">
                                <img src={time} alt="time" />
                                <span className="text-sm text-gray-400 lg:text-base">
                                    12 min ago
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* author info ends */}
                    {/* action dot */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                setThreeDotActive(!threeDotActive);
                            }}
                        >
                            <img src={threeDots} alt="3dots of Action" />
                        </button>
                        {/* Action Menus Popup */}
                        <div
                            className={`action-modal-container ${
                                !threeDotActive && "hidden"
                            }`}
                        >
                            <button className="action-menu-item hover:text-lwsGreen">
                                <img src={edit} alt="Edit" />
                                Edit
                            </button>
                            <button className="action-menu-item hover:text-red-500">
                                <img src={deleteIcon} alt="Delete" />
                                Delete
                            </button>
                        </div>
                    </div>
                    {/* action dot ends */}
                </header>
                {/* post header ends */}
                {/* post body */}
                <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
                    {/* If Post has Image, Render this block */}
                    <div className="flex items-center justify-center overflow-hidden">
                        {post.postType === "image" && (
                            <img
                                className="max-w-full"
                                src={post?.image}
                                alt="poster"
                            />
                        )}
                    </div>
                    {/* post content */}
                    <div>
                        <p
                            className={`overflow-hidden transition-all duration-500 ${
                                truncated ? "max-h-[4.5rem]" : "max-h-[500px]"
                            }`}
                            onClick={handleTruncate}
                        >
                            {post.content}
                        </p>
                        {isTruncatable && (
                            <span
                                className="text-gray-300 cursor-pointer inline"
                                onClick={handleTruncate}
                            >
                                {truncated && "..."}
                                see {truncated ? "more" : "less"}
                            </span>
                        )}
                    </div>
                </div>
                {/* post body ends */}
                {/* post actions */}
                <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
                    {/* Like Button */}
                    <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
                        <img src={like} alt="Like" />
                        <span>Like</span>
                    </button>
                    {/* Comment Button */}
                    <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
                        <img src={comment} alt="Comment" />
                        <span>Comment {post?.comments?.length}</span>
                    </button>
                    {/* Share Button */}
                    {/* Like Button */}
                    <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
                        <img src={share} alt="Share" />
                        <span>Share</span>
                    </button>
                </div>
                {/* post actions  */}
                {/* comment section */}
                <div>
                    {/* comment input box */}
                    <div className="flex-center mb-3 gap-2 lg:gap-4">
                        <img
                            className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                            src="./assets/images/avatars/avatar_1.png"
                            alt="avatar"
                        />
                        <div className="flex-1">
                            <input
                                type="text"
                                className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                                name="post"
                                id="post"
                                placeholder="What's on your mind?"
                            />
                        </div>
                    </div>
                    {/* comment filter button */}
                    <div className="mt-4">
                        <button className="text-gray-300 max-md:text-sm">
                            All Comment ▾
                        </button>
                    </div>
                    {/* comments */}
                    <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
                        {/* single comment */}
                        <div className="flex items-center gap-3 pt-4">
                            <img
                                className="max-w-6 max-h-6 rounded-full"
                                src="./assets/images/avatars/avatar_2.png"
                                alt="avatar"
                            />
                            <div>
                                <div className="flex gap-1 text-xs lg:text-sm">
                                    <span>Tapas Adhikari: </span>
                                    <span>Great Sumit Saha dada ❤</span>
                                </div>
                            </div>
                        </div>
                        {/* single comment ends */}
                        {/* single comment */}
                        <div className="flex items-center gap-3 pt-4">
                            <img
                                className="max-w-6 max-h-6 rounded-full"
                                src="./assets/images/avatars/avatar_1.png"
                                alt="avatar"
                            />
                            <div>
                                <div className="flex gap-1 text-xs lg:text-sm">
                                    <span>Sumit Saha: </span>
                                    <span>Great Sumit Saha dada ❤</span>
                                </div>
                            </div>
                        </div>
                        {/* single comment ends */}
                    </div>
                    {/* comments ends */}
                </div>
                {/* comment section ends */}
            </article>
            {/* post ends */}
        </>
    );
};
export default SinglePost;

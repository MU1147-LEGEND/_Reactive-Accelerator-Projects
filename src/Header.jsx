import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="dock dock-xl">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "dock-active" : "")}
            >
                <button className="flex items-center justify-center flex-col">
                    <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="currentColor"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                        >
                            <polyline
                                points="1 11 12 2 23 11"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></polyline>
                            <path
                                d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></path>
                            <line
                                x1="12"
                                y1="22"
                                x2="12"
                                y2="18"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></line>
                        </g>
                    </svg>
                    <span className="dock-label">Home</span>
                </button>
            </NavLink>

            <NavLink
                to="/inbox"
                className={({ isActive }) => (isActive ? "dock-active" : "")}
            >
                <button className="flex items-center justify-center flex-col">
                    <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="currentColor"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                        >
                            <polyline
                                points="3 14 9 14 9 17 15 17 15 14 21 14"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></polyline>
                            <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></rect>
                        </g>
                    </svg>
                    <span className="dock-label">Inbox</span>
                </button>
            </NavLink>

            <NavLink
                to="/setting"
                className={({ isActive }) => (isActive ? "dock-active" : "")}
            >
                <button className="flex items-center justify-center flex-col">
                    <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="currentColor"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="3"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></circle>
                            <path
                                d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="square"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></path>
                        </g>
                    </svg>
                    <span className="dock-label">Settings</span>
                </button>
            </NavLink>

            <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "dock-active" : "")}
            >
                <button className="flex items-center justify-center flex-col">
                    {/* svg */}
                    <svg
                        className="size-[1.2em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="currentColor"
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                        >
                            <path
                                d="M3 12h18v8H3z"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></path>
                            <path
                                d="M3 4h18v8H3z"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            ></path>
                        </g>
                    </svg>
                    <span className="dock-label">Dashboard</span>
                </button>
            </NavLink>
        </div>
    );
};
export default Header;

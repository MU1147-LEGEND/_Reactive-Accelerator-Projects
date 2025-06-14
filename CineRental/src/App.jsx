import Header from "./Header";
import SideBar from "./SideBar";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    {/* sidebar */}
                    <SideBar />
                    {/* main content */}
                </div>
            </main>
        </>
    );
};
export default App;

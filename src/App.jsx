import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
    return (
        <Routes>
            {/* private/protected routes */}
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="me" element={<ProfilePage />} />
            </Route>
            {/* public/open routes */}
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
export default App;

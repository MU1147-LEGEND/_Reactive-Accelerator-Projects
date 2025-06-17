import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./App.jsx";
import Cart from "./Cart.jsx";
import Dashboard from "./Dashboard.jsx";
import Header from "./Header.jsx";
import Inbox from "./Inbox.jsx";
import "./index.css";
import Notifications from "./Notifications.jsx";
import OrderId from "./OrderId.jsx";
import Orders from "./Orders.jsx";
import Profile from "./Profile.jsx";
import ReturnOrder from "./ReturnOrder.jsx";
import Setting from "./Setting.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<Profile />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="orders/:id" element={<OrderId />} />
                    <Route path="orders/returns" element={<ReturnOrder />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

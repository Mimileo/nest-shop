import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const [pageTitle, setPageTitle] = useState("");
   

    const formatPageTitle = (path) => {
        switch (path) {
            case "/":
                return "Home";
            case "/products":
                return "Products";
            case "/about":
                return "About";
            case "/contact":
                return "Contact";
            default:
                return "";
        }
    };

    useEffect(() => {
        setPageTitle(formatPageTitle(location.pathname));
    }, [location]);

    return (
        <header className="bg-gray-800 text-white shadow-md ">
            <div className="flex items-center justify-between p-4">

                <div className="header-left">
                    <div className="header-title">
                        <h1 className="text-2xl font-semibold text-amber-50">
                        {pageTitle}
                        </h1>
                    </div>
                </div>
                <div className="header-right flex-items-center">
                    <div className="header-profile">
                        <img className="h-10 w-10 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" alt="Profile"></img>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
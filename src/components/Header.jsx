import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const [pageTitle, setPageTitle] = useState("");
   

    const formatPageTitle = (path) => {
        switch (path) {
            case "/products":
                return "Welcome, User";
           default:
                return "";
        }
    };

    useEffect(() => {
        setPageTitle(formatPageTitle(location.pathname));
    }, [location]);

    return (
        <header className="text-4xl font-bold text-emerald-600 mb-8 animate-bounce-slow max-w-7xl mx-auto w-full px-4">
            <div className="flex items-center justify-between">

                <div className="header-left">
                    <div className="header-title">
                        <h1 className="text-2xl font-semibold">
                        {pageTitle}
                        </h1>
                    </div>
                </div>
                {pageTitle === "Welcome, User" && (
                    <div className="header-right flex-items-center">
                    <div className="header-profile">
                        <img 
                            className="h-10 w-10 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:scale-110 focus:outline-none" 
                            src="https://api.dicebear.com/9.x/thumbs/svg?seed=Luis" 
                            alt="Profile">

                        </img>
                    </div>
                </div>
                )}
                


            </div>
        </header>
    );
};

export default Header;
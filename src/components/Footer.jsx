import { Link } from "react-router-dom";
import { navLinks, policyLinks } from "../config/nav.config";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    
    return (
        <footer className="bg-emerald-500 text-white hover:text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-50 dark:text-white mb-4">
                            NestShop
                        </h3>
                        <p className="text-primary-700 dark:text-gray-300">
                            Tech, fashion, and more.
                        </p>
                    </div>

                    <nav aria-label="footer navigation">
                        <h3 className="text-lg font-semibold text-emerald-50 dark:text-white mb-4">
                            Explore
                        </h3>
                        <ul className="space-y-2 text-primary-700 dark:text-gray-300">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        className="hover:text-primary-800 dark:hover:text-white" 
                                        to={link.href}>{link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="contact-info">
                        <h3 className="text-lg font-semibold text-emerald-50 mb-4">
                            Contact Us
                        </h3>
                        <p className="text-primary-700 dark:text-gray-300">Email: bizznest@digitalnest.org</p>
                        <p className="text-primary-700 dark:text-gray-300">Phone: +1 831-285-0209</p>
                    </div>
                </div>


                <div className="mt-8 border-t border-emerald-200"></div>
                <div className="mt-8">
                    <p className="text-sm text-center text-primary-700">
                        &copy; {currentYear} BizzNest Creative Agency. All rights reserved.
                    </p>
                    <div className="mt-2 flex flex-row space-x-4 justify-center ">
                        {policyLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="text-sm text-primary-700 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

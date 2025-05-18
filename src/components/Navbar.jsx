// src/components/Navbar.jsx
import { Link } from "react-router-dom"
import { useCartStore } from "../stores/useCartStore"
import { ShoppingCart } from "lucide-react";
import CartCard from "./CartCard";
import { useRef, useCallback } from "react";
import useClickOutside from "../utils/hooks/useClickOutside";
const Navbar = () => {

    const cart = useCartStore(state => state.cart);

    const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);


    const isCartOpen = useCartStore((state) => state.isCartOpen);
    const toggleCart = useCartStore((state) => state.toggleCart);

    const cartRef = useRef(null);

    const closeCart = useCallback(() => {
        if (isCartOpen) {
            toggleCart();
        }
    }, [isCartOpen, toggleCart]);

    useClickOutside(cartRef, closeCart, isCartOpen);
    

    return(
        <header className="fixed top-0 w-full bg-white text-emerald-700 shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}

                <Link to="/" className="text-2xl font-bold text-emerald-600">
                    DigiatlNest Shop
                </Link>

                

                {/* Navigation links */}
               <nav className="flex items-center gap-6">
                <ul className="flex items-center gap-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <div className="relative">
                        <button
                           
                            type="button"
                            onClick={toggleCart}  

                            className="relative flex items-center text-emerald-600 hover:text-emerald-800 focus:outline-none"
                        >

                            <ShoppingCart size={24} />

                            {itemCount > 0 && (
                                <div  className="absolute -top-2 left-4">
                                    <p className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                        {itemCount}
                                    </p>
                                </div>
                            )}
                        </button>

                        {/* Cart Card - Popup */}
                        {isCartOpen && (
                            <div className="absolute right-0 mt-2 w-96 bg-white rounded shadow-lg border border-gray-200 z-50
                                transform transition duration-300 ease-out origin-top-right"
                                ref={cartRef}
                            >
                                <CartCard />
                            </div>
                        )}

                    </div>
                </ul>
               </nav>
            </div>
        </header>
    )
    
}

export default Navbar;
// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import { ShoppingCart } from "lucide-react";
import CartCard from "./CartCard";
import { useRef, useCallback, useState } from "react";
import useClickOutside from "../utils/hooks/useClickOutside";
import Logo from "./Logo";
const Navbar = () => {
  const cart = useCartStore((state) => state.cart);

  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);

  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!MobileMenuOpen);

  const cartRef = useRef(null);

  const closeCart = useCallback(() => {
    if (isCartOpen) {
      toggleCart();
    }
  }, [isCartOpen, toggleCart]);

  useClickOutside(cartRef, closeCart, isCartOpen);

  return (
    <header className="fixed top-0 w-full bg-white text-emerald-700 shadow-md z-50">
      <div className="container mx-auto px-1 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Logo />

          <Link to="/" className="text-2xl font-bold text-emerald-600">
            DigiatlNest Shop
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="relative">
          <button
            type="button"
            onClick={toggleCart}
            className="relative flex items-center text-emerald-600 hover:text-emerald-800 focus:outline-none"
          >
            <ShoppingCart size={24} />

            {itemCount > 0 && (
              <div className="absolute -top-2 left-4">
                <p className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {itemCount}
                </p>
              </div>
            )}
          </button>

          {/* Cart Card - Popup */}
          {isCartOpen && (
            <div
              className="cart-popup fixed mt-2 right-0 bg-white rounded shadow-lg border border-gray-200 z-50
           transform transition duration-300 ease-out w-72 sm:w-80 md:w-96 max-h-[80vh] overflow-auto"
              ref={cartRef}
            >
              <CartCard />
            </div>
          )}
        </div>

        {/* Mobile Navigation */}

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-emerald-600 hover:text-emerald-800 focus:outline-none"
        >
          {MobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu  */}

      {MobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMobileMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

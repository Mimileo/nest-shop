
import { Link, Route, Routes } from 'react-router-dom'
import ProductCard from './components/ProductCard'
import Navbar from "./components/Navbar";
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import  ShopPage  from './pages/ShopPage';
import  AboutPage  from './pages/AboutPage';

function App() {

 
  return (
		<div className='min-h-screen bg-emerald-900 text-white relative overflow-hidden'>
      { /*background*/ }
      <div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
            bg-[radial-gradient(ellipse_at_top,rgba(220,220,220,0.5)_0%,rgba(180,180,180,0.3)_45%,rgba(255,255,255,0)_100%)]'
          />
				</div>
			</div>


      <div className='relative z-50 pt-20'>
        { /* Navigation bar area*/ }
         <Navbar />

         <Routes>

            <Route 
              path='/' 
              element={<HomePage />} 
            />
            <Route 
              path="/products" 
              element={<ShopPage />}
             />
          
            <Route 
              path="/products/:id" 
              element={<ProductPage />}
             />

              <Route 
              path="/about" 
              element={<AboutPage />}
             />
              <Route 
              path="/contact" 
              element={<ContactPage />}
             />
         </Routes>

      </div>
    </div>
  )
}

export default App

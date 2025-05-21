
import {Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import  ShopPage  from './pages/ShopPage';
import  AboutPage  from './pages/AboutPage';
import MainLayout from './Layouts/MainLayout';





const App = () => {
  return (
    <MainLayout>
    
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
      
        
    </MainLayout>
  )
}

export default App

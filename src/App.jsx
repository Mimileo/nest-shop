
import {Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Products/ProductPage';
import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import  ShopPage  from './pages/ShopPage';
import  AboutPage  from './pages/About/AboutPage';
import MainLayout from './components/Layouts/MainLayout';





const App = () => {
  return (
    <MainLayout>
    
         <Routes>

            <Route 
              path='/nest-shop/' 
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

import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";


{/* the root layout*/}
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-200 relative overflow-hidden">
        {/*background gradient*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0">
            <div
             className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
              bg-[radial-gradient(ellipse_at_top,_rgba(209,250,229,0.3)_0%,_rgba(156,163,175,0.1)_40%,_rgba(255,255,255,0)_100%)] 
              pointer-events-none"
            />
          </div>
        </div>
       
       {/*content*/}
         <Navbar />
        <main className="flex-grow pt-16 pb-16 relative z-10 w-full">
            <Header />
          <div className="max-w-7xl mx-auto w-full px-4">
            <div className="main-layout-content p-4">{children}</div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";

const MainLayout = ({ children, openSearchModal }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen bg-dex-bg-primary text-dex-text-primary">
      {/* Only render the sidebar on the homepage */}
      {isHomePage && <LeftSidebar openSearchModal={openSearchModal} />}
      
      <main className={`flex-1 flex flex-col transition-all duration-500 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
        {children}
      </main>
      
      {/* Floating meme coin animation in the corner */}
      <div className="fixed bottom-4 right-4 z-50 animate-float hidden md:block">
        <div className="bg-dex-bg-secondary p-2 rounded-full shadow-lg shadow-purple-500/20 cursor-pointer hover:scale-110 transition-transform duration-300">
          <span role="img" aria-label="rocket" className="text-2xl">🚀</span>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

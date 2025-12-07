import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";
import TokenPage from "./pages/TokenPage";
import SearchModal from "./components/modals/SearchModal";
import PortfolioPage from "./pages/PortfolioPage";
import PumpFunPage from "./pages/PumpFunPage";

// Navigation component that appears on all pages except homepage
const TopNavigation = ({ openSearchModal }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  if (isHomePage) return null;
  
  return (
    <div className="bg-dex-bg-secondary border-b border-dex-border py-3 px-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2 mr-6">
          <span className="text-2xl">🚀</span>
          <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">MemeCypher</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          <Link to="/trending" className="flex items-center px-3 py-1 text-sm rounded hover:bg-dex-bg-highlight transition-colors">
            <span className="mr-2">📈</span> Trending
          </Link>
          <Link to="/pumpfun" className="flex items-center px-3 py-1 text-sm rounded hover:bg-dex-bg-highlight transition-colors">
            <span className="mr-2">🚀</span> Pump.fun
          </Link>
          <Link to="/portfolio" className="flex items-center px-3 py-1 text-sm rounded hover:bg-dex-bg-highlight transition-colors">
            <span className="mr-2">💰</span> Portfolio
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* Search button */}
        <button 
          onClick={openSearchModal}
          className="flex items-center bg-dex-bg-tertiary rounded p-2 hover:bg-dex-bg-highlight transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-dex-text-secondary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center bg-dex-bg-tertiary rounded p-2 hover:bg-dex-bg-highlight transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-dex-text-secondary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dex-bg-secondary border-b border-dex-border py-2 px-4 z-20 animate-fade-in">
          <div className="flex flex-col space-y-2">
            <Link 
              to="/trending" 
              className="flex items-center px-3 py-2 text-sm rounded hover:bg-dex-bg-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-2">📈</span> Trending
            </Link>
            <Link 
              to="/pumpfun" 
              className="flex items-center px-3 py-2 text-sm rounded hover:bg-dex-bg-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-2">🚀</span> Pump.fun
            </Link>
            <Link 
              to="/portfolio" 
              className="flex items-center px-3 py-2 text-sm rounded hover:bg-dex-bg-highlight transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-2">💰</span> Portfolio
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to create a loading effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`bg-dex-bg-primary text-dex-text-primary min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <MainLayout openSearchModal={() => setSearchModalOpen(true)}>
          <TopNavigation openSearchModal={() => setSearchModalOpen(true)} />
          <div className="animate-slide-in">
            <Routes>
              <Route path="/" element={<HomePage openSearchModal={() => setSearchModalOpen(true)} />} />
              <Route path="/trending" element={<TrendingPage />} />
              <Route path="/:chainId" element={<TrendingPage />} />
              <Route path="/:chainId/:tokenAddress" element={<TokenPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/pumpfun" element={<PumpFunPage />} />
            </Routes>
          </div>
        </MainLayout>

        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;

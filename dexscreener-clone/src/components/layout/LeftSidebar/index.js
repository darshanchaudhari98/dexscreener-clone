import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchButton from "./SearchButton";
import NavigationMenu from "./NavigationMenu";
import ChainSelector from "./ChainSelector";

const LeftSidebar = ({ openSearchModal }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleChainSelect = (chainId) => {
    navigate(`/${chainId}`);
  };

  return (
    <div className="w-64 bg-dex-bg-secondary text-dex-text-primary flex flex-col border-r border-dex-border h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <Link to="/" className="block">
          <div 
            className={`flex flex-col transition-all duration-300 transform ${isHovered ? 'scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-dex-green text-xl font-mono">
                <span className="text-2xl">🚀</span>
              </span>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">MemeCypher</span>
            </div>
            <span className="text-xs text-dex-text-secondary ml-7">
              Meme Coin Analytics
            </span>
          </div>
        </Link>
        <SearchButton openSearchModal={openSearchModal} />
        <NavigationMenu />
        <ChainSelector />
      </div>
    </div>
  );
};

export default LeftSidebar;

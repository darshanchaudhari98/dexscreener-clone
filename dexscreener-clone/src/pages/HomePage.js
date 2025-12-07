import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChainSelector from '../components/layout/LeftSidebar/ChainSelector';

const HomePage = ({ openSearchModal }) => {
  const navigate = useNavigate();

  // Define the function cards that will be displayed on the homepage
  const functionCards = [
    {
      id: 'trending',
      title: 'Trending Tokens',
      description: 'Explore the hottest meme coins across all chains',
      icon: '📈',
      path: '/trending',
      color: 'from-purple-500 to-indigo-600',
      hoverEffect: 'hover:shadow-purple-500/30'
    },
    {
      id: 'pumpfun',
      title: 'Pump.fun Tokens',
      description: 'Discover the latest Pump.fun meme coins',
      icon: '🚀',
      path: '/pumpfun',
      color: 'from-pink-500 to-rose-500',
      hoverEffect: 'hover:shadow-pink-500/30'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Track your meme coin investments',
      icon: '💰',
      path: '/portfolio',
      color: 'from-green-400 to-emerald-500',
      hoverEffect: 'hover:shadow-green-500/30'
    },
    {
      id: 'search',
      title: 'Search Tokens',
      description: 'Find specific tokens across all chains',
      icon: '🔍',
      path: '#',
      color: 'from-blue-400 to-cyan-500',
      hoverEffect: 'hover:shadow-blue-500/30',
      isSearch: true
    }
  ];

  // Handle card click - either navigate to the path or trigger search modal
  const handleCardClick = (card) => {
    if (card.isSearch && openSearchModal) {
      openSearchModal();
    } else {
      navigate(card.path);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section with logo */}
      <div className="flex flex-col items-center justify-center mb-12 animate-fade-in">
        <div className="flex items-center mb-4 transform hover:scale-105 transition-transform duration-300">
          <span className="text-4xl mr-2 animate-float">🚀</span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-glow">
            MemeCypher
          </h1>
        </div>
        <p className="text-xl text-dex-text-secondary max-w-2xl mx-auto text-center">
          Your ultimate platform for tracking and analyzing meme coins across multiple blockchains
        </p>
      </div>

      {/* Function cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {functionCards.map((card) => (
          <div
            key={card.id}
            className={`bg-dex-bg-secondary rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${card.hoverEffect} cursor-pointer animate-fade-in`}
            onClick={() => handleCardClick(card)}
          >
            <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3 animate-float">{card.icon}</span>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <p className="text-dex-text-secondary">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Networks section */}
      <div className="bg-dex-bg-secondary rounded-xl p-6 shadow-lg mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6">Select Network</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          <NetworkButton icon="🌐" name="All Chains" onClick={() => navigate('/')} />
          <NetworkButton icon="☀️" name="Solana" onClick={() => navigate('/solana')} />
          <NetworkButton icon="💎" name="Ethereum" onClick={() => navigate('/ethereum')} />
          <NetworkButton icon="🔶" name="BSC" onClick={() => navigate('/binance')} />
          <NetworkButton icon="🅱️" name="Base" onClick={() => navigate('/base')} />
          <NetworkButton icon="🔵" name="Arbitrum" onClick={() => navigate('/arbitrum')} />
          <NetworkButton icon="🟣" name="Polygon" onClick={() => navigate('/polygon')} />
          <NetworkButton icon="❄️" name="Avalanche" onClick={() => navigate('/avalanche')} />
          <NetworkButton icon="⚡" name="Optimism" onClick={() => navigate('/optimism')} />
          <NetworkButton icon="📈" name="Linea" onClick={() => navigate('/linea')} />
          <NetworkButton icon="👻" name="Fantom" onClick={() => navigate('/fantom')} />
          <NetworkButton icon="💓" name="Pulse" onClick={() => navigate('/pulse')} />
        </div>
      </div>

      {/* Featured tokens section */}
      <div className="animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Meme Coins</h2>
        <div className="bg-dex-bg-secondary rounded-xl p-6 shadow-lg">
          <p className="text-center text-dex-text-secondary mb-6">
            Connect to the trending page to discover the hottest meme coins right now!
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => navigate('/trending')} 
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            >
              Explore Trending
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Network button component for the homepage
const NetworkButton = ({ icon, name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-3 bg-dex-bg-tertiary rounded-lg hover:bg-dex-bg-highlight transition-colors hover:scale-105 transform duration-200"
    >
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-xs sm:text-sm font-medium">{name}</span>
    </button>
  );
};

export default HomePage;
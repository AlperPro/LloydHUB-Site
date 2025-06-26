import React, { useState } from 'react';
import { Download, Code, Search, Star, Github, BookOpen, Users, TrendingUp, Home, HelpCircle, Heart, Gamepad2 } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="grid lg:grid-cols-1 gap-8">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Script Hub
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  The ultimate collection of scripts, carefully curated and regularly updated
                </p>
              </div>

              {/* Version Info */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="/channels4_profile.jpg" 
                    alt="LloydHUB Logo" 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-white">LloydHUB Script HUB v2.1</h2>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-medium">Script HUB</span>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-green-500 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <Gamepad2 className="w-6 h-6 text-green-400" />
                      <div>
                        <h3 className="text-white font-semibold">Scripts</h3>
                        <p className="text-gray-400 text-sm">Specialized scripts designed for games</p>
                      </div>
                    </div>
                  </div>

                
                  <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-green-500 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                      <div>
                        <h3 className="text-white font-semibold">Regular Updates</h3>
                        <p className="text-gray-400 text-sm">Scripts is trying to get updated with every game update</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-green-500 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-6 h-6 text-green-400" />
                      <div>
                        <h3 className="text-white font-semibold">Detailed Guides</h3>
                        <p className="text-gray-400 text-sm">Step-by-step setup instructions for each script</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Browse Button */}
              
              </div>

              {/* Script Categories Section */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4">Script Categories</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-center hover:border-green-500 transition-colors duration-200">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h3 className="text-white font-semibold">Features for each game is easy to use!</h3>
                    <p className="text-gray-400 text-sm">(We only have azure latch vfx script btw sorry for lying about this. New scripts are planned later.)</p>
                  </div>
                 
                 
                </div>
              </div>
            </div>
          </div>
        );

        case 'scripts':
          const handleDownload = async () => {
            const response = await fetch("https://raw.githubusercontent.com/AlperPro/Roblox-Scripts/main/loadstring.lua");
            const text = await response.text();
        
            const blob = new Blob([text], { type: "text/plain" });
            const url = window.URL.createObjectURL(blob);
        
            const a = document.createElement("a");
            a.href = url;
            a.download = "loadstring.lua";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          };
        
          return (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Scripts</h1>
                <p className="text-gray-400">Browse our collection of games from Script HUB</p>
              </div>
        
            
        
              {/* Script Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1].map((script) => (
                  <div key={script} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm hover:border-green-500 transition-colors duration-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Code className="w-6 h-6 text-green-400" />
                      <h3 className="text-white font-semibold">Azure Latch Fake Style VFX Script</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400 text-sm">4.9/5</span>
                      </div>
                      <button
                        onClick={handleDownload}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                      >
                        <Download className="w-4 h-4 inline mr-1" />
                        Get Script
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        

      case 'tutorial':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">How to Use Script</h1>
              <p className="text-gray-400">Step-by-step guide to get started with our scripts</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Step 1: Get an Executor</h3>
                  <p className="text-gray-400">Download a reliable Roblox script executor like KRNL, Swift, Velocity & Volcano is the best.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Step 2: Join The Game(should be supported by script)</h3>
                  <p className="text-gray-400">Open Roblox and join the game before running any scripts.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Step 3: Copy Script</h3>
                  <p className="text-gray-400">Copy the script code from our hub and paste it into your executor.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">Step 4: Execute</h3>
                  <p className="text-gray-400">Click execute in your script executor and enjoy the enhanced gameplay!</p>
                </div>
              </div>
            </div>
          </div>
        );

        case 'credits':
          return (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Credits & Contributors</h1>
                <p className="text-gray-400">Thanks to everyone who made this hub possible</p>
              </div>
        
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4">Development Team</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/lloydgarmadon43.gif"
                        alt="lloydgarmadon43"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white font-semibold">lloydgarmadon43</p>
                        <p className="text-gray-400 text-sm">Owner, Lead Developer & Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4">Special Thanks</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400">• LloydHUB community for feedback</p>
                    <p className="text-gray-400">• Rayfield UI Library</p>
                  </div>
                </div>
              </div>
            </div>
          );
        

      case 'donate':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">Support LloydHUB</h1>
              <p className="text-gray-400">Help us keep the hub running and scripts updated</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm text-center">
              <Heart className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Your Support Matters</h3>
              <p className="text-gray-400 mb-6">
                Donations help us maintain servers, develop new scripts, and keep everything free for the community.
              </p>
              <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                <Heart className="w-5 h-5 inline mr-2" />
               Coming Soon...
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/channels4_profile.jpg" 
                alt="LloydHUB Logo" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-2xl font-bold text-white">LloydHUB</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  activeTab === 'home' 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('scripts')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  activeTab === 'scripts' 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Scripts</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('tutorial')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  activeTab === 'tutorial' 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Tutorial</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('credits')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  activeTab === 'credits' 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Credits</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('donate')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 font-medium ${
                  activeTab === 'donate' 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Donate</span>
              </button>
            </nav>

            {/* GitHub Icon */}
           
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/30 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 LloydHUB. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Script Hub - For educational purposes only. Use responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
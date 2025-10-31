import React from 'react';

const TailwindDemo = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Tailwind CSS Demo Components
        </h2>
        <p className="text-gray-600 text-lg">
          Beautiful, responsive components built with Tailwind CSS
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h3>
            <p className="text-gray-600 mb-4">
              This is a beautiful card component with gradients and shadows.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 h-32"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Another Card</h3>
            <p className="text-gray-600 mb-4">
              Responsive design that works on all devices and screen sizes.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-pink-500 to-red-600 h-32"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Third Card</h3>
            <p className="text-gray-600 mb-4">
              Easily customizable with Tailwind's utility-first approach.
            </p>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Feature List */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Tailwind CSS Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            '🎨 Utility-first CSS framework',
            '📱 Responsive design out of the box',
            '🔧 Highly customizable',
            '⚡ Fast development',
            '🎭 Beautiful default colors',
            '📦 Small bundle size'
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TailwindDemo;

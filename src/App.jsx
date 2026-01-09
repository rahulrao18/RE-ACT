import React, { useState } from 'react';

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [hearts] = useState(() =>
    Array.from({ length: 200 }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 5}s`,
      delay: `${Math.random() * 5}s`,
      size: `${12 + Math.random() * 20}px`,
    }))
  );

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Hearts layer - fades in with message */}
      <div className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
        {hearts.map((heart, i) => (
          <span
            key={i}
            className="absolute bottom-[-100px] animate-floatUp opacity-80"
            style={{
              left: heart.left,
              animationDuration: heart.duration,
              animationDelay: heart.delay,
              fontSize: heart.size,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Initial Card - fades out when clicked */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showMessage ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="bg-white/5 p-8 rounded-lg shadow-lg text-center max-w-md mx-4">
          <p className="text-xl mb-6 text-white/80">
            Here is a sweet message for you Shonu...
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            onClick={() => setShowMessage(true)}
          >
            See the message
          </button>
        </div>
      </div>

      {/* Love Message - fades in when clicked */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showMessage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-90">
          {/* Border layer with pulse */}
          <div className="absolute inset-0 rounded-2xl border-10 border-red-500/20 animate-pulse pointer-events-none"></div>

          {/* Actual card content */}
          <div className="relative rounded-2xl bg-white/5 backdrop-blur-md p-6 shadow-sm h-30 flex items-center justify-center">
            <h2 className="text-xl font-semibold mb-2 px-6 text-white/80 text-center">
              ❤️ I LOVE YOU GOBLU ❤️
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

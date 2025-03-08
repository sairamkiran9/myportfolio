import React from 'react';

const VennDiagram = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
      <svg width="700" height="500" viewBox="0 0 700 500" className="opacity-20">
        {/* Full Stack Development Circle */}
        <circle 
          cx="260" 
          cy="200" 
          r="175" 
          fill="url(#gradient1)"
          fillOpacity="0.8"
        />
        
        {/* AI/ML Circle */}
        <circle 
          cx="440" 
          cy="200" 
          r="175" 
          fill="url(#gradient2)"
          fillOpacity="0.8"
        />
        
        {/* Cloud/Systems Circle */}
        <circle 
          cx="350" 
          cy="320" 
          r="175" 
          fill="url(#gradient3)"
          fillOpacity="0.8"
        />
        
        {/* Labels */}
        <text x="200" y="120" fontFamily="sans-serif" fontSize="18" fill="white" opacity="0.9" textAnchor="middle">Full Stack</text>
        <text x="490" y="120" fontFamily="sans-serif" fontSize="18" fill="white" opacity="0.9" textAnchor="middle">AI/ML</text>
        <text x="345" y="440" fontFamily="sans-serif" fontSize="18" fill="white" opacity="0.9" textAnchor="middle">Cloud & Systems</text>
        
        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.5" />
          </radialGradient>
          
          <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </radialGradient>
          
          <radialGradient id="gradient3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default VennDiagram;
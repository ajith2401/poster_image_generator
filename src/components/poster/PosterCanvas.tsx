'use client';

import React, { useRef } from 'react';
import { PosterContent, BackgroundSettings, FontSettings, Position } from '@/types/poster';

interface PosterCanvasProps {
  content: PosterContent;
  background: BackgroundSettings;
  fontSettings: FontSettings;
  position: Position;
}

const PosterCanvas: React.FC<PosterCanvasProps> = ({ 
  content, 
  background, 
  fontSettings, 
  position 
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const getPositionStyles = () => {
    const styles: React.CSSProperties = {
      position: 'absolute',
      width: '90%',
      padding: '20px'
    };

    // Vertical positioning
    switch (position.vertical) {
      case 'top':
        styles.top = '10%';
        break;
      case 'bottom':
        styles.bottom = '10%';
        break;
      default: // center
        styles.top = '50%';
        styles.transform = 'translateY(-50%)';
    }

    // Horizontal positioning
    switch (position.horizontal) {
      case 'left':
        styles.left = '5%';
        styles.textAlign = 'left';
        break;
      case 'right':
        styles.right = '5%';
        styles.textAlign = 'right';
        break;
      default: // center
        styles.left = '50%';
        styles.transform = position.vertical === 'center' 
          ? 'translate(-50%, -50%)' 
          : 'translateX(-50%)';
        styles.textAlign = 'center';
    }

    return styles;
  };

  const backgroundStyle: React.CSSProperties = {
    background: background.type === 'image' 
      ? `url(${background.value}) center/cover no-repeat`
      : background.value,
    width: '400px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid #e5e7eb',
    borderRadius: '12px'
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div ref={canvasRef} style={backgroundStyle} id="poster-canvas">
        <div style={getPositionStyles()}>
          {/* Main Poem Text */}
          <div
            style={{
              fontFamily: fontSettings.fontFamily,
              fontSize: `${fontSettings.fontSize * 0.5}px`, // Scale down for preview
              color: fontSettings.color,
              lineHeight: fontSettings.lineHeight,
              textAlign: fontSettings.textAlign,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              marginBottom: '10px',
              whiteSpace: 'pre-line'
            }}
          >
            {content.poemText || 'Enter your Tamil poem...'}
          </div>
          
          {/* Author Name */}
          {content.authorName && (
            <div
              style={{
                fontFamily: fontSettings.fontFamily,
                fontSize: `${(fontSettings.fontSize * 0.5) * 0.7}px`,
                color: fontSettings.color,
                textAlign: 'right',
                fontStyle: 'italic',
                marginTop: '15px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              - {content.authorName}
            </div>
          )}
          
          {/* Website and Instagram */}
          <div
            style={{
              fontSize: `${(fontSettings.fontSize * 0.5) * 0.5}px`,
              color: fontSettings.color,
              textAlign: 'center',
              marginTop: '20px',
              opacity: 0.8,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {content.website && <div>{content.website}</div>}
            {content.instaId && <div>@{content.instaId}</div>}
          </div>
        </div>
      </div>
      
      {/* Preview Info */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Preview (400×400) • Download will be 1080×1080
        </p>
        <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-500">
          <span>Font: {fontSettings.fontFamily.split(',')[0]}</span>
          <span>Size: {fontSettings.fontSize}px</span>
          <span>Position: {position.vertical} {position.horizontal}</span>
        </div>
      </div>
    </div>
  );
};

export default PosterCanvas;
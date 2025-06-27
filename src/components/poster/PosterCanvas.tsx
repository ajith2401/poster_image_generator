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
      width: '85%',
      padding: '15px'
    };

    // Vertical positioning
    switch (position.vertical) {
      case 'top':
        styles.top = '8%';
        break;
      case 'bottom':
        styles.bottom = '8%';
        break;
      default: // center
        styles.top = '50%';
        styles.transform = 'translateY(-50%)';
    }

    // Horizontal positioning
    switch (position.horizontal) {
      case 'left':
        styles.left = '7%';
        styles.textAlign = 'left';
        break;
      case 'right':
        styles.right = '7%';
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
    width: '450px',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
    border: '3px solid #e5e7eb',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
  };

  // Better preview scaling - make text more readable
  const previewFontSize = Math.max(fontSettings.fontSize * 0.65, 18);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div ref={canvasRef} style={backgroundStyle} id="poster-canvas">
        <div style={getPositionStyles()}>
          {/* Main Poem Text */}
          <div
            style={{
              fontFamily: fontSettings.fontFamily,
              fontSize: `${previewFontSize}px`,
              color: fontSettings.color,
              lineHeight: fontSettings.lineHeight,
              textAlign: fontSettings.textAlign,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              marginBottom: '12px',
              whiteSpace: 'pre-line',
              fontWeight: '500'
            }}
          >
            {content.poemText || 'Enter your Tamil poem...'}
          </div>
          
          {/* Author Name */}
          {content.authorName && (
            <div
              style={{
                fontFamily: fontSettings.fontFamily,
                fontSize: `${previewFontSize * 0.7}px`,
                color: fontSettings.color,
                textAlign: 'right',
                fontStyle: 'italic',
                marginTop: '20px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                fontWeight: '500'
              }}
            >
              - {content.authorName}
            </div>
          )}
          
          {/* Website and Instagram */}
          <div
            style={{
              fontSize: `${previewFontSize * 0.5}px`,
              color: fontSettings.color,
              textAlign: 'center',
              marginTop: '25px',
              opacity: 0.9,
              textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
              fontWeight: '500'
            }}
          >
            {content.website && <div style={{ marginBottom: '8px' }}>{content.website}</div>}
            {content.instaId && <div>@{content.instaId}</div>}
          </div>
        </div>
      </div>
      
      {/* Preview Info */}
      <div className="text-center bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-700 font-medium">
          Live Preview (450×450) • Download will be HD 1080×1080
        </p>
        <div className="flex items-center justify-center gap-6 mt-3 text-xs text-gray-600">
          <span>Font: {fontSettings.fontFamily.split(',')[0].replace('var(--font-', '').replace(')', '')}</span>
          <span>Size: {fontSettings.fontSize}px</span>
          <span>Position: {position.vertical} {position.horizontal}</span>
        </div>
        <div className="mt-2 text-xs text-green-600 font-medium">
          ✓ Download will have larger, more readable text
        </div>
      </div>
    </div>
  );
};

export default PosterCanvas;
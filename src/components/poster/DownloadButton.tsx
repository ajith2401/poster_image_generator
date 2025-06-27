import React from 'react';
import { Download } from 'lucide-react';
import { PosterContent, BackgroundSettings, FontSettings, Position } from '@/types/poster';

interface DownloadButtonProps {
  content: PosterContent;
  background: BackgroundSettings;
  fontSettings: FontSettings;
  position: Position;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  content, 
  background, 
  fontSettings, 
  position 
}) => {
  const downloadPoster = () => {
    // Create a high-resolution canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1080;
    canvas.height = 1080;

    // Set background
    if (background.type === 'image') {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 1080, 1080);
        drawText();
      };
      img.src = background.value;
    } else {
      // Handle solid color or gradient
      if (background.value.includes('gradient')) {
        // For gradients, create a simple approximation
        // In a real implementation, you'd parse and recreate the gradient
        const gradientMatch = background.value.match(/#[a-fA-F0-9]{6}/g);
        if (gradientMatch && gradientMatch.length >= 2) {
          const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
          gradient.addColorStop(0, gradientMatch[0]);
          gradient.addColorStop(1, gradientMatch[1]);
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = '#4ECDC4'; // Default fallback
        }
      } else {
        ctx.fillStyle = background.value;
      }
      ctx.fillRect(0, 0, 1080, 1080);
      drawText();
    }

    function drawText() {
      // Calculate position
      let x: number, y: number;
      const padding = 50;
      
      // Set font
      ctx.font = `${fontSettings.fontSize * 2.7}px ${fontSettings.fontFamily.split(',')[0]}`;
      ctx.fillStyle = fontSettings.color;
      ctx.textAlign = fontSettings.textAlign as CanvasTextAlign || 'center';
      
      // Add text shadow
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      // Calculate vertical position
      const lines = content.poemText.split('\n');
      const lineHeight = fontSettings.fontSize * 2.7 * fontSettings.lineHeight;
      const totalTextHeight = lines.length * lineHeight;
      
      switch (position.vertical) {
        case 'top':
          y = padding + fontSettings.fontSize * 2.7;
          break;
        case 'bottom':
          y = 1080 - padding - totalTextHeight;
          break;
        default: // center
          y = (1080 - totalTextHeight) / 2 + fontSettings.fontSize * 2.7;
      }

      // Calculate horizontal position
      switch (position.horizontal) {
        case 'left':
          x = padding;
          ctx.textAlign = 'left';
          break;
        case 'right':
          x = 1080 - padding;
          ctx.textAlign = 'right';
          break;
        default: // center
          x = 540;
          ctx.textAlign = 'center';
      }

      // Draw poem text
      lines.forEach((line, index) => {
        ctx.fillText(line, x, y + (index * lineHeight));
      });

      // Draw author name
      if (content.authorName) {
        ctx.font = `italic ${fontSettings.fontSize * 1.8}px ${fontSettings.fontFamily.split(',')[0]}`;
        ctx.textAlign = 'right';
        ctx.fillText(`- ${content.authorName}`, 1080 - padding, y + totalTextHeight + 40);
      }

      // Draw website and instagram
      ctx.font = `${fontSettings.fontSize * 1.3}px ${fontSettings.fontFamily.split(',')[0]}`;
      ctx.textAlign = 'center';
      ctx.globalAlpha = 0.8;
      
      let bottomY = 1080 - 60;
      if (content.website) {
        ctx.fillText(content.website, 540, bottomY);
        bottomY += 30;
      }
      if (content.instaId) {
        ctx.fillText(`@${content.instaId}`, 540, bottomY);
      }

      // Download the image
      const link = document.createElement('a');
      link.download = `tamil-poem-${content.authorName || 'poster'}-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <button
        onClick={downloadPoster}
        disabled={!content.poemText.trim()}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all w-full justify-center ${
          content.poemText.trim()
            ? 'bg-green-500 text-white hover:bg-green-600 transform hover:scale-105 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <Download size={20} />
        Download HD Poster (1080×1080)
      </button>
      
      {!content.poemText.trim() && (
        <p className="text-sm text-red-500 mt-2">
          Please enter a poem to download
        </p>
      )}
      
      <div className="mt-3 text-xs text-gray-500 space-y-1">
        <p>• High-resolution PNG format</p>
        <p>• Perfect for Instagram posts</p>
        <p>• Supports Tamil script</p>
      </div>
    </div>
  );
};

export default DownloadButton;
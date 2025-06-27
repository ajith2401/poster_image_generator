import React from 'react';
import { Position } from '@/types/poster';

interface TextPositioningProps {
  position: Position;
  onPositionChange: (position: Position) => void;
}

const TextPositioning: React.FC<TextPositioningProps> = ({ position, onPositionChange }) => {
  const positions = [
    { name: 'Top Left', value: { vertical: 'top' as const, horizontal: 'left' as const } },
    { name: 'Top Center', value: { vertical: 'top' as const, horizontal: 'center' as const } },
    { name: 'Top Right', value: { vertical: 'top' as const, horizontal: 'right' as const } },
    { name: 'Center Left', value: { vertical: 'center' as const, horizontal: 'left' as const } },
    { name: 'Center', value: { vertical: 'center' as const, horizontal: 'center' as const } },
    { name: 'Center Right', value: { vertical: 'center' as const, horizontal: 'right' as const } },
    { name: 'Bottom Left', value: { vertical: 'bottom' as const, horizontal: 'left' as const } },
    { name: 'Bottom Center', value: { vertical: 'bottom' as const, horizontal: 'center' as const } },
    { name: 'Bottom Right', value: { vertical: 'bottom' as const, horizontal: 'right' as const } }
  ];

  const isActive = (pos: Position) => 
    position.vertical === pos.vertical && position.horizontal === pos.horizontal;

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Text Position
      </label>
      
      <div className="grid grid-cols-3 gap-3">
        {positions.map((pos, index) => (
          <button
            key={index}
            onClick={() => onPositionChange(pos.value)}
            className={`p-3 text-sm rounded-lg border-2 font-medium transition-all hover:scale-105 ${
              isActive(pos.value)
                ? 'bg-blue-500 text-white border-blue-500 shadow-lg'
                : 'bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}
          >
            {pos.name}
          </button>
        ))}
      </div>

      {/* Visual Grid Preview */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600 mb-2">Preview Layout:</p>
        <div className="grid grid-cols-3 gap-1 w-24 h-24 mx-auto">
          {positions.map((pos, index) => (
            <div
              key={index}
              className={`border rounded ${
                isActive(pos.value) 
                  ? 'bg-blue-500 border-blue-500' 
                  : 'bg-white border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextPositioning;
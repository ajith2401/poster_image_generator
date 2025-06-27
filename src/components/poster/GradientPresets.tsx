import React from 'react';
import { GradientPreset } from '@/types/poster';

interface GradientPresetsProps {
  onSelect: (gradient: string) => void;
}

const GradientPresets: React.FC<GradientPresetsProps> = ({ onSelect }) => {
  const gradients: GradientPreset[] = [
    { name: 'Sunrise', value: 'linear-gradient(135deg, #FF512F, #DD2476)' },
    { name: 'Ocean', value: 'linear-gradient(135deg, #396afc, #2948ff)' },
    { name: 'Lavender', value: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)' },
    { name: 'Earthy', value: 'linear-gradient(135deg, #f7971e, #ffd200)' },
    { name: 'Royal Night', value: 'linear-gradient(135deg, #434343, #000000)' },
    { name: 'Sunset Pink', value: 'linear-gradient(135deg, #ff9a9e, #fecfef)' },
    { name: 'Purple Dream', value: 'linear-gradient(135deg, #a8edea, #fed6e3)' },
    { name: 'Green Paradise', value: 'linear-gradient(135deg, #d299c2, #fef9d7)' },
    { name: 'Electric Blue', value: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { name: 'Fire', value: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { name: 'Aqua Marine', value: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { name: 'Peachy', value: 'linear-gradient(135deg, #ffecd2, #fcb69f)' },
    { name: 'Mint', value: 'linear-gradient(135deg, #a8e6cf, #dcedc1)' },
    { name: 'Golden Hour', value: 'linear-gradient(135deg, #ffd89b, #19547b)' },
    { name: 'Rose Gold', value: 'linear-gradient(135deg, #fccb90, #d57eeb)' },
    { name: 'Deep Space', value: 'linear-gradient(135deg, #667db6, #0082c8)' }
  ];

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-gray-700">Gradient Presets</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {gradients.map((gradient, index) => (
          <button
            key={index}
            onClick={() => onSelect(gradient.value)}
            className="h-12 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all transform hover:scale-105 relative overflow-hidden group shadow-sm"
            style={{ 
              background: gradient.value,
              minHeight: '48px'
            }}
            title={gradient.name}
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
              <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 px-2 py-1 rounded">
                {gradient.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GradientPresets;
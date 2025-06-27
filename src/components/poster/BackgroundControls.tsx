import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { BackgroundSettings } from '@/types/poster';
import ColorPicker from './ColorPicker';
import GradientPresets from './GradientPresets';

interface BackgroundControlsProps {
  background: BackgroundSettings;
  onBackgroundChange: (background: BackgroundSettings) => void;
}

const BackgroundControls: React.FC<BackgroundControlsProps> = ({ 
  background, 
  onBackgroundChange 
}) => {
  const [backgroundType, setBackgroundType] = useState<'solid' | 'gradient' | 'image'>(
    background.type || 'solid'
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onBackgroundChange({
          type: 'image',
          value: e.target?.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTypeChange = (type: 'solid' | 'gradient' | 'image') => {
    setBackgroundType(type);
    if (type === 'solid') {
      onBackgroundChange({ type: 'solid', value: '#4ECDC4' });
    } else if (type === 'gradient') {
      onBackgroundChange({ 
        type: 'gradient', 
        value: 'linear-gradient(135deg, #FF512F, #DD2476)' 
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Background Type Selector */}
      <div className="flex gap-2">
        <button
          onClick={() => handleTypeChange('solid')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            backgroundType === 'solid' 
              ? 'bg-blue-500 text-white shadow-lg' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Solid
        </button>
        <button
          onClick={() => handleTypeChange('gradient')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            backgroundType === 'gradient' 
              ? 'bg-blue-500 text-white shadow-lg' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Gradient
        </button>
        <button
          onClick={() => handleTypeChange('image')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            backgroundType === 'image' 
              ? 'bg-blue-500 text-white shadow-lg' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Image
        </button>
      </div>

      {/* Solid Color Controls */}
      {backgroundType === 'solid' && (
        <div className="space-y-3">
          <ColorPicker
            color={background.type === 'solid' ? background.value : '#4ECDC4'}
            onChange={(color) => onBackgroundChange({ type: 'solid', value: color })}
            label="Background Color"
          />
        </div>
      )}

      {/* Gradient Controls */}
      {backgroundType === 'gradient' && (
        <div className="space-y-3">
          <GradientPresets
            onSelect={(gradient) => onBackgroundChange({ type: 'gradient', value: gradient })}
          />
        </div>
      )}

      {/* Image Upload Controls */}
      {backgroundType === 'image' && (
        <div className="space-y-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium w-full justify-center"
          >
            <Upload size={16} />
            Upload Background Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          {background.type === 'image' && background.value && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-2">Current background:</p>
              <div 
                className="w-full h-20 rounded-lg border-2 border-gray-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${background.value})` }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BackgroundControls;
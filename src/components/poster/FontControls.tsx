import React from 'react';
import { FontSettings } from '@/types/poster';
import ColorPicker from './ColorPicker';

interface FontControlsProps {
  fontSettings: FontSettings;
  onFontChange: (settings: FontSettings) => void;
}

const FontControls: React.FC<FontControlsProps> = ({ fontSettings, onFontChange }) => {
  const tamilFonts = [
    { name: 'Noto Sans Tamil', value: 'Noto Sans Tamil, sans-serif' },
    { name: 'Catamaran', value: 'Catamaran, sans-serif' },
    { name: 'Latha', value: 'Latha, sans-serif' },
    { name: 'Bamini', value: 'Bamini, sans-serif' },
    { name: 'Arial Unicode MS', value: 'Arial Unicode MS, sans-serif' },
    { name: 'Tamil Sangam MN', value: 'Tamil Sangam MN, sans-serif' },
    { name: 'InaiMathi', value: 'InaiMathi, sans-serif' },
    { name: 'Serif', value: 'serif' }
  ];

  const textAlignments: Array<{ value: 'left' | 'center' | 'right'; label: string }> = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' }
  ];

  return (
    <div className="space-y-4">
      {/* Font Family */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Family
        </label>
        <select
          value={fontSettings.fontFamily}
          onChange={(e) => onFontChange({ ...fontSettings, fontFamily: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {tamilFonts.map((font, index) => (
            <option key={index} value={font.value}>
              {font.name}
            </option>
          ))}
        </select>
      </div>

      {/* Font Size */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Size: {fontSettings.fontSize}px
        </label>
        <input
          type="range"
          min="20"
          max="100"
          step="2"
          value={fontSettings.fontSize}
          onChange={(e) => onFontChange({ ...fontSettings, fontSize: parseInt(e.target.value) })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>20px</span>
          <span>100px</span>
        </div>
      </div>

      {/* Text Color */}
      <ColorPicker
        color={fontSettings.color}
        onChange={(color) => onFontChange({ ...fontSettings, color })}
        label="Text Color"
      />

      {/* Text Alignment */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Alignment
        </label>
        <div className="flex gap-2">
          {textAlignments.map((align) => (
            <button
              key={align.value}
              onClick={() => onFontChange({ ...fontSettings, textAlign: align.value })}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                fontSettings.textAlign === align.value 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {align.label}
            </button>
          ))}
        </div>
      </div>

      {/* Line Height */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Line Height: {fontSettings.lineHeight}
        </label>
        <input
          type="range"
          min="1"
          max="3"
          step="0.1"
          value={fontSettings.lineHeight}
          onChange={(e) => onFontChange({ ...fontSettings, lineHeight: parseFloat(e.target.value) })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1.0</span>
          <span>3.0</span>
        </div>
      </div>
    </div>
  );
};

export default FontControls;
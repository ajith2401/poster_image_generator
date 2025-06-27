import React from 'react';
import { FontSettings } from '@/types/poster';
import ColorPicker from './ColorPicker';

interface FontControlsProps {
  fontSettings: FontSettings;
  onFontChange: (settings: FontSettings) => void;
}

const FontControls: React.FC<FontControlsProps> = ({ fontSettings, onFontChange }) => {
  const tamilFonts = [
    { name: 'Noto Sans Tamil', value: 'var(--font-noto-sans-tamil), sans-serif' },
    { name: 'Catamaran', value: 'var(--font-catamaran), sans-serif' },
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
    <div className="space-y-6">
      {/* Font Family */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Tamil Font Family
        </label>
        <select
          value={fontSettings.fontFamily}
          onChange={(e) => onFontChange({ ...fontSettings, fontFamily: e.target.value })}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
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
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Font Size: <span className="text-blue-600 font-bold">{fontSettings.fontSize}px</span>
        </label>
        <input
          type="range"
          min="24"
          max="120"
          step="4"
          value={fontSettings.fontSize}
          onChange={(e) => onFontChange({ ...fontSettings, fontSize: parseInt(e.target.value) })}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>24px (Small)</span>
          <span>120px (Large)</span>
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
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Text Alignment
        </label>
        <div className="flex gap-3">
          {textAlignments.map((align) => (
            <button
              key={align.value}
              onClick={() => onFontChange({ ...fontSettings, textAlign: align.value })}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                fontSettings.textAlign === align.value 
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {align.label}
            </button>
          ))}
        </div>
      </div>

      {/* Line Height */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Line Height: <span className="text-blue-600 font-bold">{fontSettings.lineHeight}</span>
        </label>
        <input
          type="range"
          min="1"
          max="3"
          step="0.1"
          value={fontSettings.lineHeight}
          onChange={(e) => onFontChange({ ...fontSettings, lineHeight: parseFloat(e.target.value) })}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>1.0 (Compact)</span>
          <span>3.0 (Spacious)</span>
        </div>
      </div>
    </div>
  );
};

export default FontControls;
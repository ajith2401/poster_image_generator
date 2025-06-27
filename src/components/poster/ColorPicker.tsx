import React from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  label: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, label }) => {
  const commonColors = [
    '#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#AED6F1', '#F8D7DA', '#D5DBDB',
    '#2C3E50', '#E74C3C', '#F39C12', '#27AE60', '#8E44AD', '#16A085',
    '#34495E', '#E67E22', '#F1C40F', '#2ECC71', '#9B59B6', '#1ABC9C',
    '#3498DB', '#E91E63', '#FF5722', '#795548', '#607D8B', '#FF9800'
  ];

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-14 h-10 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-gray-400 transition-colors"
        />
        <span className="text-sm text-gray-600 font-mono">{color}</span>
      </div>
      
      {/* Color Swatches */}
      <div className="grid grid-cols-6 gap-2 mt-2">
        {commonColors.map((swatch, index) => (
          <button
            key={index}
            onClick={() => onChange(swatch)}
            className={`w-8 h-8 rounded-md border-2 transition-all hover:scale-110 ${
              color === swatch ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300 hover:border-gray-400'
            }`}
            style={{ backgroundColor: swatch }}
            title={swatch}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
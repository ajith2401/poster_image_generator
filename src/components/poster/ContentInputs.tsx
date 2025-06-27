import React from 'react';
import { Type } from 'lucide-react';
import { PosterContent } from '@/types/poster';

interface ContentInputsProps {
  content: PosterContent;
  onContentChange: (content: PosterContent) => void;
}

const ContentInputs: React.FC<ContentInputsProps> = ({ content, onContentChange }) => {
  const handleChange = (field: keyof PosterContent, value: string) => {
    onContentChange({
      ...content,
      [field]: value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Type size={20} />
        Content
      </h2>
      
      <div className="space-y-4">
        {/* Tamil Poem Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tamil Poem <span className="text-red-500">*</span>
          </label>
          <textarea
            value={content.poemText}
            onChange={(e) => handleChange('poemText', e.target.value)}
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="உலகம் முழுவதும் அன்பே&#10;அழகான கவிதைகள் எழுதுவோம்&#10;தமிழ் மொழியில் இனிமை&#10;கவிதை உலகில் மகிழ்வோம்"
          />
          <p className="text-xs text-gray-500 mt-1">
            Press Enter for new lines • Supports Tamil script
          </p>
        </div>
        
        {/* Author, Website, Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author Name
            </label>
            <input
              type="text"
              value={content.authorName}
              onChange={(e) => handleChange('authorName', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="அஜித்குமார்"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="text"
              value={content.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="www.ajithkumarr.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instagram ID
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
              <input
                type="text"
                value={content.instaId}
                onChange={(e) => handleChange('instaId', e.target.value)}
                className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="vaanawill"
              />
            </div>
          </div>
        </div>

        {/* Character Count for Poem */}
        <div className="text-right">
          <span className="text-xs text-gray-500">
            Characters: {content.poemText.length} | Lines: {content.poemText.split('\n').length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentInputs;
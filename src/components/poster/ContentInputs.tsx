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
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
        <Type size={24} />
        Content
      </h2>
      
      <div className="space-y-6">
        {/* Tamil Poem Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Tamil Poem <span className="text-red-500">*</span>
          </label>
          <textarea
            value={content.poemText}
            onChange={(e) => handleChange('poemText', e.target.value)}
            rows={8}
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg leading-relaxed"
            placeholder="உலகம் முழுவதும் அன்பே&#10;அழகான கவிதைகள் எழுதுவோம்&#10;தமிழ் மொழியில் இனிமை&#10;கவிதை உலகில் மகிழ்வோம்"
            style={{ fontFamily: 'var(--font-noto-sans-tamil), sans-serif' }}
          />
          <p className="text-sm text-gray-500 mt-2 flex justify-between">
            <span>Press Enter for new lines • Supports Tamil script</span>
            <span className="font-medium">
              Characters: {content.poemText.length} | Lines: {content.poemText.split('\n').length}
            </span>
          </p>
        </div>
        
        {/* Author, Website, Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Author Name
            </label>
            <input
              type="text"
              value={content.authorName}
              onChange={(e) => handleChange('authorName', e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="அஜித்குமார்"
              style={{ fontFamily: 'var(--font-noto-sans-tamil), sans-serif' }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Website
            </label>
            <input
              type="text"
              value={content.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="www.ajithkumarr.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Instagram ID
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">@</span>
              <input
                type="text"
                value={content.instaId}
                onChange={(e) => handleChange('instaId', e.target.value)}
                className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="vaanawill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInputs;
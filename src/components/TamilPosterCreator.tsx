import React, { useState } from 'react';
import { Palette, Type, Move } from 'lucide-react';
import { PosterContent, BackgroundSettings, FontSettings, Position } from '@/types/poster';

// Component imports
import ContentInputs from './poster/ContentInputs';
import FontControls from './poster/FontControls';
import TextPositioning from './poster/TextPositioning';
import BackgroundControls from './poster/BackgroundControls';
import PosterCanvas from './poster/PosterCanvas';
import DownloadButton from './poster/DownloadButton';

const TamilPosterCreator: React.FC = () => {
  // Content state
  const [content, setContent] = useState<PosterContent>({
    poemText: 'உலகம் முழுவதும் அன்பே\nஅழகான கவிதைகள் எழுதுவோம்\nதமிழ் மொழியில் இனிமை\nகவிதை உலகில் மகிழ்வோம்',
    authorName: 'அஜித்குமார்',
    website: 'www.ajithkumarr.com',
    instaId: 'vaanawill'
  });
  
  // Design state
  const [background, setBackground] = useState<BackgroundSettings>({
    type: 'solid',
    value: '#4ECDC4'
  });
  
  const [fontSettings, setFontSettings] = useState<FontSettings>({
    fontFamily: 'Noto Sans Tamil, sans-serif',
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 1.5
  });
  
  const [position, setPosition] = useState<Position>({
    vertical: 'center',
    horizontal: 'center'
  });

  // Tab state for controls
  const [activeTab, setActiveTab] = useState<'font' | 'position' | 'background'>('font');

  const tabs = [
    { id: 'font' as const, label: 'Font', icon: Type },
    { id: 'position' as const, label: 'Position', icon: Move },
    { id: 'background' as const, label: 'Background', icon: Palette }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎨 Tamil Poem Poster Creator
          </h1>
          <p className="text-gray-600">
            Create beautiful HD posters for your Tamil poetry • Perfect for Instagram
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Content Inputs */}
            <ContentInputs
              content={content}
              onContentChange={setContent}
            />

            {/* Design Controls */}
            <div className="bg-white rounded-lg shadow-lg">
              {/* Tabs */}
              <div className="flex border-b">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-4 py-3 font-medium transition-colors ${
                        activeTab === tab.id 
                          ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={16} className="inline mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'font' && (
                  <FontControls
                    fontSettings={fontSettings}
                    onFontChange={setFontSettings}
                  />
                )}
                
                {activeTab === 'position' && (
                  <TextPositioning
                    position={position}
                    onPositionChange={setPosition}
                  />
                )}
                
                {activeTab === 'background' && (
                  <BackgroundControls
                    background={background}
                    onBackgroundChange={setBackground}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            {/* Live Preview */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
              <PosterCanvas
                content={content}
                background={background}
                fontSettings={fontSettings}
                position={position}
              />
            </div>
            
            {/* Download Section */}
            <DownloadButton
              content={content}
              background={background}
              fontSettings={fontSettings}
              position={position}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Made with ❤️ for Tamil poetry lovers</p>
        </div>
      </div>
    </div>
  );
};

export default TamilPosterCreator;
export interface PosterContent {
  poemText: string;
  authorName: string;
  website: string;
  instaId: string;
}

export interface BackgroundSettings {
  type: 'solid' | 'gradient' | 'image';
  value: string;
}

export interface FontSettings {
  fontFamily: string;
  fontSize: number;
  color: string;
  textAlign: 'left' | 'center' | 'right';
  lineHeight: number;
}

export interface Position {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface GradientPreset {
  name: string;
  value: string;
}
export type IconName = 
  | 'clock'
  | 'graduation'
  | 'lightning'
  | 'certificate'
  | 'partnership'
  | 'career'
  | 'chemistry'
  | 'physics';

export interface FeatureItem {
  titleKey: string;
  descKey: string;
  icon: IconName;
}

export interface FeatureGroup {
  items: FeatureItem[];
}


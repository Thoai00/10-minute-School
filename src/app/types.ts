export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  text: string;
  icon: string;
  color: string;
}

export interface Instructor {
  name: string;
  image: string;
  short_description: string;
  description: string;
}

export interface Feature {
  title: string;
  subtitle: string;
  icon: string;
}

export interface Pointer {
  text: string;
}

export interface ExclusiveFeature {
  title: string;
  file_url: string;
  checklist: string[];
}

export interface AboutItem {
  title: string;
  description: string;
}

export interface Testimonial {
  thumbnail_url: any;
  name: string;
  testimonial: string;
  description: string;
  profile_image: string;
  video_url?: string;
  thumb?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Offer {
  id: string;
  text: string;
  end_at: string;
  start_at?: string;
  template?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
}

export interface GroupEngagement {
  title: string;
  description: string;
  cta: {
    text: string;
    clicked_url: string;
  };
  thumbnail: string;
  top_left_icon_img?: string;
  title_color?: string;
  description_color?: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  values: any[];
}

export interface ProductData {
  title: string;
  description: string;
  media: Media[];
  checklist: ChecklistItem[];
  sections: Section[];
  cta_text: CtaText;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  group_join_engagement?: GroupEngagement[];
}

export interface UiTranslations {
  [key: string]: {
    loading: string;
    notAvailable: string;
    freeTrial: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    playVideo: string;
    viewCertificate: string;
    videoTestimonials: string;
    textTestimonials: string;
  };
}
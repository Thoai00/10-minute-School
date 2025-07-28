import { Media, CtaText } from '../types';
import { UiTranslations } from '../types';

interface HeroSectionProps {
  trailerVideo?: Media;
  ctaText: CtaText;
  t: UiTranslations['en' | 'bn'];
}

export default function HeroSection({ trailerVideo, ctaText, t }: HeroSectionProps) {
  return (
    <>
      {/* Trailer Video */}
      <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-red-600">
        {trailerVideo && (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerVideo.resource_value}`}
            title="Course Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      
      <div className="flex flex-col gap-4 mt-6">
        <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-0.5 shadow-lg">
          {ctaText.name} (1000 Tk)
        </button>
        <button className="border-2 border-red-600 text-red-600 font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-red-50">
          {t.freeTrial}
        </button>
      </div>
    </>
  );
}
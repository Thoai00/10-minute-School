import { UiTranslations } from '../types';

interface LoadingScreenProps {
  t: UiTranslations['en' | 'bn'];
}

export default function LoadingScreen({ t }: LoadingScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin"></div>
          <div className="absolute inset-4 rounded-full border-4 border-red-400 border-b-transparent animate-spin-reverse"></div>
        </div>
        <div className="text-xl font-medium text-red-600">{t.loading}</div>
      </div>
    </div>
  );
}
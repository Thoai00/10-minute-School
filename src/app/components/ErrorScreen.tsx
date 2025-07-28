import { UiTranslations } from '../types';

interface ErrorScreenProps {
  error: string;
  t: UiTranslations['en' | 'bn'];
}

export default function ErrorScreen({ error, t }: ErrorScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-2xl text-red-600">{error}</div>
    </div>
  );
}
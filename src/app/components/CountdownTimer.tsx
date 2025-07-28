import { UiTranslations } from '../types';

interface CountdownTimerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  offerText: string;
  t: UiTranslations['en' | 'bn'];
}

export default function CountdownTimer({ timeLeft, offerText, t }: CountdownTimerProps) {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 py-3 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
        <span className="font-bold text-center">{offerText}</span>
        <div className="flex items-center gap-1 sm:gap-3">
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-auto">
            <span className="text-lg sm:text-xl font-bold bg-white text-red-600 rounded w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              {timeLeft.days}
            </span>
            <span className="text-xs sm:text-sm mt-1">{t.days}</span>
          </div>
          <span className="text-xl">:</span>
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-auto">
            <span className="text-lg sm:text-xl font-bold bg-white text-red-600 rounded w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              {timeLeft.hours}
            </span>
            <span className="text-xs sm:text-sm mt-1">{t.hours}</span>
          </div>
          <span className="text-xl">:</span>
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-auto">
            <span className="text-lg sm:text-xl font-bold bg-white text-red-600 rounded w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              {timeLeft.minutes}
            </span>
            <span className="text-xs sm:text-sm mt-1">{t.minutes}</span>
          </div>
          <span className="text-xl">:</span>
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-auto">
            <span className="text-lg sm:text-xl font-bold bg-white text-red-600 rounded w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              {timeLeft.seconds}
            </span>
            <span className="text-xs sm:text-sm mt-1">{t.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
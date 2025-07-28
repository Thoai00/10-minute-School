import Image from 'next/image';
import { ChecklistItem } from '../types';

interface FeaturesSectionProps {
  checklist: ChecklistItem[];
  title: string;
}

export default function FeaturesSection({ checklist, title }: FeaturesSectionProps) {
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        {title || "Course Features"}
      </h2>
      <div className="space-y-4">
        {checklist.map((item, index) => (
          <div key={index} className="flex items-start bg-gradient-to-br from-red-50 to-white rounded-xl p-4 shadow-sm">
            <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3 shadow-sm border border-red-200">
              <Image 
                src={item.icon} 
                alt="Feature icon" 
                width={24} 
                height={24}
                unoptimized
              />
            </div>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
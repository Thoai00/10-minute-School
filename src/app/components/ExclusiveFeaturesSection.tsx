import Image from 'next/image';
import { ExclusiveFeature } from '../types';

interface ExclusiveFeaturesSectionProps {
  exclusiveFeatures: ExclusiveFeature[];
  title: string;
}

export default function ExclusiveFeaturesSection({ exclusiveFeatures, title }: ExclusiveFeaturesSectionProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "Course Exclusive Features"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {exclusiveFeatures.map((feature, index) => (
            <div key={index} className="border-2 border-red-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-700">{feature.title}</h3>
                <ul className="space-y-2 mb-6">
                  {feature.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 h-160 relative">
                <Image
                  src={feature.file_url}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
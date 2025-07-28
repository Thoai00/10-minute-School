import Image from 'next/image';
import { GroupEngagement } from '../types';

interface GroupEngagementSectionProps {
  engagement: GroupEngagement;
  sectionTitle: string;
}

export default function GroupEngagementSection({ engagement, sectionTitle }: GroupEngagementSectionProps) {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        {sectionTitle || "Exclusive Resources"}
      </h2>
      <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl shadow-lg p-6 border border-red-200 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <div className="relative w-48 h-64 rounded-lg overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={engagement.thumbnail}
              alt={engagement.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          {engagement.top_left_icon_img && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-xs">
              <Image
                src={engagement.top_left_icon_img}
                alt="Icon"
                width={20}
                height={20}
                unoptimized
              />
            </div>
          )}
          <h3 
            className="text-2xl font-bold mb-3"
            style={{ color: engagement.title_color || '#b91c1c' }}
          >
            {engagement.title}
          </h3>
          <p 
            className="text-gray-700 mb-6"
            style={{ color: engagement.description_color || '#4b5563' }}
          >
            {engagement.description}
          </p>
          <a 
            href={engagement.cta.clicked_url} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {engagement.cta.text}
          </a>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';
import { Instructor } from '../types';

interface InstructorsSectionProps {
  instructors: Instructor[];
  title: string;
}

export default function InstructorsSection({ instructors, title }: InstructorsSectionProps) {
  return (
    <div className="py-16 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "Meet Your Instructor"}
        </h2>
        
        {instructors.map((instructor, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 bg-white rounded-2xl shadow-xl p-6 md:p-10 overflow-hidden mb-10">
            <div className="relative lg:w-2/5 w-full max-w-md mx-auto">
              <div className="relative aspect-square">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="rounded-2xl object-cover border-8 border-white shadow-lg"
                  unoptimized
                />
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-red-600 text-white px-4 py-1 md:px-6 md:py-2 rounded-full font-bold text-sm md:text-lg shadow-lg">
                  IELTS 8.5
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 w-full mt-6 lg:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{instructor.name}</h3>
              <p className="text-red-600 font-medium mb-5 text-lg">
                {instructor.short_description}
              </p>
              <div 
                className="prose text-gray-600 max-w-none"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import { Pointer } from '../types';

interface PointersSectionProps {
  pointers: Pointer[];
  title: string;
}

export default function PointersSection({ pointers, title }: PointersSectionProps) {
  return (
    <div className="py-16 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "What You'll Learn"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pointers.map((pointer, index) => (
            <div key={index} className="flex items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-red-100">
              <div className="bg-red-100 p-2 rounded-full mt-1 mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-gray-700">{pointer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
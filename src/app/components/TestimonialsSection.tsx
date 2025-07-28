import Image from 'next/image';
import { Testimonial } from '../types';
import { UiTranslations } from '../types';
import { useState } from 'react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title: string;
  t: UiTranslations['en' | 'bn'];
}

export default function TestimonialsSection({ testimonials, title, t }: TestimonialsSectionProps) {
  const [activeTab, setActiveTab] = useState<'video' | 'text'>('video');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="py-16 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "Student Success Stories"}
        </h2>
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'video'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-gray-600 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('video')}
            >
              {t.videoTestimonials}
            </button>
            <button
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'text'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-gray-600 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('text')}
            >
              {t.textTestimonials}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials
            .filter(testimonial => 
              (activeTab === 'video' && testimonial.video_url) || 
              (activeTab === 'text' && !testimonial.video_url)
            )
            .map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                {testimonial.video_url && (
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 flex-shrink-0">
                        <Image
                          src={testimonial.profile_image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-red-600">{testimonial.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                      <div className="relative w-full h-full bg-gray-100">
                        {testimonial.thumbnail_url ? (
                          <Image
                            src={testimonial.thumbnail_url}
                            alt="Testimonial thumbnail"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="bg-gradient-to-br from-red-100 to-red-200 w-full h-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                        <button 
                          onClick={() => setPlayingVideo(testimonial.video_url || null)}
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all"
                        >
                          <div className="bg-red-600 rounded-full p-3 hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                            <span className="sr-only">{t.playVideo}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
        
                {!testimonial.video_url && (
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 flex-shrink-0">
                        <Image
                          src={testimonial.profile_image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-red-600">{testimonial.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative pl-8 py-4 mb-4">
                      <svg className="absolute left-0 top-4 w-6 h-6 text-red-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 italic">{testimonial.testimonial}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {playingVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setPlayingVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white text-lg z-10"
              onClick={() => setPlayingVideo(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
              title="Student Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
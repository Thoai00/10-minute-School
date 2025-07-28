import { AboutItem } from '../types';

interface AboutSectionProps {
  aboutItems: AboutItem[];
}

export default function AboutSection({ aboutItems }: AboutSectionProps) {
  const cleanHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <>
      {aboutItems.length > 0 && aboutItems[0] && (
        <div className="py-16 bg-gradient-to-r from-red-50 to-red-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-red-600">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  {cleanHtmlTags(aboutItems[0].title)}
                </span>
              </h2>
              <div 
                className="prose max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: aboutItems[0].description }}
              />
            </div>
          </div>
        </div>
      )}

      {aboutItems.length > 1 && aboutItems[1] && (
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  {cleanHtmlTags(aboutItems[1].title)}
                </span>
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>
            <div 
              className="prose max-w-6xl mx-auto"
              dangerouslySetInnerHTML={{ __html: aboutItems[1].description }}
            />
          </div>
        </div>
      )}

      {aboutItems.length > 2 && aboutItems[2] && (
        <div className="py-16 bg-gradient-to-r from-red-50 to-red-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-red-600">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  {cleanHtmlTags(aboutItems[2].title)}
                </span>
              </h2>
              <div 
                className="prose max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: aboutItems[2].description }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
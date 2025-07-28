import { UiTranslations } from '../types';

interface CertificateSectionProps {
  title: string;
  t: UiTranslations['en' | 'bn'];
}

export default function CertificateSection({ title, t }: CertificateSectionProps) {
  return (
    <div className="py-16 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "Course Certificate"}
        </h2>
        <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl shadow-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transform -rotate-3">
                <svg className="w-16 h-16 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 text-center">{title}</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Receive Your Certificate Upon Completion</h3>
            <p className="text-gray-700 mb-6">
              Complete this IELTS course and receive an official certificate that validates your achievement. 
              This certificate can be shared on your LinkedIn profile, added to your resume, and presented to employers.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center">
              <span>{t.viewCertificate}</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
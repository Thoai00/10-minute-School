import { FaqItem } from '../types';

interface FAQSectionProps {
  faqs: FaqItem[];
  title: string;
}

export default function FAQSection({ faqs, title }: FAQSectionProps) {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "Frequently Asked Questions"}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:border-red-300 transition-colors duration-300">
              <details className="group">
                <summary className="list-none p-6 cursor-pointer flex justify-between items-center bg-gradient-to-r from-red-50 to-white">
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </summary>
                <div 
                  className="px-6 pb-6 prose prose-red bg-white"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
interface HowToPaySectionProps {
  content: string;
  title: string;
}

export default function HowToPaySection({ content, title }: HowToPaySectionProps) {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "How to Pay"}
        </h2>
        <div 
          className="prose max-w-none bg-white rounded-2xl shadow-lg p-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
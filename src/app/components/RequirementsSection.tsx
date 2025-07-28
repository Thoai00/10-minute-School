interface RequirementsSectionProps {
  requirements: string[];
  title: string;
}

export default function RequirementsSection({ requirements, title }: RequirementsSectionProps) {
  return (
    <div className="py-16 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {title || "Requirements"}
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ul className="space-y-3 list-disc pl-5">
            {requirements.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
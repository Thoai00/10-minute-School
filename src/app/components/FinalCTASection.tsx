interface FinalCTASectionProps {
  ctaText: string;
}

export default function FinalCTASection({ ctaText }: FinalCTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Start Your IELTS Journey Today!
        </h2>
        <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful students who achieved their desired band scores
        </p>
        <button className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg py-4 px-12 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1">
          {ctaText}(1000 Tk)
        </button>
      </div>
    </section>
  );
}
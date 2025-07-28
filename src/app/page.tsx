'use client';

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";

import Header from "./components/Header";
import CountdownTimer from "./components/CountdownTimer";
import LoadingScreen from "./components/LoadingScreen";
import ErrorScreen from "./components/ErrorScreen";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import GroupEngagementSection from "./components/GroupEngagementSection";
import AboutSection from "./components/AboutSection";
import InstructorsSection from "./components/InstructorsSection";
import PointersSection from "./components/PointersSection";
import ExclusiveFeaturesSection from "./components/ExclusiveFeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CertificateSection from "./components/CertificateSection";
import FAQSection from "./components/FAQSection";
import RequirementsSection from "./components/RequirementsSection";
import HowToPaySection from "./components/HowToPaySection";
import FinalCTASection from "./components/FinalCTASection";

import { 
  ProductData, 
  UiTranslations
} from "./types";

const uiTranslations: UiTranslations = {
  en: {
    loading: "Loading Course Details...",
    notAvailable: "Product data not available",
    freeTrial: "Free Trial",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    playVideo: "Play Video",
    viewCertificate: "View Certificate",
    videoTestimonials: "Video Testimonials",
    textTestimonials: "Text Testimonials"
  },
  bn: {
    loading: "কোর্সের বিবরণ লোড করা হচ্ছে...",
    notAvailable: "পণ্যের তথ্য পাওয়া যায়নি",
    freeTrial: "ফ্রি ট্রায়াল",
    days: "দিন",
    hours: "ঘন্টা",
    minutes: "মিনিট",
    seconds: "সেকেন্ড",
    playVideo: "ভিডিও প্লে করুন",
    viewCertificate: "সার্টিফিকেট দেখুন",
    videoTestimonials: "ভিডিও টেস্টিমোনিয়াল",
    textTestimonials: "টেক্সট টেস্টিমোনিয়াল"
  }
};

export default function ProductPage() {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [lang, setLang] = useState('en');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<{ 
    days: number; 
    hours: number; 
    minutes: number; 
    seconds: number 
  } | null>(null);
  const router = useRouter();
  const isInitialMount = useRef(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const t = uiTranslations[lang as keyof typeof uiTranslations] || uiTranslations.en;

  const fetchProductData = async (language: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}`,
        {
          headers: {
            "X-TENMS-SOURCE-PLATFORM": "web",
            "accept": "application/json"
          }
        }
      );
      
      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }
      
      const data = await res.json();
      setProduct(data.data);
      setError(null);
      
      const offersSection = data.data.sections.find(
        (s: any) => s.type === "offers"
      );
      
      if (offersSection && offersSection.values.length > 0) {
        const endDate = new Date(offersSection.values[0].end_at);
        startCountdown(endDate);
      } else {
        setTimeLeft(null);
      }
    } catch (err) {
      console.error("Error fetching product data:", err);
      setError('Failed to load product data');
    } finally {
      setLoading(false);
    }
  };

  const startCountdown = (endDate: Date) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const updateCountdown = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    timerRef.current = setInterval(updateCountdown, 1000);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') || 'en';
    setLang(urlLang);
    fetchProductData(urlLang);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      fetchProductData(lang);
    }
  }, [lang]);

  const changeLanguage = (newLang: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', newLang);
    router.push(`?${urlParams.toString()}`, { scroll: false });
    setLang(newLang);
  };

  const cleanHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const getSection = (type: string) => {
    return product?.sections?.find(s => s.type === type) || { name: "", values: [] };
  };

  if (loading) {
    return <LoadingScreen t={t} />;
  }

  if (error) {
    return <ErrorScreen error={error} t={t} />;
  }

  if (!product) {
    return <ErrorScreen error={t.notAvailable} t={t} />;
  }

  const offers = getSection("offers").values as any[];
  const trailerVideo = product.media.find(m => 
    m.resource_type === "video" && m.name === "preview_gallery"
  );

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{product.seo?.title || "IELTS Course by Munzereen Shahid"}</title>
        <meta name="description" content={product.seo?.description || "Comprehensive IELTS preparation course"} />
        <meta name="keywords" content={product.seo?.keywords || "IELTS, English, Course, Preparation"} />
      </Head>

      {offers.length > 0 && timeLeft && (
        <CountdownTimer 
          timeLeft={timeLeft} 
          offerText={offers[0].text} 
          t={t} 
        />
      )}

      <Header lang={lang} changeLanguage={changeLanguage} />

      <section className="bg-gradient-to-br from-red-50 via-white to-red-50 py-16 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <HeroSection 
                  trailerVideo={trailerVideo}
                  ctaText={product.cta_text}
                  t={t}
                />
                <FeaturesSection 
                  checklist={product.checklist} 
                  title={getSection("features").name} 
                />
              </div>
            </div>

            <div className="lg:col-span-3 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {cleanHtmlTags(product.title)}
              </h1>
              <div 
                className="prose prose-lg text-gray-700 mb-8"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              
              {getSection("features").values.length > 0 && (
                <div className="py-12 bg-white">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    {getSection("features").name || "Course Features"}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {getSection("features").values.map((feature: any, index: number) => (
                      <div key={index} className="flex flex-col md:flex-row items-center bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-md border border-red-100">
                        <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6 shadow-sm border border-red-200">
                          <Image 
                            src={feature.icon} 
                            alt={feature.title} 
                            width={40} 
                            height={40}
                            unoptimized
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-700">{feature.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.group_join_engagement && product.group_join_engagement.length > 0 && (
                <GroupEngagementSection 
                  engagement={product.group_join_engagement[0]} 
                  sectionTitle={getSection("feature_explanations").name} 
                />
              )}

              <AboutSection aboutItems={getSection("about").values} />

              <InstructorsSection 
                instructors={getSection("instructors").values} 
                title={getSection("instructors").name} 
              />

              <PointersSection 
                pointers={getSection("pointers").values} 
                title={getSection("pointers").name} 
              />

              <ExclusiveFeaturesSection 
                exclusiveFeatures={getSection("feature_explanations").values} 
                title={getSection("feature_explanations").name} 
              />

              <TestimonialsSection 
                testimonials={getSection("testimonials").values} 
                title={getSection("testimonials").name} 
                t={t}
              />

              {getSection("certificate").name && (
                <CertificateSection 
                  title={getSection("certificate").name} 
                  t={t}
                />
              )}

              <FAQSection 
                faqs={getSection("faq").values} 
                title={getSection("faq").name} 
              />

              {getSection("requirements").values.length > 0 && (
                <RequirementsSection 
                  requirements={getSection("requirements").values} 
                  title={getSection("requirements").name} 
                />
              )}

              {getSection("how_to_pay").values.length > 0 && (
                <HowToPaySection 
                  content={getSection("how_to_pay").values[0]} 
                  title={getSection("how_to_pay").name} 
                />
              )}

              <FinalCTASection ctaText={product.cta_text.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}